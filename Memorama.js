document.addEventListener("DOMContentLoaded", () => {
  // 🔹 Referencias
  const inicio = document.getElementById("inicio");
  const info = document.getElementById("info");
  const tituloInfo = document.getElementById("titulo-info");
  const textoInfo = document.getElementById("texto-info");
  const btnIrJuego = document.getElementById("btnIrJuego");
  const juego = document.getElementById("juego");
  const tablero = document.getElementById("tablero");

  // 🔹 Información para las secciones
  const datosInfo = {
    1: {
      titulo: "Ciencias Naturales, Experimentales y tecnologia V",
      texto:
        "La La Ley de Hooke se relaciona con las Ciencias Naturales, Experimentales y la Tecnología V   porque explica cómo se comportan los materiales al aplicarles una fuerza, lo cual forma parte del estudio de la materia, la energía y el movimiento. En las Ciencias Naturales ayuda a entender cómo los cuerpos elásticos, como resortes, ligas o incluso tejidos biológicos, cambian su forma ante una fuerza. En las Ciencias Experimentales se puede comprobar mediante experimentos, midiendo cuánto se estira un resorte al colgarle distintos pesos y observando la relación proporcional entre la fuerza y la deformación, aplicando el método científico. En la Tecnología y la Física se usa para diseñar y calcular sistemas donde intervienen resortes o materiales elásticos, como suspensiones de autos, básculas o relojes. En resumen, la Ley de Hooke conecta la ciencia con la práctica, ya que permite comprender un fenómeno natural, comprobarlo experimentalmente y aplicarlo en la creación de tecnologías útiles."
    },
    2: {
      titulo: "Conciencia Histórica II",
      texto:
        "La Ley de Hooke también puede relacionarse con Conciencia Histórica II porque forma parte del desarrollo del pensamiento científico durante la Revolución Científica en los siglos XVI y XVII, un periodo clave en la historia de la humanidad. En esa época, científicos como Robert Hooke impulsaron el uso de la observación, la experimentación y la formulación de leyes para explicar fenómenos naturales, lo que transformó la manera en que las personas entendían el munndo Esta ley refleja el avance del conocimiento humano y cómo la ciencia comenzó a basarse en la razón y la evidencia, dejando atrás explicaciones basadas solo en la tradición o la religión. Además, representa el inicio de una nueva relación entre la ciencia, la tecnología y la sociedad, ya que sus principios se aplicaron más tarde en inventos y máquinas que impulsaron la Revolución Industrial, cambiando la historia económica y social del mundo."
    },
    3: {
      titulo: "Ingles V",
      texto:
        "La Ley de Hooke se relaciona con la materia de Inglés V porque el inglés es el idioma principal de la ciencia y la tecnología, y muchos términos, investigaciones y textos sobre física, como esta ley, se encuentran originalmente en inglés. Estudiarla en este idioma permite comprender vocabulario técnico (por ejemplo: force, spring, elasticity, extension, proportionality constant), mejorar la lectura de textos científicos y desarrollar habilidades de comprensión y comunicación académica.Además, aprender sobre la Ley de Hooke en inglés ayuda a los estudiantes a integrar el idioma con el conocimiento científico, facilitando el acceso a información internacional, investigaciones modernas y materiales educativos. En resumen, la relación entre la Ley de Hooke y Inglés V está en que el uso del inglés permite entender, comunicar y aplicar conceptos científicos en un contexto global, fortaleciendo tanto el aprendizaje del idioma como el de la física."
    },
    4: {
      titulo: "Aplicaciones del Pensamiento Matemático",
      texto:
        "La Ley de Hooke es una de las bases más importantes de la física y la ingeniería. Fue formulada por el científico inglés Robert Hooke en 1660 y describe cómo se comportan los cuerpos elásticos, como resortes, ligas o ciertos materiales, cuando se les aplica una fuerza. Esta ley establece que la deformación que sufre un cuerpo elástico es directamente proporcional a la fuerza que se le aplica, siempre que no se exceda el límite elástico del material. En otras palabras, si estiras un resorte con el doble de fuerza, se estira el doble, pero solo hasta cierto punto; si se aplica demasiada fuerza, el resorte deja de comportarse elásticamente y puede deformarse de forma permanente.La fórmula de la Ley de Hooke es F = k × x, donde F representa la fuerza aplicada (en newtons), k es la constante elástica o de rigidez del resorte (en N/m) y x es la deformación o cambio en la longitud (en metros). Si k es grande, el resorte es duro y cuesta más trabajo estirarlo; si k es pequeña, el resorte es más suave y se estira fácilmente. La relación entre la fuerza y la deformación se representa con una línea recta, lo que indica que son directamente proporcionales.Por ejemplo, si un resorte tiene una constante elástica de 200 N/m y se estira 0.05 m, la fuerza aplicada será F = 200 × 0.05 = 10 N, lo que significa que se usaron 10 newtons de fuerza para lograr ese estiramiento. Sin embargo, cada material tiene un punto llamado límite elástico, que indica hasta dónde puede deformarse y volver a su forma original. Si se supera, el material ya no recupera su forma y puede romperse.La Ley de Hooke es fundamental porque permite predecir el comportamiento de materiales elásticos. Gracias a ella se pueden diseñar suspensiones de autos, puentes, máquinas, básculas e instrumentos de medición, entre muchos otros dispositivos. En conclusión, esta ley demuestra cómo las fuerzas afectan la materia y cómo la física se aplica en la vida real. Es un claro ejemplo de cómo la observación, la experimentación y las matemáticas permiten comprender y aprovechar las propiedades del mundo natural."
    }
  };

  // 🔹 Funciones para navegación
  window.mostrarInfo = function (num) {
    inicio.classList.add("oculto");
    info.classList.remove("oculto");
    tituloInfo.textContent = datosInfo[num].titulo;
    textoInfo.textContent = datosInfo[num].texto;
  };

  window.volverInicio = function () {
    info.classList.add("oculto");
    inicio.classList.remove("oculto");
  };

  btnIrJuego.addEventListener("click", () => {
    inicio.classList.add("oculto");
    juego.classList.remove("oculto");
    crearCartas();
  });

  // 🔹 Código del memorama (el mismo que tú ya tenías)
  const animales = [
    { nombre: "Perro", imagen: "perro.png" },
    { nombre: "Gato", imagen: "gato.png" },
    { nombre: "Elefante", imagen: "elefante.png" },
    { nombre: "León", imagen: "León.png" },
    { nombre: "Vaca", imagen: "vaca.png" },
    { nombre: "Conejo", imagen: "conejo.png" },
  ];

  let cartas = [];
  let primera = null;
  let segunda = null;
  let bloquear = false;

  function crearCartas() {
    cartas = [];

    animales.forEach(animal => {
      cartas.push({ tipo: "nombre", valor: animal.nombre, pareja: animal.nombre });
      cartas.push({ tipo: "imagen", valor: animal.imagen, pareja: animal.nombre });
    });

    cartas.sort(() => Math.random() - 0.5);

    tablero.innerHTML = "";
    cartas.forEach(info => {
      const carta = document.createElement("div");
      carta.classList.add("carta");

      const inner = document.createElement("div");
      inner.classList.add("carta-inner");

      const front = document.createElement("div");
      front.classList.add("carta-front");

      const back = document.createElement("div");
      back.classList.add("carta-back");

      if (info.tipo === "imagen") {
        const img = document.createElement("img");
        img.src = info.valor;
        img.alt = info.pareja;
        back.appendChild(img);
      } else {
        const texto = document.createElement("span");
        texto.textContent = info.valor;
        back.appendChild(texto);
      }

      inner.appendChild(front);
      inner.appendChild(back);
      carta.appendChild(inner);

      carta.dataset.tipo = info.tipo;
      carta.dataset.pareja = info.pareja;

      carta.addEventListener("click", voltearCarta);
      tablero.appendChild(carta);
    });
  }

  function voltearCarta() {
    if (
      bloquear ||
      this.querySelector(".carta-inner").classList.contains("volteada") ||
      this.classList.contains("acertada")
    )
      return;

    this.querySelector(".carta-inner").classList.add("volteada");

    if (!primera) {
      primera = this;
      return;
    }

    segunda = this;
    bloquear = true;
    verificarPareja();
  }

  function verificarPareja() {
    if (
      primera.dataset.pareja === segunda.dataset.pareja &&
      primera.dataset.tipo !== segunda.dataset.tipo
    ) {
      primera.classList.add("acertada");
      segunda.classList.add("acertada");
      resetearTurno();
      verificarVictoria();
    } else {
      setTimeout(() => {
        primera.querySelector(".carta-inner").classList.remove("volteada");
        segunda.querySelector(".carta-inner").classList.remove("volteada");
        resetearTurno();
      }, 900);
    }
  }

  function resetearTurno() {
    [primera, segunda, bloquear] = [null, null, false];
  }

  function verificarVictoria() {
    const acertadas = document.querySelectorAll(".acertada").length;
    if (acertadas === cartas.length) {
      setTimeout(() => alert("🎉 ¡Felicidades! Has encontrado todas las parejas 🐾"), 400);
    }
  }
});
