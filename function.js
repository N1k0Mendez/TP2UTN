const buttons = document.querySelectorAll('#sectwo a')
const input = document.getElementById('input')
const output= document. getElementById('output')

buttons.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const value = element.textContent.trim();
                if (value === "=") 
                    return;                                                 // Si es igual, no agregamos más al input
                if (value === "." && input.value.split(/[\+\-\*\/]/).pop().includes(".")) 
                    return;                                                 // No agrega un punto si ya existe                
                input.value += value;                                       // Agregar el valor al input
    })
});


//-BOTON- =
const equalbutton = document.querySelector('.equal')
equalbutton.addEventListener('click', () => {
    try {
        const sanitizedInput = input.value.replace(/[^0-9+\-*/().]/g, ''); // Filtra caracteres no válidos
        const result = eval(sanitizedInput);                               // Evalúa la operación válida
        output.value = result;                                             // Muestra el resultado
    } catch (error) {                                                      // Maneja errores y muestra un mensaje
        output.value = 'Error';
        output.style.backgroundColor = 'red';
    }
});


//-BOTON- BORRO 1 CARACTER
const clearOneButton = document.querySelector('.btn-clear-one');
clearOneButton.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);                               // Elimina el último carácter
});

//-BOTON- BORRO TODO
const clearAllButton = document.querySelector('.btn-clear-all');
clearAllButton.addEventListener('click', () => {
    input.value = "";                                                    // Borra todo el contenido
    output.value = "";                                                   // Borra el resultado
});