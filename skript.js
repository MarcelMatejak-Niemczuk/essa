function zmientlo() {
    const wyraz = document.getElementById("napis");
    wyraz.classList.add("tlo");
}

function zmienrozmiar() {
    const wyraz = document.getElementById("napis");
    wyraz.classList.add("rozmiar");
}

function zmienkroj() {
    const wyraz = document.getElementById("napis");
    wyraz.classList.add("kroj");
}

function skresltekst() {
    const wyraz = document.getElementById("napis");
    wyraz.classList.add("skresl");
}

function usunEfekty() {
    const wyraz = document.getElementById("napis");
    wyraz.classList.remove("tlo", "rozmiar", "kroj", "skresl");
}
