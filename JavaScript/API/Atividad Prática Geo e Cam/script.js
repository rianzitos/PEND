const lati = document.querySelector("#lati")
const longi = document.querySelector("#longi")
const precisao = document.querySelector("#precis")
const botaoLocal = document.querySelector("#ligarLocal");
const botaoCam = document.querySelector("#ligarCam");
const botaoRegistrar = document.querySelector("#registrarPonto");
const botaoTirarFoto = document.querySelector("#tirarFoto");
const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");
const containerFoto = document.querySelector(".containerFoto")


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
            video.srcObject = stream;

            camOk = true;
            verificarLiberacao();
            botaoCam.style.display = "none";
            botaoTirarFoto.style.display = "block"
        })
        .catch(function (erro) {
            console.log("Erro ao acessar câmera:", erro);
        });

});

botaoRegistrar.addEventListener("click", function () {
    console.log("Ponto registrado!");
});

botaoTirarFoto.addEventListener("click", function () {

    containerFoto.style.display = "block";

    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    foto.src = canvas.toDataURL("image/png");
})