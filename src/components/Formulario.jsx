import { Form, Button } from 'react-bootstrap';
import ListaTareas from '../components/ListaTareas'
import { useState, useEffect, useRef } from 'react';
import { crearTarea, deleteConsultTask, obtenerTareas, editarTarea, obtenerTarea } from './helpers/queries';
import Swal from 'sweetalert2';

const Formulario = () => {
  const [tareas, setTareas] = useState([]);
  const [input, setInput] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    obtenerTareas()
      .then((res) => {
        if (res) {
          setTareas(res);
        } else {
          Swal.fire(
            "Se produjo un error al intentar cargar los datos",
            "Intente realizar esta operación más tarde.",
            "error"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = { nombreTarea: input };
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
              obtenerTareas()
                .then((res) => {
                  setTareas(res);
                })
                .catch((error) => {
                  console.log(error);
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
              obtenerTareas()
                .then((res) => {
                  setTareas(res);
                })
                .catch((error) => {
                  console.log(error);
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

  const handleEditarTarea = (id) => {
    obtenerTarea(id)
      .then((res) => {
        setInput(res.tarea);
        setSelectedTaskId(res._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEliminarTarea = (id) => {
    deleteConsultTask(id)
      .then(() => {
        obtenerTareas()
          .then((res) => {
            setTareas(res);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            ref={inputRef}
            type="text"
            placeholder="Ingrese una tarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas
        listadoTareas={tareas}
        eliminarTarea={handleEliminarTarea}
        editarTarea={handleEditarTarea}
      />
    </section>
  );
};

export default Formulario;
