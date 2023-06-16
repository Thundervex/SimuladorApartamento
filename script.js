const imagen = document.querySelector("#Inicial");
const cambiarDentroLavado = document.querySelector("#cambiarDentroLavado");
const CuartoLavado = document.querySelector(".CuartoLavado");
const botonesAdicionalesLavado = document.querySelector(
  ".botonesAdicionalesLavado"
);
const EncenderLavado = document.querySelector("#EncenderLavado");
const ApagarLavado = document.querySelector("#ApagarLavado");
const AbrirVenatanaLavado = document.querySelector("#AbrirVenatanaLavado");
const volver = document.querySelector("#volver");

const recognition = new window.webkitSpeechRecognition();

recognition.continuous = true;

recognition.onresult = function (event) {
  const last = event.results.length - 1;
  const command = event.results[last][0].transcript.toLowerCase();

  if (command.includes("cuarto lavado")) {
    cambiarDentroLavado.click();
  } else if (command.includes("encender lavado")) {
    EncenderLavado.click();
  } else if (command.includes("apagar lavado")) {
    ApagarLavado.click();
  } else if (command.includes("abrir ventana")) {
    AbrirVenatanaLavado.click();
  } else if (command.includes("salir lavado")) {
    volver.click();

    //habitacion1
  } else if (command.includes("cuarto uno")) {
    cambiarDentroHabitacion1.click();
  } else if (command.includes("encender cuarto")) {
    EncenderHabitacion1.click();
  } else if (command.includes("apagar cuarto")) {
    ApagarHabitacion1.click();
  } else if (command.includes("salir cuarto")) {
    volver2.click();

    //habitacion3
  } else if (command.includes("cuarto principal")) {
    cambiarDentroHabitacion3.click();
  } else if (command.includes("encender principal")) {
    EncenderHabitacion3.click();
  } else if (command.includes("apagar principal")) {
    ApagarHabitacion3.click();
  } else if (command.includes("salir principal")) {
    volver4.click();

    //BañoPrincipal
  } else if (command.includes("baño principal")) {
    cambiarBaboPrincipal.click();
  } else if (command.includes("encender baño")) {
    EncenderBañoPrincipal.click();
  } else if (command.includes("apagar baño")) {
    ApagarBañoPrincipal.click();
  } else if (command.includes("salir baño")) {
    volver5.click();

    //BañoPrivado
  } else if (command.includes("baño privado")) {
    cambiarBanoPrivado.click();
  } else if (command.includes("encender privado")) {
    EncenderBañoPrivado.click();
  } else if (command.includes("apagar privado")) {
    ApagarBañoPrivado.click();
  } else if (command.includes("salir privado")) {
    volver6.click();
  }
};

window.onload = function () {
  recognition.start();
};

cambiarDentroLavado.addEventListener("click", () => {
  document.getElementById("APuertaLavado").play();
  const rutaImagen = cambiarDentroLavado.getAttribute("data-image");
  imagen.src = rutaImagen;

  CuartoLavado.style.display = "none";
  Habitacion1.style.display = "none";
  Habitacion2.style.display = "none";
  Habitacion3.style.display = "none";
  BanoPrincipal.style.display = "none";
  BanoPrivado.style.display = "none";
  botonesAdicionalesLavado.style.display = "flex";
});

EncenderLavado.addEventListener("click", () => {
  const rutaImagen = EncenderLavado.getAttribute("data-image");
  imagen.src = rutaImagen;
});

ApagarLavado.addEventListener("click", () => {
  const rutaImagen = ApagarLavado.getAttribute("data-image");
  imagen.src = rutaImagen;
});

AbrirVenatanaLavado.addEventListener("click", () => {
  document.getElementById("VentanaL").play();
});

volver.addEventListener("click", () => {
  document.getElementById("volver").addEventListener("click", function () {
    document.getElementById("CPuertaLavado").play();
  });
  CuartoLavado.style.display = "flex";
  Habitacion1.style.display = "flex";
  Habitacion2.style.display = "flex";
  Habitacion3.style.display = "flex";
  BanoPrincipal.style.display = "flex";
  BanoPrivado.style.display = "flex";
  botonesAdicionalesLavado.style.display = "none";

  imagen.src =
    "https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941";
});

const cambiarDentroHabitacion1 = document.querySelector(
  "#cambiarDentroHabitacion1"
);
const Habitacion1 = document.querySelector(".Habitacion1");
const botonesAdicionaHabitacion1 = document.querySelector(
  ".botonesAdicionaHabitacion1"
);
const EncenderHabitacion1 = document.querySelector("#EncenderHabitacion1");
const ApagarHabitacion1 = document.querySelector("#ApagarHabitacion1");
const volver2 = document.querySelector("#volver2");

cambiarDentroHabitacion1.addEventListener("click", () => {
  document
    .getElementById("cambiarDentroHabitacion1")
    .addEventListener("click", function () {
      document.getElementById("APuertaH1").play();
    });
  const rutaImagen = cambiarDentroHabitacion1.getAttribute("data-image");
  imagen.src = rutaImagen;
  CuartoLavado.style.display = "none";
  Habitacion1.style.display = "none";
  Habitacion2.style.display = "none";
  Habitacion3.style.display = "none";
  BanoPrincipal.style.display = "none";
  BanoPrivado.style.display = "none";
  botonesAdicionaHabitacion1.style.display = "flex";
});

EncenderHabitacion1.addEventListener("click", () => {
  const rutaImagen = EncenderHabitacion1.getAttribute("data-image");
  imagen.src = rutaImagen;
});

ApagarHabitacion1.addEventListener("click", () => {
  const rutaImagen = ApagarHabitacion1.getAttribute("data-image");
  imagen.src = rutaImagen;
});

volver2.addEventListener("click", () => {
  document.getElementById("volver").addEventListener("click", function () {
    document.getElementById("CPuertaH1").play();
  });
  CuartoLavado.style.display = "flex";
  Habitacion1.style.display = "flex";
  Habitacion2.style.display = "flex";
  Habitacion3.style.display = "flex";
  BanoPrincipal.style.display = "flex";
  BanoPrivado.style.display = "flex";
  botonesAdicionaHabitacion1.style.display = "none";
  imagen.src =
    "https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941";
});

const cambiarDentroHabitacion2 = document.querySelector(
  "#cambiarDentroHabitacion2"
);
const Habitacion2 = document.querySelector(".Habitacion2");
const botonesAdicionaHabitacion2 = document.querySelector(
  ".botonesAdicionaHabitacion2"
);
const EncenderHabitacion2 = document.querySelector("#EncenderHabitacion2");
const ApagarHabitacion2 = document.querySelector("#ApagarHabitacion2");
const volver3 = document.querySelector("#volver3");

cambiarDentroHabitacion2.addEventListener("click", () => {
  const rutaImagen = cambiarDentroHabitacion2.getAttribute("data-image");
  imagen.src = rutaImagen;
  CuartoLavado.style.display = "none";
  Habitacion1.style.display = "none";
  Habitacion2.style.display = "none";
  Habitacion3.style.display = "none";
  BanoPrincipal.style.display = "none";
  BanoPrivado.style.display = "none";
  botonesAdicionaHabitacion2.style.display = "flex";
});

EncenderHabitacion2.addEventListener("click", () => {
  const rutaImagen = EncenderHabitacion2.getAttribute("data-image");
  imagen.src = rutaImagen;
});

ApagarHabitacion2.addEventListener("click", () => {
  const rutaImagen = ApagarHabitacion2.getAttribute("data-image");
  imagen.src = rutaImagen;
});

document
  .getElementById("AbrirVenatanaH2")
  .addEventListener("click", function () {
    document.getElementById("VentanaH2").play();
  });
volver3.addEventListener("click", () => {
  CuartoLavado.style.display = "flex";
  Habitacion1.style.display = "flex";
  Habitacion2.style.display = "flex";
  Habitacion3.style.display = "flex";
  BanoPrincipal.style.display = "flex";
  BanoPrivado.style.display = "flex";
  botonesAdicionaHabitacion2.style.display = "none";
  imagen.src =
    "https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941";
});

const cambiarDentroHabitacion3 = document.querySelector(
  "#cambiarDentroHabitacion3"
);
const Habitacion3 = document.querySelector(".Habitacion3");
const botonesAdicionaHabitacion3 = document.querySelector(
  ".botonesAdicionaHabitacion3"
);
const EncenderHabitacion3 = document.querySelector("#EncenderHabitacion3");
const ApagarHabitacion3 = document.querySelector("#ApagarHabitacion3");
const volver4 = document.querySelector("#volver4");

cambiarDentroHabitacion3.addEventListener("click", () => {
  const rutaImagen = cambiarDentroHabitacion3.getAttribute("data-image");
  imagen.src = rutaImagen;
  CuartoLavado.style.display = "none";
  Habitacion1.style.display = "none";
  Habitacion2.style.display = "none";
  Habitacion3.style.display = "none";
  BanoPrincipal.style.display = "none";
  BanoPrivado.style.display = "none";
  botonesAdicionaHabitacion3.style.display = "flex";
});

EncenderHabitacion3.addEventListener("click", () => {
  const rutaImagen = EncenderHabitacion3.getAttribute("data-image");
  imagen.src = rutaImagen;
});

ApagarHabitacion3.addEventListener("click", () => {
  const rutaImagen = ApagarHabitacion3.getAttribute("data-image");
  imagen.src = rutaImagen;
});

document
  .getElementById("AbrirVenatanaH3")
  .addEventListener("click", function () {
    document.getElementById("VentanaH3").play();
  });
volver4.addEventListener("click", () => {
  CuartoLavado.style.display = "flex";
  Habitacion1.style.display = "flex";
  Habitacion2.style.display = "flex";
  Habitacion3.style.display = "flex";
  BanoPrincipal.style.display = "flex";
  BanoPrivado.style.display = "flex";
  botonesAdicionaHabitacion3.style.display = "none";
  imagen.src =
    "https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941";
});

const cambiarBaboPrincipal = document.querySelector("#cambiarBanoPrincipal");
const BanoPrincipal = document.querySelector(".BanoPrincipal");
const botonesAdicionaBanoPrincipal = document.querySelector(
  ".botonesAdicionaBanoPrincipal"
);
const EncenderBañoPrincipal = document.querySelector("#EncenderBañoPrincipal");
const ApagarBañoPrincipal = document.querySelector("#ApagarBañoPrincipal");
const volver5 = document.querySelector("#volver5");

cambiarBaboPrincipal.addEventListener("click", () => {
  const rutaImagen = cambiarBaboPrincipal.getAttribute("data-image");
  imagen.src = rutaImagen;
  CuartoLavado.style.display = "none";
  Habitacion1.style.display = "none";
  Habitacion2.style.display = "none";
  Habitacion3.style.display = "none";
  BanoPrincipal.style.display = "none";
  BanoPrivado.style.display = "none";
  botonesAdicionaBanoPrincipal.style.display = "flex";
});

EncenderBañoPrincipal.addEventListener("click", () => {
  const rutaImagen = EncenderBañoPrincipal.getAttribute("data-image");
  imagen.src = rutaImagen;
});

ApagarBañoPrincipal.addEventListener("click", () => {
  const rutaImagen = ApagarBañoPrincipal.getAttribute("data-image");
  imagen.src = rutaImagen;
});

document.getElementById("BajarBanoPrin").addEventListener("click", function () {
  document.getElementById("BajarBanoPr").play();
});

volver5.addEventListener("click", () => {
  CuartoLavado.style.display = "flex";
  Habitacion1.style.display = "flex";
  Habitacion2.style.display = "flex";
  Habitacion3.style.display = "flex";
  BanoPrincipal.style.display = "flex";
  BanoPrivado.style.display = "flex";
  botonesAdicionaBanoPrincipal.style.display = "none";
  imagen.src =
    "https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941";
});

const cambiarBanoPrivado = document.querySelector("#cambiarBanoPrivado");
const BanoPrivado = document.querySelector(".BanoPrivado");
const botonesAdicionaBanoPrivado = document.querySelector(
  ".botonesAdicionaBanoPrivado"
);
const EncenderBañoPrivado = document.querySelector("#EncenderBañoPrivado");
const ApagarBañoPrivado = document.querySelector("#ApagarBañoPrivado");
const volver6 = document.querySelector("#volver6");

cambiarBanoPrivado.addEventListener("click", () => {
  const rutaImagen = cambiarBanoPrivado.getAttribute("data-image");
  imagen.src = rutaImagen;
  CuartoLavado.style.display = "none";
  Habitacion1.style.display = "none";
  Habitacion2.style.display = "none";
  Habitacion3.style.display = "none";
  BanoPrincipal.style.display = "none";
  BanoPrivado.style.display = "none";
  botonesAdicionaBanoPrivado.style.display = "flex";
});

EncenderBañoPrivado.addEventListener("click", () => {
  const rutaImagen = EncenderBañoPrivado.getAttribute("data-image");
  imagen.src = rutaImagen;
});

ApagarBañoPrivado.addEventListener("click", () => {
  const rutaImagen = ApagarBañoPrivado.getAttribute("data-image");
  imagen.src = rutaImagen;
});

document.getElementById("BajarBanoPriv").addEventListener("click", function () {
  document.getElementById("BajarBanoP").play();
});

volver6.addEventListener("click", () => {
  CuartoLavado.style.display = "flex";
  Habitacion1.style.display = "flex";
  Habitacion2.style.display = "flex";
  Habitacion3.style.display = "flex";
  BanoPrincipal.style.display = "flex";
  BanoPrivado.style.display = "flex";
  botonesAdicionaBanoPrivado.style.display = "none";
  imagen.src =
    "https://cdn.glitch.global/d7cb4701-bcc3-4801-b808-afe62d7fd7cd/Negro.png?v=1682813596941";
});