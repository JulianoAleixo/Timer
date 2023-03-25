function relogio() {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;

    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
    }

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e){
        const el = e.target;

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            iniciar.classList.remove('iniciadoBTN');
            pausar.classList.remove('pausadoBTN');
            zerar.classList.add('zeradoBTN');
            relogio.innerHTML = '00:00:00';
            segundos = 0;    
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
            iniciar.classList.remove('iniciadoBTN');
            pausar.classList.add('pausadoBTN');
            zerar.classList.remove('zeradoBTN');
        }
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            iniciar.classList.add('iniciadoBTN');
            pausar.classList.remove('pausadoBTN');
            zerar.classList.remove('zeradoBTN');
            clearInterval(timer);
            iniciaRelogio(); 
        }
    })
}
relogio();