document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM! (Código HTML = innerHTML)</p>";

document.getElementById("mensagem").textContent = "Texto simples, sem HTML. (textContent)";

document.getElementById("foto").setAttribute("src", "corinthians_campeao_supercopa_do_brasil_2026_700_5.jpg");

let url = document.getElementById("link").getAttribute("href");
console.log(url);

document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alerta").classList.add("destaque");