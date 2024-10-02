document.addEventListener('DOMContentLoaded', function() {
    const storedData = localStorage.getItem('storedData');
    const dataDisplay = document.getElementById('data');

    if (storedData) {
        dataDisplay.textContent = storedData;
    } else {
        dataDisplay.textContent = 'No hay datos guardados.'; 
    }
});
