function toggleRamo(id) {
    const ramo = document.getElementById(id);
    
    // Si ya está aprobado, lo volvemos a poner disponible (opcional por si te equivocas)
    if (ramo.classList.contains('aprobado')) {
        ramo.classList.remove('aprobado');
        ramo.classList.add('disponible');
    } else {
        ramo.classList.add('aprobado');
        ramo.classList.remove('disponible');
    }

    verificarRequisitos();
}

function verificarRequisitos() {
    const ramosConReq = document.querySelectorAll('.ramo[data-req]');
    
    ramosConReq.forEach(ramo => {
        const reqId = ramo.getAttribute('data-req');
        const requisito = document.getElementById(reqId);

        if (requisito && requisito.classList.contains('aprobado')) {
            // Si el pre-requisito está aprobado, desbloqueamos el ramo
            ramo.classList.remove('bloqueado');
            ramo.classList.add('disponible');
            ramo.style.pointerEvents = "auto";
        } else {
            // Si no está aprobado el requisito, lo bloqueamos
            ramo.classList.add('bloqueado');
            ramo.classList.remove('disponible');
            ramo.classList.remove('aprobado');
            ramo.style.pointerEvents = "none";
        }
    });
}

// Ejecutar al cargar para que los bloqueados empiecen bloqueados
window.onload = verificarRequisitos;
