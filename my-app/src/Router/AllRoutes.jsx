import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Register from '../Pages/Register';

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
        </Routes>
    )
}