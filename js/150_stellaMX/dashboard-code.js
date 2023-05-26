window.addEventListener('DOMContentLoaded', () => {
    eventListeners()
})

function eventListeners(params) {

    copyCodeRegistration()

    interObserver()

    // Funcionalidad de lasanimaciones AOS
    AOS.init({
		easing: 'ease',
        once: true,
    });
}

/* ========== Copy Portapapeles ========== */
function copyCodeRegistration() {
    const codeCopy = document.querySelector('#codeRegistration');
    codeCopy.addEventListener('click', (e) => {
        var copyText = document.getElementById("idCode");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        
        // var tooltip = document.getElementById("codeRegistration");
        // tooltip.innerHTML = "Copiado";
        codeCopy.classList.add('copied')
    })
}
/* ========== End Copy Portapapeles ========== */