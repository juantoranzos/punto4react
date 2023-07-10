const URL_TAREAS = import.meta.env.VITE_API_TAREAS;

export const obtenerTareas = async () => {
  try {
    const response = await fetch(URL_TAREAS);
    if (!response.ok) {
      throw new Error("Error al obtener las tareas");
    }
    const listaTareas = await response.json();
    return listaTareas;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const obtenerTarea = async (id) => {
  try {
    const response = await fetch(`${URL_TAREAS}/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener la tarea");
    }
    const editarTarea = await response.json();
    return editarTarea;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const crearTarea = async (tarea) => {
  try {
    const response = await fetch(URL_TAREAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });
    if (!response.ok) {
      throw new Error("Error al crear la tarea");
    }
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteConsultTask = async (id) => {
  try {
    const response = await fetch(`${URL_TAREAS}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la tarea");
    }
    return response;
  } catch (error) {
    console.log(error);
    throw error;
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
    if (!response.ok) {
      throw new Error("Error al editar la tarea");
    }
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
