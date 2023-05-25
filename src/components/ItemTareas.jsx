import { ListGroup } from "react-bootstrap";
const ItemTareas = ({tarea, borrarTarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {tarea}
            <button className="btn btn-danger" onClick={()=>borrarTarea(tarea)}>Borrar</button>
        </ListGroup.Item>
    );
  };
  
  export default ItemTareas;