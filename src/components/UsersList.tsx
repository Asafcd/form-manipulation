import React from "react";
import { getUsers } from '../services/userService'

import { Button, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function UsersList() {
    const users = getUsers()
    return (
        <Container>
            <Grid container spacing={2} marginTop={3}>
                <Grid item md={11}>
                    <Typography variant="h4">
                        Users list
                    </Typography>
                    <Divider color="black" />

                    <Grid item md={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">Full name</TableCell>
                                        <TableCell align="right">Job</TableCell>
                                        <TableCell align="right">City</TableCell>
                                        <TableCell align="right">Country</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Phone number</TableCell>
                                        <TableCell align="right">Edit</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map(({ id, fullName, job, city, country, email, phoneNumber }) => (
                                        <TableRow
                                            key={id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{id}</TableCell>
                                            <TableCell align="right"> {fullName}</TableCell>
                                            <TableCell align="right">{job}</TableCell>
                                            <TableCell align="right">{city}</TableCell>
                                            <TableCell align="right">{country}</TableCell>
                                            <TableCell align="right">{email}</TableCell>
                                            <TableCell align="right">{phoneNumber}</TableCell>
                                            <NavLink to={JSON.stringify(id)} className='nav-link mx-2'><TableCell align="right"><Button variant="contained">Editar</Button></TableCell></NavLink>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UsersList