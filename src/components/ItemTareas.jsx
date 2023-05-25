import { ListGroup } from "react-bootstrap";
const ItemTareas = ({tarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {tarea}
            <button className="btn btn-danger">Borrar</button>
        </ListGroup.Item>
    );
  };
  
  export default ItemTareas;