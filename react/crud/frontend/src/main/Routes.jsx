import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from '../componets/home/Home'
import UserCrud from "../componets/user/UserCrud";

export default props => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<UserCrud />} />
        <Route exact path="*" element={<Home />} />
    </Routes>
)
