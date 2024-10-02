document.getElementById('buttonText').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;

    if (inputText.trim() === "") {
        alert("Por favor, ingresa un dato antes de guardar.");
        return; 
    }

    localStorage.setItem('storedData', inputText);
    
    document.getElementById('inputText').value = '';
});