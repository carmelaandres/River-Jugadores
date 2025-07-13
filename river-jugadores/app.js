// Esta función se ejecuta cuando el documento está listo
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("jugadores-container");

  // Leemos el archivo jugadores.json
  fetch("data/jugadores.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo JSON");
      }
      return response.json();
    })
    .then(jugadores => {
      jugadores.forEach(jugador => {
        const div = document.createElement("div");
        div.className = "jugador";
        div.innerHTML = `
          <h3>${jugador.nombre}</h3>
          <p><strong>Edad:</strong> ${jugador.edad}</p>
          <p><strong>Posición:</strong> ${jugador.posicion}</p>
          <p><strong>Nacionalidad:</strong> ${jugador.nacionalidad}</p>
          <p><strong>Partidos jugados:</strong> ${jugador.partidos}</p>
          <p><strong>Goles:</strong> ${jugador.goles}</p>
          <hr>
        `;
        container.appendChild(div);
      });
    })
    .catch(error => {
      container.innerHTML = `<p>Error al cargar los jugadores 😓</p>`;
      console.error(error);
    });
});
