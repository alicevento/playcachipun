//Juego de cachipun contra el computador. El computador debe preguntarle al ususario cuantas veces quiere jugar.
//Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta dependiendo de las veces que haya indicado el usuario que desea jugar

function jugarCachipun() {
  let vecesJugar = parseInt(document.getElementById("cantidad").value);

  //Solicitar al usuario que indique su jugada: Las opciones son las siguientes: Piedra, Papel, Tijera

  for (let i = 0; i < vecesJugar; i++) {
    let jugadaUsuario = document.getElementById("jugada").value;

    //Generar una jugada automática para la máquina usando la función Math.random()de Javascript
    let jugadaComputador = Math.floor(Math.random() * 3) + 1;
    let jugadaComputadorTexto = "";
    if (jugadaComputador === 1) {
      jugadaComputadorTexto = "Piedra";
    } else if (jugadaComputador === 2) {
      jugadaComputadorTexto = "Papel";
    } else {
      jugadaComputadorTexto = "Tijera";
    }

    //Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina. Indicar el resultado de la partida dependiendo del caso. Felicitar al ganador en caso de ser el usuario.Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea la que gane. Declarar un empate.

    let resultado = "";
    if (
      (jugadaUsuario === "piedra" && jugadaComputadorTexto === "Tijera") ||
      (jugadaUsuario === "papel" && jugadaComputadorTexto === "Piedra") ||
      (jugadaUsuario === "tijera" && jugadaComputadorTexto === "Papel")
    ) {
      resultado = "¡Ganaste!";
    } else if (
      (jugada === "piedra" && jugadaComputadorTexto === "Papel") ||
      (jugada === "papel" && jugadaComputadorTexto === "Tijera") ||
      (jugada === "tijera" && jugadaComputadorTexto === "Piedra")
    ) {
      resultado = "¡Perdiste!";
    } else {
      resultado = "¡Empate!";
    }

    // Mostrar el resultado del juego con interpolación
    alert(`El computador jugó: ${jugadaComputadorTexto}. ${resultado}`);
  }
}
