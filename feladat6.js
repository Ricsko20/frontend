let userData = null;

    function fetchUserData() {
        const username = document.getElementById('username').value;
        const url = `https://www.codewars.com/api/v1/users/${username}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('404 - Felhasználó nem található');
                }
                return response.json();
            })
            .then(data => {
                userData = data;
                document.getElementById('error').textContent = '';
                showSummary();
            })
            .catch(error => {
                document.getElementById('userInfo').innerHTML = '';
                document.getElementById('error').textContent = error.message;
            });
    }

    function showSummary() {
        if (!userData) return;

        const summaryHTML = `
            <h2>${userData.username}</h2>
            <p>Pontok: ${userData.kataRank}</p>
            <p>Rank: ${userData.rank}</p>
        `;
        document.getElementById('userInfo').innerHTML = summaryHTML;
    }

    function showLanguages() {
        if (!userData) return;

        const languages = userData.languages;
        let languagesHTML = '<h2>Nyelvek Szerinti Pontok</h2>';

        for (const [language, data] of Object.entries(languages)) {
            languagesHTML += `
                <p>${language}: Pontok - ${data.total}, Rank - ${data.rank}</p>
            `;
        }
        document.getElementById('userInfo').innerHTML = languagesHTML;
    }