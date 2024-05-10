import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8087/api/documentos/all';

// EJemplo para un listado de documentos

export const ListadoDoc = () => {
    return axios.get(REST_API_BASE_URL);
}