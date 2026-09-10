const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

contexto.lineWidth = 8;
contexto.lineCap = "round";
contexto.lineJoin = "round";

// Desenha a linha
contexto.beginPath();
contexto.arc(250, 60, 20, 0, Math.PI * 2);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(250, 80)
contexto.lineTo(250, 150);
contexto.lineTo(225, 190);
contexto.lineTo(225, 240);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(250, 150);
contexto.lineTo(275, 190)
contexto.lineTo(275, 240)
contexto.stroke();

contexto.beginPath();
contexto.moveTo(250, 82);
contexto.lineTo(280, 110)
contexto.lineTo(300, 80)
contexto.stroke();

contexto.beginPath();
contexto.moveTo(250, 82);
contexto.lineTo(220, 110);
contexto.lineTo(260, 130);
contexto.stroke();
