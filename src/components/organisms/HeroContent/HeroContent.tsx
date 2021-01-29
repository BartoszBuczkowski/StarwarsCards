import React, { FC } from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import useStyles from '../../../styles/useStyles';
import { Competitions } from '../../../pages/ts';

interface HeroContentProps {
    competition: Competitions;
    clearCards: () => void;
    setCompetition: (competition: Competitions) => void;
}

const HeroContent: FC<HeroContentProps> = ({ competition, setCompetition, clearCards }) => {
    const classes = useStyles();

    const changeCompetition = (competition: Competitions) => {
        clearCards();
        setCompetition(competition);
    };
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Starwars
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Change competition. Compare heros or starships from your favorite movie universe.
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button
                                variant={competition === 'people' ? 'contained' : 'outlined'}
                                color="primary"
                                onClick={() => changeCompetition('people')}
                            >
                                Heros
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant={competition === 'starships' ? 'contained' : 'outlined'}
                                color="primary"
                                onClick={() => changeCompetition('starships')}
                            >
                                Starships
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default HeroContent;
