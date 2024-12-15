import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const EditEmployee = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            const employeeDoc = doc(db, "employees", id);
            const data = await getDoc(employeeDoc);
            setName(data.data().name);
            setPosition(data.data().position);
        };

        fetchEmployee();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const employeeDoc = doc(db, "employees", id);
        await updateDoc(employeeDoc, { name, position });
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Editar Empleado</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">Actualizar</button>
        </form>
    );
};

export default EditEmployee;
