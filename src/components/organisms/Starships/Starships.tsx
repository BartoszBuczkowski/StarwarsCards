import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { StarshipData } from '../../../pages/ts';
import { Avatar, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import useStyles from '../../../styles/useStyles';

interface StarshipsProps {
    cards: StarshipData[];
    winner: number | null;
}

const Starships: FC<StarshipsProps> = ({ cards, winner }) => {
    const classes = useStyles();
    const list = cards.map((card) => [
        { title: 'Name', value: card?.name },
        { title: 'Model', value: card?.model },
        { title: 'Class', value: card?.starship_class },
        { title: 'Crew', value: card?.crew },
    ]);
    return (
        <Grid container spacing={4}>
            {cards.map((_, index) => (
                <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    style={{ transform: `${winner === index ? 'scale(1.05)' : 'scale(1)'}` }}
                >
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                <List className={classes.root}>
                                    {list[index].map(({ title, value }) => (
                                        <ListItem key={title}>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <StarOutlineIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={title} secondary={value} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Starships;
