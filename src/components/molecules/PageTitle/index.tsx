import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';
import { globalMargin } from '../../../../styles/global.css';
import { PageTitleProps } from '../../../types/Component';

// Indicates the page title
const PageTitle: FC<PageTitleProps> = ({ title, discription }) => {

    return (
        <>
            <Box marginY={globalMargin} textAlign={"center"}>
                <Typography variant='h3' textTransform={'uppercase'}>{title}</Typography>
                <Typography variant='h5' color={"GrayText"}>{discription}</Typography>
            </Box>
        </>
    );
};

export default PageTitle;
