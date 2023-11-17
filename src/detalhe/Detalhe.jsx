import { useParams } from "react-router-dom";

export default function Detalhe(){
const {id} = useParams();
const lista = JSON.parse( localStorage.getItem("Lista"));

const atividade = lista.filter( (objeto) => {
  if(objeto.id == id){
    return objeto;
}
return null;
})

console.log( atividade[0] );

return(
<div>
    <h1>{id}</h1>
</div>
      );
}