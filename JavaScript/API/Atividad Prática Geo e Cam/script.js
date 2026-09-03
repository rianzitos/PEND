const lati = document.querySelector("#lati")
const longi = document.querySelector("#longi")
const precisao = document.querySelector("#precis")
const botaoLocal = document.querySelector("#ligarLocal");
const botaoCam = document.querySelector("#ligarCam");


botaoLocal.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(
        function (posicao) {
            console.log("Latitude: ", posicao.coords.latitude);
            console.log("Longitude: ", posicao.coords.longitude);
            console.log("Precisão: ", posicao.coords.accuracy);
            lati.textContent = `Latitude: ${posicao.coords.latitude}`
            longi.textContent = `Longitude: ${posicao.coords.longitude}`
            precisao.textContent = `Precisão: ${posicao.coords.accuracy}`
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
        })
        .catch(function (erro) {
            console.log("Erro ao acessar câmera:", erro);
        });
});