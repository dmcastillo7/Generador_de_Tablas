document.addEventListener('DOMContentLoaded', function() {
    const generarBtn = document.getElementById('generarBtn');
    const numeroInput = document.getElementById('numero');
    const tablaResultados = document.getElementById('tablaResultados');
    const alertArea = document.getElementById('alertArea');
    
    // Ocultar inicialmente el contenedor de la tabla
    document.getElementById('tablaContainer').style.display = 'none';
    
    generarBtn.addEventListener('click', function() {
        // Limpiar alertas y resultados anteriores
        alertArea.innerHTML = '';
        tablaResultados.innerHTML = '';
        
        // Obtener y validar el número ingresado
        const numero = parseFloat(numeroInput.value);
        
        if (isNaN(numero)) {
            // Mostrar alerta de error
            mostrarAlerta('Por favor, ingresa un número válido.', 'danger');
            return;
        }
        
        // Generar la tabla de multiplicar usando do...while
        generarTablaMultiplicar(numero);
        
        // Mostrar el contenedor de la tabla
        document.getElementById('tablaContainer').style.display = 'block';
    });
    
    // Función para mostrar alertas
    function mostrarAlerta(mensaje, tipo) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${tipo} mt-3`;
        alertDiv.textContent = mensaje;
        alertArea.appendChild(alertDiv);
    }
    
    // Función para generar la tabla de multiplicar usando do...while
    function generarTablaMultiplicar(numero) {
        let contador = 1;
        const resultados = [];
        
        do {
            const resultado = numero * contador;
            resultados.push(`${numero} × ${contador} = ${resultado}`);
            contador++;
        } while (contador <= 12);
        
        // Mostrar los resultados
        mostrarResultados(resultados);
    }
    
    // Función para mostrar los resultados en la interfaz
    function mostrarResultados(resultados) {
        resultados.forEach(resultado => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.textContent = resultado;
            tablaResultados.appendChild(div);
        });
    }
    
    // Generar tabla con la tecla Enter
    numeroInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generarBtn.click();
        }
    });
});