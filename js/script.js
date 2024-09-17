document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let consumo = document.getElementById('consumo').value;
    let horasSol = document.getElementById('horasSol').value;
    let potenciaPanel = document.getElementById('potenciaPanel').value;

    let panelesRequeridos = (consumo / (horasSol * potenciaPanel)).toFixed(2);
    
    document.getElementById('result').innerHTML = `Necesitarás aproximadamente ${panelesRequeridos} paneles solares.`;
});