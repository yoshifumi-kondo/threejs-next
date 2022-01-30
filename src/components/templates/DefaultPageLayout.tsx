import { Box } from '@mui/system';
import React, { FC } from 'react';
import { globalMargin } from '../../../styles/global.css';

const DefaultPageLayout: FC = ({ children }) => {
    return (
        <>
            <Box margin={globalMargin}>
                {children}
            </Box>
        </>
    );
};

export default DefaultPageLayout;
