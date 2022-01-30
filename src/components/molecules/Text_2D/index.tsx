import { loremIpsum } from 'lorem-ipsum';
import React, { VFC } from 'react';
import { Text } from '@react-three/drei';
import { useRotate } from '../../hooks/useRotate';
import { TCanvas } from '../../atoms/TCCanvas';

export const Text_2D: VFC = () => {
    const lorem = loremIpsum({ count: 6 })

    return (
        <TCanvas position={[0, 0, 10]}>
            <TextObject text={lorem} />
        </TCanvas>
    )
}

// ----------------------------------------------
const TextObject: VFC<{ text: string }> = ({ text }) => {
    const textRef = useRotate([0, 0.1, 0])

    return (
        <Text
            ref={textRef}
            color="#24ACF2"
            fontSize={0.5}
            maxWidth={10}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'left'}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle">
            {text}
        </Text>
    )
}