

window.onload = () => {
    var btn = document.querySelector('.btn')

    btn.addEventListener("click", generate)

}



function generate() {

    var qr = document.getElementById("qrcode");
    qr.innerHTML = ""


    var url = document.getElementById("url").value
    if (url === "") {
        alert("No URL Found, Please enter a URL")
    }
    console.log(url)

    generateQrCode(url)

    qr.style.display = 'block'

}

function generateQrCode(url) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

