let contador = 0

document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', (event) => {
        if(button.id === "somar" ){
            contador++
            document.querySelector('h3').textContent = contador
        }
        else{
            contador--
            document.querySelector('h3').textContent = contador
        }

    });
});

