const btns = document.querySelectorAll('button');
const campoDeBaixo = document.getElementById('baixo');
const campoDeCima = document.getElementById('cima');

campoDeBaixo.value = 0;

function calcular(sinal){
}

function apagar(modoDeApagar){
    if(modoDeApagar === "CE" || modoDeApagar === "C" || modoDeApagar === "del"){
        campoDeBaixo.value = 0;
    }
}

btns.forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        const digito = e.target.innerText;

        if(campoDeBaixo.value === "0"){
            if(digito === ".")
                campoDeBaixo.value = 0 + digito;
            else 
                campoDeBaixo.value = digito
            
         } else if(digito >=0 || digito === "."){
            if(digito === "." && campoDeBaixo.value.includes(digito)){
                return;
            } else campoDeBaixo.value += digito
         } 
         else if (digito === "+" || digito === "-" || digito === "X" 
        || digito === "/" || digito === "="){
            calcular(digito)
            console.log('op');
         }
         else {
            apagar(digito)
         }
    });
});

