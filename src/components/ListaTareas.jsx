import { ListGroup } from "react-bootstrap";
import ItemTareas from "./ItemTareas";

const ListaTareas = ({listadoTareas, borrarTarea}) => {
  return (
    <ListGroup>
      {
        listadoTareas.map((tarea, indice)=><ItemTareas key={indice} tarea={tarea} borrarTarea={borrarTarea}></ItemTareas> )
      }
  </ListGroup>
  );
};

export default ListaTareas;
