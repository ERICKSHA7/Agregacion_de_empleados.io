import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const employeeCollection = collection(db, "employees");
            const data = await getDocs(employeeCollection);
            setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        fetchEmployees();
    }, []);

    const handleDelete = async (id) => {
        const employeeDoc = doc(db, "employees", id);
        await deleteDoc(employeeDoc);
        setEmployees(employees.filter((employee) => employee.id !== id));
    };

    return (
        <div className="container card center">
        <h1 className="text-center mt-5">Gestión de Empleados</h1>
        <Link className="btn btn-outline-success mt-3" to="/add">Agregar Empleado</Link>
        <br />
        <ul className="list-group list-group-vertical mt-3">
            {employees.map((employee) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={employee.id}>
                    <span>{employee.name} - {employee.position}</span>
                    
                    <div className="d-flex gap-2"> {/* Contenedor para los botones */}
                        {/* Botón Eliminar */}
                        <button className="btn btn-outline-danger w-100" onClick={() => handleDelete(employee.id)}>
                            Eliminar
                        </button>
                        {/* Botón Editar */}
                        <Link className="btn btn-outline-info w-100" to={`/edit/${employee.id}`}>
                            Editar
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    );
};

export default EmployeeList;
