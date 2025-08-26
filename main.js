
const storedList = localStorage.getItem("handleListe");
let handleListe = storedList ? JSON.parse(storedList) : []
const formHandleliste = document.getElementById("form")
const containerHandleliste = document.getElementById("container")

function saveList(list) {
    localStorage.setItem("handleListe", JSON.stringify(handleListe))
}

function renderHandleliste() {
    container.innerHTML = ""
    handleListe.forEach((x, index) => {
        const p = document.createElement("p")
        p.textContent = `${x.navn} ${x.pris} kr (${sunnToString(x.sunn)})`
        const btn = document.createElement("button")
        btn.innerHTML = "X"
        btn.addEventListener("click", () => {
            handleListe.splice(index, 1)
            saveList(handleListe);
            renderHandleliste();
        })
        p.appendChild(btn);
        container.appendChild(p);
        saveList(handleListe);
    })
}

formHandleliste.addEventListener("submit", (event) => {
    event.preventDefault();
    const navn = document.getElementById("input-navn").value;
    const pris = document.getElementById("input-pris").value;
    const sunn = document.getElementById("input-sunn").checked;

    handleListe.push({navn, pris, sunn})
    formHandleliste.reset()
    saveList();
    renderHandleliste()
})

function sunnToString(bool) {
    let str = ""
    bool === true ? str = "sunn" : str = "usunn"
    return str
}

renderHandleliste()








    