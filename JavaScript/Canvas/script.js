const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");


// Desenha a linha
contexto.beginPath();
contexto.moveTo(0, 150);
contexto.lineTo(500, 150);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(160, 150);
contexto.lineTo(160, 110)
contexto.lineTo(190, 110)
contexto.lineTo(190, 150)
contexto.stroke();

// Retangulo somente com borda
contexto.strokeRect(100, 50, 150, 100);

// Retangulo preenchido
contexto.strokeRect(100, 50, 150, 100);
contexto.beginPath();
contexto.moveTo(100, 50);
contexto.lineTo(175, 10)
contexto.lineTo(250, 50)
contexto.stroke();

contexto.beginPath();
contexto.arc(400, 60, 50, 0, Math.PI * 2);
contexto.stroke();