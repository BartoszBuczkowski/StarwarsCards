import React, { FC, useState, useEffect } from 'react';
import { Cards, Competitions, HeroData, StarshipData } from './ts';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import MainTemplate from '../components/templates/Main';
import useStyles, { theme } from '../styles/useStyles';
import Heros from '../components/organisms/Heros/Heros';
import Starships from '../components/organisms/Starships/Starships';
import HeroContent from '../components/organisms/HeroContent/HeroContent';
import ActionButtons from '../components/molecules/ActionButtons/ActionButtons';

const App: FC = () => {
    const [competition, setCompetition] = useState<Competitions>('people');
    const [cards, setCards] = useState<Cards[]>([]);
    const [winner, setWinner] = useState<number | null>(null);
    const classes = useStyles();

    function getWinner() {
        if (competition === 'people') {
            const participants = (cards as HeroData[])?.map(({ mass }) => Number(mass));
            const winner = participants.indexOf(Math.max(...participants));
            return setWinner(winner);
        }
        if (competition === 'starships') {
            const participants = (cards as StarshipData[])?.map(({ passengers }) => Number(passengers));
            const winner = participants.indexOf(Math.max(...participants));
            return setWinner(winner);
        }
        return setWinner(null);
    }

    useEffect(() => {
        const emptyCard = cards[0] === undefined || cards[1] === undefined;
        if (!emptyCard) getWinner();
    }, [cards]);

    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <MainTemplate>
                    <HeroContent
                        competition={competition}
                        setCompetition={setCompetition}
                        clearCards={() => setCards([])}
                    />
                    <ActionButtons cards={cards} setCards={setCards} competition={competition} />
                    {cards && (
                        <Container className={classes.cardGrid} maxWidth="md">
                            {competition === 'people' && <Heros cards={cards as HeroData[]} winner={winner} />}
                            {competition === 'starships' && (
                                <Starships cards={cards as StarshipData[]} winner={winner} />
                            )}
                        </Container>
                    )}
                </MainTemplate>
            </ThemeProvider>
        </div>
    );
};

export default App;
