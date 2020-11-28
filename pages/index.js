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
            

        </div>
    )
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