import { ListGroup, Button } from "react-bootstrap";

const ItemTareas = ({tarea, eliminarTarea, editarTarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
        {tarea.nombreTarea}
        <div className="d-flex gap-2">
          <Button
            variant="primary"
            onClick={() => editarTarea (tarea._id, tarea.nombreTarea)}
          >
            Editar
          </Button>
          <Button variant="danger" onClick={() => eliminarTarea (tarea._id)}>
            Borrar
          </Button>
        </div>
      </ListGroup.Item>
    );
  };
  
  export default ItemTareas;