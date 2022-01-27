import { Grid } from '@mui/material';
import React from 'react';
import LinkCard from '../../molecules/LinkCard';
import PageTitle from '../../molecules/PageTitle';

const HomeDiscription =
    `
    this is threejs Demo!
    you can choose any demo
    `

const HomeBlock: React.FC = () => {
    return (
        <>
            <PageTitle title='Home' discription={HomeDiscription} />
            <Grid container spacing={2} justifyContent={'space-evenly'}>
                <Grid item>
                    <LinkCard title={'COMING SOON'} description={'this demo will be created soon'} path={'tt'} />
                </Grid>
                <Grid item>
                    <LinkCard title={'COMING SOON'} description={'this demo will be created soon'} path={'tt'} />
                </Grid>
                <Grid item>
                    <LinkCard title={'COMING SOON'} description={'this demo will be created soon'} path={'tt'} />
                </Grid>
                <Grid item>
                    <LinkCard title={'COMING SOON'} description={'this demo will be created soon'} path={'tt'} />
                </Grid>
                <Grid item>
                    <LinkCard title={'COMING SOON'} description={'this demo will be created soon'} path={'tt'} />
                </Grid>
                <Grid item>
                    <LinkCard title={'COMING SOON'} description={'this demo will be created soon'} path={'tt'} />
                </Grid>
                <Grid item>
                    <LinkCard title={'COMING SOON'} description={'this demo will be created soon'} path={'tt'} />
                </Grid>
                <Grid item>
                    <LinkCard title={'COMING SOON'} description={'this demo will be created soon'} path={'tt'} />
                </Grid>
                <Grid item>
                    <LinkCard title={'COMING SOON'} description={'this demo will be created soon'} path={'tt'} />
                </Grid>
                <Grid item>
                    <LinkCard title={'COMING SOON'} description={'this demo will be created soon'} path={'tt'} />
                </Grid>
            </Grid>

        </>
    )
};

export default HomeBlock;
