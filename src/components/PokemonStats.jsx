import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Card,
    CardContent,
    Typography
} from '@mui/material';

const PokemonDetailModal = ({ pokemon, open, onClose }) => {

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>{pokemon.name}</DialogTitle>
            <DialogContent>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {pokemon.name}
                        </Typography>
                    </CardContent>
                </Card>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cerrar
                </Button>
            </DialogActions>
        </Dialog>
    );

    /* if (!pokemon) return null;
 
     const { name, moves, abilities, sprites } = pokemon;
 
     return (
         <Dialog open={open} onClose={onClose}>
             <DialogTitle>{name}</DialogTitle>
             <DialogContent>
                 <img src={sprites.front_default} alt={`${name} Sprite`} style={{ maxWidth: '100%' }} />
                 <h3>Movimientos:</h3>
                 <List>
                     {moves.map((move, index) => (
                         <ListItem key={index}>
                             <ListItemAvatar>
                                 <Avatar>{index + 1}</Avatar>
                             </ListItemAvatar>
                             <ListItemText primary={move.move.name} />
                         </ListItem>
                     ))}
                 </List>
                 <h3>Habilidades:</h3>
                 <List>
                     {abilities.map((ability, index) => (
                         <ListItem key={index}>
                             <ListItemAvatar>
                                 <Avatar>{index + 1}</Avatar>
                             </ListItemAvatar>
                             <ListItemText primary={ability.ability.name} />
                         </ListItem>
                     ))}
                 </List>
             </DialogContent>
             <DialogActions>
                 <Button onClick={onClose} color="primary">
                     Cerrar
                 </Button>
             </DialogActions>
         </Dialog>
     );*/
};

export default PokemonDetailModal;
