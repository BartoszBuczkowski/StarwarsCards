import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../../../styles/useStyles';

const Footer: FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                Copyright © Bartosz Buczkowski {new Date().getFullYear()}
            </Typography>
        </footer>
    );
};

export default Footer;
