import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { LinkCardProps } from '../../../types/Component';
import LinkCard from '../../molecules/LinkCard';
import PageTitle from '../../molecules/PageTitle';

const HomeDiscription =
    `
    this is threejs Demo!
    you can choose any demo
    `

const linkCardArray: Array<LinkCardProps> = [
    { 'title': 'TEST', 'description': 'this is test for threejs', 'path': '/Demos/Test', 'imageSrc': 'title/test.jpg' },
    { 'title': 'TEST', 'description': 'this is test for threejs', 'path': '/Demos/Text_001', 'imageSrc': 'title/text-title-001.png' },
    { 'title': 'Coming soon', 'description': 'this demo will be available soon' }

]

const HomeBlock: FC = () => {
    return (
        <>
            <PageTitle title='Home' discription={HomeDiscription} />
            <Grid container spacing={2} justifyContent={'space-evenly'}>
                {linkCardArray.map((linkCardProps) => {
                    const { title, description, path, imageSrc } = linkCardProps
                    return (
                        <Grid item>
                            <LinkCard title={title} description={description} path={path} imageSrc={imageSrc} />
                        </Grid>
                    )
                })}
            </Grid>

        </>
    )
};

export default HomeBlock;
