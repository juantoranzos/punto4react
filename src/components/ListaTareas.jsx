import { ListGroup } from "react-bootstrap";
import ItemTareas from "../components/ItemTareas";

const ListaTareas = ({ listadoTareas, eliminarTarea, editarTarea }) => {
  return (
    <ListGroup>
      {listadoTareas.map((tarea) => (
        <ItemTareas
          key={tarea._id}
          tarea={tarea}
          eliminarTarea={eliminarTarea}
          editarTarea={editarTarea}
        />
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
