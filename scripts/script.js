const btns = document.querySelectorAll('button');
const campoDeBaixo = document.getElementById('baixo');
const campoDeCima = document.getElementById('cima');
const operations = ["+", "-", "/", "*", "="];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

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

function changeOperation(sinal) {
   campoDeCima.value = campoDeCima.value.slice(0, -1) + sinal;
}

function del(){
    if(campoDeBaixo.value != 0){
        if(campoDeBaixo.value.length == '1'){
            campoDeBaixo.value = 0;
        } else campoDeBaixo.value = campoDeBaixo.value.slice(0, -1);        
    } 
}

function calcular(sinal) {

    if(campoDeBaixo.value.includes(sinal))
    return;

    if(campoDeBaixo.value === "0" || campoDeBaixo.value === "")
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
         break
        case "C": campoDeBaixo.value = 0; 
                campoDeCima.value = '';
         break
        case "del": 
            del()
        break
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

        if(numbers.includes(digito)) {
            if(campoDeBaixo.value === "0")
             campoDeBaixo.value = digito;
            else campoDeBaixo.value += digito;
        }

        if(campoDeBaixo.value.length >= 13){
            limitarNumeros(campoDeBaixo.value.length);
        }
      
        if(campoDeBaixo.value === "0"){
            if(digito === "."){
                campoDeBaixo.value = 0 + digito;
            } 
         } else if(digito >=0 || digito === "."){
            if(digito === "." && campoDeBaixo.value.includes(digito)){
                return;
            }
         } 

        if (operations.includes(digito)){
            if(campoDeCima.value !== "" && campoDeBaixo.value === ""){
                changeOperation(digito)
            }
            calcular(digito)
         }
         else if (digito === "CE" || digito === "del" || digito === "C") {
            apagar(digito)
         }
    });
});

