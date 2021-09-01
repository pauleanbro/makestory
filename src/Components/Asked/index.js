import { Fragment, useRef, useEffect } from 'react';
import { Rect, Group, Text, Transformer } from 'react-konva';

export default function Asked(props) {
    const shapeRef = useRef();
    const trRef = useRef();
    

    useEffect(() => {
        if (props.isSelected) {
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [props.isSelected]);

    return (
        <Fragment>
            <Group
                x={props.defaultAttr.x}
                y={props.defaultAttr.y}
                onClick={props.onSelect}
                onTap={props.onSelect}
                ref={shapeRef}
                draggable
                onDragEnd={(e) => {
                    props.onChange({
                        ...props.defaultAttr,
                        x: e.target.x(),
                        y: e.target.y(),
                    });
                }}
            >
                {/* Rect na posição x={40} e y={220} com os cantos de baixo arredondados  */}
                <Group>
                    <Rect
                        width={200}
                        height={70}
                        cornerRadius={10}
                        fill={'#333333'}
                    />
                    {/* Text na posição x={50} e y={230} com o texto "Perguntas" */}
                    <Text
                        text="Faça uma pergunta pra mim"
                        fontSize={13}
                        width={200}
                        fontFamily="Arial"
                        fill="white"
                        align="center"
                        padding={15}
                    />
                </Group>
                <Group
                    y={40}
                >
                    <Rect
                        width={200}
                        height={40}
                        fill={'#f5f5f5'}
                        cornerRadius={[0, 0, 10, 10]}
                    />
                    {/* Text na posiçãp x={40} e y={250} com o texto "Uma saudade?" */}
                    <Text
                        text="Uma saudade?"
                        fontSize={16}
                        width={200}
                        fontFamily="Arial"
                        fill="black"
                        align="center"
                        padding={10}
                    />
                </Group>
            </Group>
            {props.isSelected && (
                <Transformer
                    ref={trRef}
                    boundBoxFunc={(oldBox, newBox) => {
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </Fragment>
    )
}