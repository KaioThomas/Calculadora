const btns = document.querySelectorAll('button');
const campoDeBaixo = document.getElementById('baixo');
const campoDeCima = document.getElementById('cima');
const operations = ["+", "-", "/", "X", "="];

campoDeBaixo.value = 0;

function mostrarResultado() {
    let result = eval(`${campoDeCima.value} ${campoDeBaixo.value}`)
    campoDeCima.value = ''
    campoDeBaixo.value = result
}

function mostrarCalculo(sinal) {
    campoDeCima.value = `${campoDeBaixo.value} ${sinal}`;
    campoDeBaixo.value = ''
}

function changeOperation(sinal {

})

function calcular(sinal) {

    if(campoDeBaixo.value === '' && campoDeCima.value !== ''){
        changeOperation(sinal)
    }

    if(campoDeBaixo.value.includes(sinal))
    return;

    switch(sinal){
        case "+": 
            mostrarCalculo(sinal)
          break
        case "*":
            mostrarCalculo(sinal)
            break
        case "-":
            mostrarCalculo(sinal)
            break
        case "/":
            mostrarCalculo(sinal)
        case "=":
          mostrarResultado()
          break
    }
}

function apagar(modoDeApagar){
    switch(modoDeApagar){
        case "CE": campoDeBaixo.value = 0;
        case "C": campoDeBaixo.value = 0; 
                campoDeCima.value = '';
        case "del": 

    }
}

function limitarNumeros(quantidadeNum){
    if(quantidadeNum > 15) return;
            let tamanho = window.getComputedStyle(campoDeBaixo).fontSize;
            tamanho = parseInt(tamanho);
            tamanho -= 3;
            console.log(tamanho)
            campoDeBaixo.style.fontSize = tamanho + "px";
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        let digito = e.target.innerText;

        if(campoDeBaixo.value.length >= 13){
            limitarNumeros(campoDeBaixo.value.length);
        }
      
        if(campoDeBaixo.value === "0"){
            if(digito === ".")
                campoDeBaixo.value = 0 + digito;
            else 
                campoDeBaixo.value = digito;
            
         } else if(digito >=0 || digito === "."){
            if(digito === "." && campoDeBaixo.value.includes(digito)){
                return;
            } else campoDeBaixo.value += digito;
         } 

        if (operations.includes(digito)){
            calcular(digito)
         }
         else if (digito === "CE" || digito === "del" || digito === "C") {
            apagar(digito)
         }
    });
});

