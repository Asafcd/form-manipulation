import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { getUsers } from '../services/userService'

function Edit() {
    const {id} = useParams()
    /* const search = useLocation().search;
    const id = new URLSearchParams(search).get('id'); */
    const users = getUsers()
    const user = users.find( userTemp => JSON.stringify(userTemp.id) == id)
    return(
        <>
            {user&& (
                <div>
                    <p>{user.id}</p>
                    <p>{user.fullName}</p>
                    <p>{user.job}</p>
                    <p>{user.city}</p>
                    <p>{user.country}</p>
                    <p>{user.email}</p>
                    <p>{user.phoneNumber}</p>
                </div>
            )}
        </>
    )
}

export default Edit