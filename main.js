const text = "Te doy la bienvenida a mi tarjeta de presentación profesional.";
const speed = 100; // Geschwindigkeit pro Zeichen in ms
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        document.getElementById("typewriter").textContent = "";
        i = 0;
        typeWriter();
      }, 1500); // kurze Pause vor Neustart
    }
  }
  window.onload = typeWriter;