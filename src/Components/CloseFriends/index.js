import { Rect, Text, Group } from 'react-konva';

export default function CloseFriends(props) {
    // retorna um retangulo de 16x16 com bordas arredondadas de cor verde
    return (
        <Group
            x={215}
            y={22}
        >
            <Rect
                width={30}
                height={18}
                fill="#77dd77"
                cornerRadius={4}
            /> 
            <Text
                text="★"
                padding={2}
                fontSize={16}
                fontFamily="Arial"
                fill="white"
            /> 
        </Group>
    );
}