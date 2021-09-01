import useImage from 'use-image';
import { Image, Transformer } from 'react-konva';
import { useRef, useEffect, Fragment } from 'react';


export default function BackgroundImage(props) {
    const shapeRef = useRef();
    const trRef = useRef();
    
    const [image] = useImage(props.src);

    useEffect(() => {
        if (props.isSelected) {
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [props.isSelected]);

    return (
        <Fragment>
            <Image
                id="background"
                image={image}
                x={props.defaultAttr.x}
                y={props.defaultAttr.y}
                width={props.defaultAttr.width}
                height={props.defaultAttr.height}
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
                onTransformEnd={(e) => {
                    const node = shapeRef.current;
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    node.scaleX(1);
                    node.scaleY(1);
                    props.onChange({
                        ...props.defaultAttr,
                        x: node.x(),
                        y: node.y(),
                        width: Math.max(5, node.width() * scaleX),
                        height: Math.max(node.height() * scaleY),
                    });
                }}
            />
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
    );
}
