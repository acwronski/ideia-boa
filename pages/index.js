import {useState} from 'react';

function Home() {
    return (
        <div>
            <h1>Pagina Inicial</h1>
            <h2>Antonio Carlos Wronski</h2>

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