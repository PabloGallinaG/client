import axios from "axios";
import { toast } from "react-toastify";

export const getPuestos = async () => {
  try {
    const res = await axios.get("http://localhost:3001/api/puestos");
    return res.data;
  } catch (error) {
    toast("Error al obtener las puestos");
    return [];
  }
};

// get categoriaProducto by id
export const getPuestoById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3001/api/puestos/${id}`);

    return res.data;
  } catch (error) {
    toast.error("Error al obtener el puesto");
    return null;
  }
};

// create categoriaProducto
export const createPuesto = async (data) => {
  const { nombre } = data;
  try {
    const res = await axios.post("http://localhost:3001/api/puestos", {
      nombre,
    });
    toast.success("Puesto creado");
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error("Error al crear el puesto");
    return null;
  }
};

// delete categoriaProducto
export const deletePuesto = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3001/api/puestos/${id}`);
    toast.success("Puesto eliminado");
    return res.data;
  } catch (error) {
    toast.error("Error al eliminar el puesto");
    return null;
  }
};

// patch categoriaProducto
export const updatePuesto = async (id, data) => {
  const { nombre } = data;
  try {
    const res = await axios.put(`http://localhost:3001/api/puestos/${id}`, {
      nombre,
    });
    toast.success("Sucursal actualizada");
    return res.data;
  } catch (error) {
    toast.error("Error al actualizar el puesto");
    return null;
  }
};
