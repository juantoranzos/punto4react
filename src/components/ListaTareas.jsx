import { ListGroup } from "react-bootstrap";
import ItemTareas from "./ItemTareas";

const ListaTareas = ({listadoTareas}) => {
  return (
    <ListGroup>
      {
        listadoTareas.map((tarea, indice)=><ItemTareas key={indice} tarea={tarea} ></ItemTareas> )
      }
  </ListGroup>
  );
};

export default ListaTareas;
