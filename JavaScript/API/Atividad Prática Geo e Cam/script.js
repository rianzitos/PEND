const lati = document.querySelector("#lati")
const longi = document.querySelector("#longi")
const precisao = document.querySelector("#precis")
const botaoLocal = document.querySelector("#ligarLocal");
const botaoCam = document.querySelector("#ligarCam");
const botaoRegistrar = document.querySelector("#registrarPonto");

let localOk = false;
let camOk = false;

function verificarLiberacao() {
    if (localOk && camOk) {
        botaoRegistrar.style.display = "inline-block";
    }
}

botaoLocal.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(
        function (posicao) {
            console.log("Latitude: ", posicao.coords.latitude);
            console.log("Longitude: ", posicao.coords.longitude);
            console.log("Precisão: ", posicao.coords.accuracy);
            lati.textContent = `Latitude: ${posicao.coords.latitude}`
            longi.textContent = `Longitude: ${posicao.coords.longitude}`
            precisao.textContent = `Precisão: ${posicao.coords.accuracy}`

            localOk = true;
            verificarLiberacao();
        },
        function (erro) {
            console.log("Não foi possível obter a localização.", erro);
        }
    );
});


botaoCam.addEventListener("click", function () {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    })
        .then(function (stream) {
            const video = document.querySelector("#camera");
            video.srcObject = stream;

            camOk = true;
            verificarLiberacao();
        })
        .catch(function (erro) {
            console.log("Erro ao acessar câmera:", erro);
        });
});

botaoRegistrar.addEventListener("click", function () {
    console.log("Ponto registrado!");
    // aqui depois você pode adicionar o envio pro backend
});