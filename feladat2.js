const data = {
    people: []
};

function adatbeolvasas() {
    let vezetek = document.getElementById("vnev").value;
    let kereszt = document.getElementById("knev").value;
    let szam = document.getElementById("szam").value;
    let jogsi = document.getElementById("jogsi").value.trim().toLowerCase();

    if (vezetek && kereszt && szam && jogsi) {
        let person = {
            vezetek,
            kereszt,
            szam,
            jogsi: jogsi === "van"
        };

        data.people.push(person);

        document.getElementById("dataForm").reset();
    } else {
        alert("Kérlek töltsd ki az összes mezőt!");
    }
}

function vanJogsi() {
    let list = document.getElementById("jogsi-ul");
    list.innerHTML = "";

    data.people.forEach(person => {
        if (person.jogsi) {
            let li = document.createElement("li");
            li.textContent = `${person.vezetek} ${person.kereszt} - Kedvenc szám: ${person.szam}`;
            list.appendChild(li);
        }
    });
}

function nincsJogsi() {
    let list = document.getElementById("nem-jogsi-ul");
    list.innerHTML = "";

    data.people.forEach(person => {
        if (!person.jogsi) {
            let li = document.createElement("li");
            li.textContent = `${person.vezetek} ${person.kereszt} - Kedvenc szám: ${person.szam}`;
            list.appendChild(li);
        }
    });
}
