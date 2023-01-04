import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import SearchPage from '../Pages/SearchPage';
import SinglejobPage from '../Pages/SinglejobPage'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='/searchpage' element={<SearchPage />} ></Route>
            <Route path='/searchpage/:id' element={<SinglejobPage />} ></Route>
        </Routes>
    )
}
