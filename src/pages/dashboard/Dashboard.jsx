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

const Dashboard = () => {
    const navigate = useNavigate()
    const primary = red[800];
    const secondary = green.A400;

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
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
                    </Box>
                </Paper>
            </Grid>
        </Grid >
    );
};

export default Dashboard;