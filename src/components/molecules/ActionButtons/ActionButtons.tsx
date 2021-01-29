import { Button, Grid } from '@material-ui/core';
import React, { FC } from 'react';
import useStyles from '../../../styles/useStyles';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getRandomIndex } from '../../../utils/getRandomIndex';
import { HeroData, StarshipData, Cards, Competitions } from '../../../pages/ts';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface ActionButtonsProps {
    cards: Cards[] | undefined;
    competition: Competitions;
    setCards: (cards: Cards[]) => void;
}

const ActionButtons: FC<ActionButtonsProps> = ({ cards = [], setCards, competition }) => {
    function renderCards(cardIndex: 0 | 1) {
        const newCards: Cards[] | [] = [...cards];
        axios
            .get(`https://swapi.dev/api/${competition}/${getRandomIndex(competition)}`)
            .then((response: AxiosResponse<HeroData | StarshipData>) => {
                newCards[cardIndex] = response.data;
                setCards(newCards);
            })
            .catch((error: AxiosError) => {
                toast(`${error.message}. Try again.`);
            });
    }

    const left = () => renderCards(0);
    const right = () => renderCards(1);
    const classes = useStyles();

    return (
        <div className={classes.heroButtons}>
            <ToastContainer autoClose={3500} hideProgressBar position="top-right" />
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button onClick={left}>left</Button>
                </Grid>
                <Grid item>
                    <Button onClick={right}>right</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default ActionButtons;
