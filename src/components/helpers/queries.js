const URL_TAREAS = import.meta.env.VITE_API_TAREAS;

export const obtenerTareas = async () => {
  try {
    const response = await fetch(URL_TAREAS);
    const listaTareas = await response.json();
    return listaTareas;
  } catch (error) {
    console.log(error);
  }
};
export const obtenerTarea = async (id) => {
    try {
      const response = await fetch(`${URL_TAREAS}/${id}`);
      const editarTarea = await response.json();
      return editarTarea;
    } catch (error) {
      console.log(error);
    }
  };

export const crearTarea = async (tarea) => {
  try {
    const response = await fetch(`${URL_TAREAS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarTarea = async (id) => {
  try {
    const response = await fetch(`${URL_TAREAS}/${id}`, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};



export const editarTarea = async (id, tarea) => {
    try {
      const response = await fetch(`${URL_TAREAS}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tarea),
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };