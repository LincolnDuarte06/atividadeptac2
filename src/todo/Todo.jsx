import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo(){
    const [atividade, setAtividade] = useState("");
    const [imagem, setImagem] = useState("");
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(1);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade:atividade,
            imagem: imagem,
            id: id
        }]);
        setId(id +1);
        setAtividade("");
        setImagem("");
    };
    const remover = (id) => {
        /*setLista(lista.filter((ativ) => atv.id !== id ? lista:))*/
        const auxLista = [];
        lista.map((lista) => {
            if(lista.id !== id){
                auxLista.push(lista);
            }
        }
        )
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