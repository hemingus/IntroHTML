

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
        p.style.justifyContent = "start"
        p.style.gap = "10px"
        if (!x.sunn) p.style.background = "beige"
        const indexText = document.createElement("span")
        indexText.textContent = (index + 1).toString()
        const navnText = document.createElement("span")
        navnText.textContent = x.navn
        const prisText = document.createElement("span")
        prisText.style.background = "yellowgreen"
        prisText.textContent = `${x.pris.toString()} kr`
        p.append(indexText, navnText, prisText)
        
        const btn = document.createElement("button")
        btn.innerHTML = "X"
        btn.style.marginLeft = "auto"
        btn.setAttribute("data-tooltip", "Remove item");
        btn.addEventListener("click", () => {
            tooltip.classList.remove("show");
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








    