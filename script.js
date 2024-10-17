const btn = document.getElementById('button');

document.getElementById('form')

.addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Capturando...';

    const serviceID = 'default_service';
    const templateID = 'template_1ayuvjg';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Capturar Quiniela';
        alert('¡Capturada!');
    }, (err) => {
        btn.value = 'Quiniela Capturada';
        alert(JSON.stringify(err));
    });
});
