import React, { FC } from 'react';
import PageTitle from '../../molecules/PageTitle';
import { Text_2D } from '../../molecules/Text_2D';

const Text_001_Block: FC = () => {
    return (
        <>
            <PageTitle title={'Text_Demo_001'} discription={'this is first demo https://qiita.com/nemutas/items/b7754449e65071b821e9'} />
            <Text_2D />
        </>
    );
};

export default Text_001_Block;
