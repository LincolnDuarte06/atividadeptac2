import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo(){
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState([]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade:atividade
        }])
    }
    return(
        <div>
            <Link to="/">home</Link>
            <h1>Lista de Atividades</h1>

            <p>{atividade}</p>

            <form onSubmit={salvar}>

              <input value={atividade}
                    onChange={e => setAtividade(e.target.value)} />
                <input/>

                <button>ADD</button>
            </form>

            {lista.map((ativ)=> <p>{ativ.atividade}</p>)}
        </div>
    );
}