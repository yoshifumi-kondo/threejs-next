import { Box } from '@mui/system';
import React from 'react';
import { globalMargin } from '../../../styles/global.css';

const DefaultPageLayout: React.FC = ({ children }) => {
    return (
        <>
            <Box margin={globalMargin}>
                {children}
            </Box>
        </>
    );
};

export default DefaultPageLayout;
