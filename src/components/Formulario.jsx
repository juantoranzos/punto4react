
import { Form, Button } from 'react-bootstrap'
import ListaTareas from './ListaTareas';
import { useState, useEffect, useRef } from 'react';
import { crearTarea, eliminarTarea, obtenerTareas, editarTarea, obtenerTarea } from './helpers/queries';
import Swal from 'sweetalert2';





const Formulario = () => {
  const [tarea, setTarea] = useState([]);
  const [input, setInput] = useState("")
  // let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];

  // const [listadoTareas, setListadoTareas] = useState(tareasLocalStorage);

  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const inputRef = useRef(null)
  useEffect(() => {
    obtenerTareas().then((res) => {

      if (res) {
        setTarea(res)
      } else {
        Swal.fire(
          "Se produjo un error al intentar cargar los datos",
          `Intente realizar esta operación más tarde.`,
          "error"
        );

      }

    })

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
   const nuevaTarea = { nombreTarea: input};
   if (input.length > 0) {
    if (selectedTaskId) {
      editarTarea(selectedTaskId, nuevaTarea)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire(
              "Tarea actualizada",
              `La tarea '${nuevaTarea.nombreTarea}' fue actualizada con éxito.`,
              "success"
            );
            obtenerTareas().then((res) => {
              obtenerTarea(res);
            });
            setInput("");
            setSelectedTaskId(null);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      crearTarea(nuevaTarea)
        .then((res) => {
          if (res.status === 201) {
            obtenerTareas().then((res) => {
              setTarea(res);
            });
            setInput("");
          } else {
            console.log("error");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  };
  const editarTarea = (id, nombreTarea) => {
    setSelectedTaskId(id);
    setInput(nombreTarea);
    inputRef.current.focus();
  };


  const eliminarTarea = (id) => {
    eliminarTarea(id).then((res) => {
      const tareaFiltered = tarea.filter((tarea) => tarea._id === id);
      if (res.status === 200) {
        Swal.fire(
          "Tarea eliminada",
          `La tarea '${tareaFiltered[0].nombreTarea}' fue eliminada con éxito.`,
          "success"
        );
        obtenerTareas().then((res) => {
          setTarea(res);
        });
      }
    });
  };


  // const borrarTarea = (nombreTarea) => {
  //   let arregloFiltrado = listadoTareas.filter((itemTarea) => itemTarea !== nombreTarea)
  //   setListadoTareas(arregloFiltrado)
  // }
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex ">
          <Form.Control ref={inputRef}
          type="text" placeholder="Ingrese una tarea"value={input} onChange={(e) =>  setInput(e.target.value)}  />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas 
      listadoTareas={tarea} 
      eliminarTarea={eliminarTarea} 
      setTask={obtenerTarea}
      editarTarea={editarTarea}>

      </ListaTareas>
    </section>
  );
};

export default Formulario;