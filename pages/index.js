


import {useState} from 'react';


function Home() {
    
    return (
        <div>
            
            <h1>Paraiso das orquideas </h1>
            <h3>Desenvolvido por:</h3>

            <h3>Antonio Carlos Wronski</h3>
            <h3>projetando um site de especies de orquideas</h3>
            <h2>Proprietaria: Rosangela Oliveira</h2>

            <Contador/>
            <div>Teste</div>

            <h4>
                Somando seus pedidos
            </h4>

            <input type='number' name='txtn1' id='txtn1'></input> +

            <input type='number' name='txtn2'id='txtn2'></input>

            <input type='button' value='Somar' onClick='somar()'></input>

            <div id='res'>Resultado</div>
                    
        </div>
        

        
    )
}
function somar(){
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = s
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
        

    
}



export default Home