function zmientlo() {
    const wyraz = document.getElementById(napis)
    napis.classList.replace("rozmiar","tlo")
}

function zmienrozmiar() {
    const wyraz = document.getElementById(napis)
    napis.classList.add("rozmiar")
}

function zmienkroj() {
    const wyraz = document.getElementById(napis)
    napis.classList.add("kroj")
}

function usunEfekty() {
    const wyraz = document.getElementById(napis)
    napis.classList.remove("tlo", "rozmiar", "kroj")
}