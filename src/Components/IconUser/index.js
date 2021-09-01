import { Ellipse } from 'react-konva'
import useImage from 'use-image';
import { useState } from 'react';


export default function IconUser(props) {
    const [image] = useImage(props.src);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();


    var img = new window.Image();
    img.addEventListener("load", function(){
        setHeight(this.naturalHeight);
        setWidth(this.naturalWidth);
    });
    img.src = props.src;

    return (
        <Ellipse
            x={28}
            y={28}
            width={23}
            height={23}
            fillPatternImage={image}
            fillPatternScaleX={23/width}
            fillPatternScaleY={23/height}
            fillPatternX={-11.3}
            fillPatternY={-11.3}
            fillPatternRepeat="no-repeat"

        />

    )
}