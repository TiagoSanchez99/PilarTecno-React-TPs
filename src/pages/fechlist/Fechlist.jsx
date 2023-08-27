import React, { useEffect, useState } from "react";
import {
    Grid,
    Paper,
    Typography,
    Card,
    CardContent,
    CardMedia
} from '@mui/material';
import api from '../../services/api'
import { appActions } from '../../redux/appRedux'
import { useDispatch } from "react-redux"
import { IMG_URL } from '../../constants/index'
import PokemonDetailModal from "../../components/PokemonStats"



const FetchList = () => {

    const dispatch = useDispatch()
    const [pokemons, setPokemons] = useState(null)
    const [next, setNext] = useState("")
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = async () => {
        try {
            dispatch(appActions.loading(true))
            const result = await api.GET(api.pokemons)
            if (result) {
                console.log('poke: ', result)
                setPokemons(result.results)
                setNext(result.next)
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(appActions.loading(false))
        }
    }

    const getPokemonImgId = (id) => {
        console.log('long. ' + id.length)
        switch (id.length) {
            case 1:
                return `00${id}`
            case 2:
                return `0${id}`
            default:
                return id
        }
    }

    const loadMore = async () => {
        try {
            dispatch(appActions.loading(true))
            const result = await api.GET(next)
            if (result) {
                console.log('poke: ', result.results)
                setPokemons(prev => [...prev, ...result.results])
                setNext(result.next)
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(appActions.loading(false))
        }
    }

    const renderItem = (item) => {
        const path = item.url.split('/')
        const imgID = getPokemonImgId(path[6])
        return (
            <Card p={2} sx={{
                display: 'flex', justifyContent: 'space-around', alignContent: 'space-between', width: 300, height: 'auto', m: 2, cursor: 'pointer',
                '&:hover': { backgroundColor: '#5acdbd', color: 'white' }
            }}
                key={item.name} onClick={() => openModal(item)}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        N° {imgID}
                    </Typography>
                    <Typography component="div" variant="h5">
                        {item.name}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 100 }}
                    src={`${IMG_URL}${imgID}.png`}
                    alt="Live from space album cover"
                />
            <PokemonDetailModal pokemon={item} open={selectedPokemon !== null} onClose={closeModal} />
            </Card>
        )
    }

    /* const openModal = (pokemon) => {
         <PokemonDetailModal pokemon={pokemon} />
     };*/

    const openModal = pokemon => {
        setSelectedPokemon(pokemon);
    };

    const closeModal = () => {
        setSelectedPokemon(null);
    };

    return (
        <Grid container spacing={3}>
            <Paper sx={{ m: 5, p: 5 }} >
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography component="div" variant="h5">
                        Mi Pokedex
                    </Typography>
                </Grid>
                {
                    pokemons && pokemons.map((p, index) => {
                        return (
                            <Grid sx={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'space-between' }} key={index}>
                                {renderItem(p)}
                            </Grid>
                        )
                    })
                }
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Card p={2} sx={{
                        display: 'inline-flex', justifyContent: 'center', alignItems: 'center', height: 100, cursor: 'pointer',
                        backgroundColor: '#317b52', '&:hover': { backgroundColor: '#5acdbd' }
                    }}
                        onClick={() => loadMore()}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5" sx={{ color: 'white', m: 2 }}>
                                Cargar Más
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 'auto', height: 75, m: 2 }}
                            image={require("../../assets/images/Pokebola.png")}
                            alt="Pokebola"
                        />
                    </Card>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default FetchList;