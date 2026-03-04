function aprobar(id) {
  const ramo = document.getElementById(id);
  ramo.classList.toggle('aprobado');
  ramo.classList.toggle('disponible');

  // Lógica para desbloquear siguientes ramos
  const todosLosRamos = document.querySelectorAll('.ramo[data-req]');
  todosLosRamos.forEach(proximo => {
    const requisitoId = proximo.getAttribute('data-req');
    if (document.getElementById(requisitoId).classList.contains('aprobado')) {
      proximo.classList.remove('bloqueado');
      proximo.classList.add('disponible');
      proximo.style.pointerEvents = "auto";
    }
  });
}
