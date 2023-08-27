import React, { useEffect } from "react";
import {
    Grid,
    Paper,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import { Outlet, useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import { green, red } from '@mui/material/colors';
import { useSelector } from "react-redux";
import { appSelector } from "../../redux/appRedux";

const Dashboard = () => {
    const navigate = useNavigate()
    const todo = useSelector(appSelector.todo)

    return (
        <Grid  sx={{ m:2, p:2, backgroundColor: 'primary.main', border: 5,  borderRadius: 5, borderColor: 'primary.main'}}>
            <Grid item xs={12} sx={{ backgroundColor: 'primary.main'}}>
                <Paper sx={{ p: 2 , backgroundColor: 'blue' }}>
                    <Box display="flex" flexDirection="row" justifyContent="space-around" >
                        <Card justifyContent="center" >
                            <CardMedia
                                component="img"
                                image="https://icon-library.com/images/todo-icon/todo-icon-5.jpg"
                                height="50"
                                alt="Imagen ToDo"
                            />
                            <CardContent>
                                <Typography variant="h5" justifyContent="center">ToDo</Typography>
                            </CardContent>
                            <CardActions>
                                <Button sx={{ backgroundColor: 'red', }}
                                    onClick={() => navigate("todo")}
                                    size="large"
                                    color="success"
                                    variant="contained">
                                    ToDo
                                </Button>
                            </CardActions>
                        </Card>

                        <Card>
                            <CardMedia
                                component="img"
                                image="https://www.siouxlandhumanesociety.org/wp-content/uploads/2022/01/Sub_Head_fetch-list.png"
                                height="50"
                                alt="Imagen FetchList"
                            />
                            <CardContent>
                                <Typography variant="h5" justifyContent="center">Fetch List</Typography>
                            </CardContent>
                            <CardActions>
                                <Button sx={{ backgroundColor: 'red', }}
                                    onClick={() => navigate("fetchList")}
                                    size="large"
                                    color="secondary"
                                    variant="contained">
                                    Fetch List
                                </Button>
                            </CardActions>
                        </Card>

                        <Card sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'orange' }}>

                            <CardContent sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'red' }}>
                                <Typography variant="h5" justifyContent="center">Completadas</Typography>
                            </CardContent>
                            <CardActions sx={{ backgroundColor: 'red'}}>
                                <Button sx={{ backgroundColor: 'blue', }}
                                    size="large"
                                    color="secondary"
                                    variant="contained">
                                    <Typography> {JSON.stringify(todo.filter(t => t.completed).length)} </Typography>
                                </Button>
                            </CardActions>

                            <CardContent sx={{ display: 'flex', alignItems: 'center'}}>
                                <Typography variant="h5" justifyContent="center">Pendientes</Typography>
                            </CardContent>
                            <CardActions>
                                <Button sx={{ backgroundColor: 'blue', }}
                                    size="large"
                                    color="success"
                                    variant="contained">
                                    <Typography> {JSON.stringify(todo.filter(t => t.completed === false).length)} </Typography>
                                </Button>
                            </CardActions>

                        </Card> 
                    </Box>
                </Paper>
            </Grid>
        </Grid >
    );
};

export default Dashboard;