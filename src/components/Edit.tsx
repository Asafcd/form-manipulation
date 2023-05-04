import React from "react";
import { useParams, useLocation, NavLink } from "react-router-dom";
import { getUsers } from '../services/userService'
import useForm from "../hooks/useForm";
import { Button } from "@mui/material";

function Edit() {
    const { id } = useParams()
    const users = getUsers()
    const user = users.find(userTemp => JSON.stringify(userTemp.id) == id)
    const [{ id: userId, fullName, job, city, country, email, phoneNumber }, handleChange] = useForm(user)
    return (
        <form className="container">
            <br/>
            <div className="card mx-auto w-75 p-3">

                <div className="form-floating mb-3">
                    <input type="text" name='id'
                        value={userId}
                        onChange={handleChange} 
                        className="form-control"
                        id="floatingInputGroup1" placeholder="" />
                    <label htmlFor="floatingInputGroup1">ID de usuario</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name='fullName'
                        value={fullName}
                        onChange={handleChange} 
                        className="form-control"
                        id="floatingInputGroup1" placeholder="" />
                    <label htmlFor="floatingInputGroup1">Nombre Completo</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name='job'
                        value={job}
                        onChange={handleChange} 
                        className="form-control"
                        id="floatingInputGroup1" placeholder="" />
                    <label htmlFor="floatingInputGroup1">Nombre Completo</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name='city'
                        value={city}
                        onChange={handleChange} 
                        className="form-control"
                        id="floatingInputGroup1" placeholder="" />
                    <label htmlFor="floatingInputGroup1">Nombre Completo</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name='country'
                        value={country}
                        onChange={handleChange} 
                        className="form-control"
                        id="floatingInputGroup1" placeholder="" />
                    <label htmlFor="floatingInputGroup1">Nombre Completo</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name='email'
                        value={email}
                        onChange={handleChange} 
                        className="form-control"
                        id="floatingInputGroup1" placeholder="" />
                    <label htmlFor="floatingInputGroup1">Nombre Completo</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" name='phoneNumber'
                        value={phoneNumber}
                        onChange={handleChange} 
                        className="form-control"
                        id="floatingInputGroup1" placeholder="" />
                    <label htmlFor="floatingInputGroup1">Nombre Completo</label>
                </div>
                <input type="button" className="btn btn-success" value='Enviar'/>
                <Button className="btn btn-failiure"> <NavLink to='../'>CANCELAR</NavLink> </Button>
            </div>

        </form>

    )
}

export default Edit