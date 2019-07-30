import React from 'react';
import Sidebar from './templates/sidebar';
import Main from './Main.js'
import '../styling/style.css';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xl={12}>
                            <Main />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}