// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array global para almacenar los nombres ingresados
const amigos = [];

// Añade un nombre al array y actualiza la lista en pantalla
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();
  if (!nombre) {
    alert('Por favor ingresa un nombre');
    return;
  }
  if (amigos.includes(nombre)) {
    alert('Este nombre ya está en la lista');
    input.value = '';
    input.focus();
    return;
  }
  amigos.push(nombre);
  actualizarListaAmigos();
  input.value = '';
  input.focus();
}

// Refresca amigos agregados
function actualizarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}
// Función que saca un único nombre al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay participantes para sortear');
    return;
  }

  // Elegir un índice aleatorio entre 0 y amigos.length - 1
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indiceAleatorio];

  // Mostrar solo ese nombre en el resultado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';            // Limpiar cualquier sorteo previo
  const li = document.createElement('li');
  li.textContent = `Tu amigo secreto es: ${amigoSeleccionado}`;
  resultado.appendChild(li);
}

// Permite pulsar Enter para agregar un nombre sin hacer clic en el botón
document.getElementById('amigo')
  .addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      agregarAmigo();
    }
  });
