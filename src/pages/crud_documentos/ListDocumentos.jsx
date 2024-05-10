import React, {useEffect, useState} from "react";
import { ListadoDoc } from "../../service/DocumentoServices";

export default function ListDocumentos() {

    const [documentoList, setDocumentList] = useState([]);

    useEffect(() => {
        ListadoDoc().then((response) => {
            setDocumentList(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <div className="container">
            <p>Prueba de listado de documentos</p>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITULO</th>
                        <th>AUTORES</th>
                        <th>RESUMEN</th>
                        <th>AÑO PUBLICADO</th>
                        <th>ASESOR</th>
                        <th>CATEGORIA</th>
                        <th>TEMA</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        documentoList.map(documento =>
                            <tr key={documento.id}>
                                <td>{documento.id}</td>
                                <td>{documento.titulo}</td>
                                <td>{documento.autores}</td>
                                <td>{documento.resumen}</td>
                                <td>{documento.anioPublicacion}</td>
                                <td>{documento.asesor}</td>
                                <td>{documento.categoria}</td>
                                <td>{documento.tema}</td>
                                <td>{documento.status}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}