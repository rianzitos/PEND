const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

contexto.lineWidth = 5;
contexto.lineCap = "round";
contexto.lineJoin = "round";

// =====================
// CABEÇA / CAPACETE
// =====================

contexto.beginPath();
contexto.arc(250, 60, 20, 0, Math.PI * 2);

contexto.fillStyle = "#b71c1c";
contexto.fill();
contexto.stroke();

// Rosto dourado
contexto.beginPath();
contexto.moveTo(240, 50);
contexto.lineTo(260, 50);
contexto.lineTo(265, 70);
contexto.lineTo(250, 80);
contexto.lineTo(235, 70);
contexto.closePath();

contexto.fillStyle = "#d4af37";
contexto.fill();
contexto.stroke();

// Olhos
contexto.beginPath();
contexto.moveTo(238, 60);
contexto.lineTo(247, 62);
contexto.lineTo(242, 66);
contexto.lineTo(237, 64);
contexto.closePath();

contexto.fillStyle = "white";
contexto.fill();

contexto.beginPath();
contexto.moveTo(253, 62);
contexto.lineTo(262, 60);
contexto.lineTo(263, 64);
contexto.lineTo(258, 66);
contexto.closePath();

contexto.fillStyle = "white";
contexto.fill();


// =====================
// CORPO
// =====================

contexto.beginPath();

contexto.moveTo(250, 80);
contexto.lineTo(250, 150);

contexto.lineTo(225, 190);
contexto.lineTo(225, 240);

contexto.stroke();

// Perna direita
contexto.beginPath();

contexto.moveTo(250, 150);
contexto.lineTo(275, 190);
contexto.lineTo(275, 240);

contexto.stroke();


// =====================
// BRAÇO ESQUERDO
// =====================

contexto.beginPath();

contexto.moveTo(250, 82);
contexto.lineTo(220, 110);
contexto.lineTo(200, 80);

contexto.stroke();

// Mão
contexto.beginPath();
contexto.arc(200, 78, 7, 0, Math.PI * 2);

contexto.fillStyle = "#d4af37";
contexto.fill();
contexto.stroke();


// =====================
// BRAÇO DIREITO
// =====================

contexto.beginPath();

contexto.moveTo(250, 82);
contexto.lineTo(280, 110);
contexto.lineTo(300, 80);

contexto.stroke();

// Mão
contexto.beginPath();
contexto.arc(300, 78, 7, 0, Math.PI * 2);

contexto.fillStyle = "#d4af37";
contexto.fill();
contexto.stroke();


// =====================
// REATOR ARC
// =====================

contexto.beginPath();
contexto.arc(250, 100, 12, 0, Math.PI * 2);

contexto.fillStyle = "lightblue";
contexto.fill();
contexto.stroke();


// =====================
// DETALHES VERMELHOS
// =====================

// Ombro esquerdo
contexto.beginPath();
contexto.arc(220, 110, 8, 0, Math.PI * 2);

contexto.fillStyle = "#b71c1c";
contexto.fill();
contexto.stroke();

// Ombro direito
contexto.beginPath();
contexto.arc(280, 110, 8, 0, Math.PI * 2);

contexto.fillStyle = "#b71c1c";
contexto.fill();
contexto.stroke();