import { ListGroup } from "react-bootstrap";
import ItemTareas from "./ItemTareas";
import "../components/helpers/queries"

const ListaTareas = ({listadoTareas, eliminarTarea, editarTarea}) => {
  return (
    <ListGroup>
        {listadoTareas.map((tarea) => (
        <ItemTask
          key={tarea._id}
          tarea={tarea}
          eliminarTarea={eliminarTarea}
          editarTarea={editarTarea}
        ></ItemTask>
      ))}
  </ListGroup>
  );
};

export default ListaTareas;
