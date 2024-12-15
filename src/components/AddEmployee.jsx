import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const employeeCollection = collection(db, "employees");
        await addDoc(employeeCollection, { name, position });
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Employee</h1>
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
            <button type="submit">Add</button>
        </form>
    );
};

export default AddEmployee;
