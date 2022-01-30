import React, { FC } from 'react';
import Text_001_Block from '../../components/organisms/TextDemo_001/Text_001_Block';
import { CustomHead } from '../../components/templates/CustomHead';
import DefaultPageLayout from '../../components/templates/DefaultPageLayout';

const Text_001: FC = () => {
    return (
        <>
            <DefaultPageLayout>
                <CustomHead />
                <Text_001_Block />
            </DefaultPageLayout>
        </>
    );
};

export default Text_001;
