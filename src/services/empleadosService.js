import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
import { departamentosOptions, municipiosOptions } from "../utils/constantes";

export const getEmpleados = async () => {
  try {
    const res = await axios.get("http://localhost:3001/api/empleados");
    return res.data;
  } catch (error) {
    toast("Error al obtener las empleados");
    return [];
  }
};

// get categoriaProducto by id
export const getEmpleadoById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3001/api/empleados/${id}`);

    const { municipio, departamento, fecha_nacimiento } = res.data;

    console.log("aaaaaaaaaaaaaaaa", fecha_nacimiento);
    console.log("moment format", moment(fecha_nacimiento).format("DD-MM-YYYY"));
    const departamento_index = departamento - 1;
    const data_parse = {
      ...res.data,
      municipio: municipiosOptions[departamento].find(
        (_municipio) => _municipio.id === municipio
      ),
      departamento: departamentosOptions[departamento_index],
      // fecha_nacimiento: moment(fecha_nacimiento).format("DD-MM-YYYY"),
      // puestos: puesto ? JSON.parse(puesto) : puesto,
    };

    console.log("data_parse", data_parse);

    return data_parse;
  } catch (error) {
    toast.error("Error al obtener el empleado");
    return null;
  }
};

// create categoriaProducto
export const createEmpleado = async (data) => {
  const { municipio, departamento, fecha_nacimiento, puestos } = data;
  console.log("fecha nacimiento", fecha_nacimiento);
  console.log("fecha parse", moment(fecha_nacimiento).format("YYYY-MM-DD"));
  try {
    const res = await axios.post("http://localhost:3001/api/empleados", {
      ...data,
      municipio: municipio.id,
      departamento: departamento.id,
      fecha_nacimiento: moment(fecha_nacimiento).format("YYYY-MM-DD"),
      puestos,
    });
    toast.success("Empleado creado");
    return res.data;
  } catch (error) {
    toast.error("Error al crear el empleado");
    return null;
  }
};

// delete categoriaProducto
export const deleteEmpleado = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3001/api/empleados/${id}`);
    toast.success("Empleado eliminado");
    return res.data;
  } catch (error) {
    toast.error("Error al eliminar el empleado");
    return null;
  }
};

// patch categoriaProducto
export const updateEmpleado = async (id, data) => {
  const { municipio, departamento, fecha_nacimiento, puestos } = data;
  console.log("fecha nacimiento", fecha_nacimiento);
  console.log(
    "fecha parse",
    moment(fecha_nacimiento).format("YYYY-MM-DDT00:00:00")
  );
  try {
    const res = await axios.put(`http://localhost:3001/api/empleados/${id}`, {
      ...data,
      municipio: municipio.id,
      departamento: departamento.id,
      fecha_nacimiento: moment(fecha_nacimiento).format("YYYY-MM-DD"),
      puestos,
    });
    toast.success("Sucursal actualizada");
    return res.data;
  } catch (error) {
    toast.error("Error al actualizar el empleado");
    return null;
  }
};
