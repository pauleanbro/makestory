import { Text } from 'react-konva'

export default function NameUser(props) {
  return (
    <Text
      text={props.username}
      x={47}
      y={23}
      fontSize={14}
      fontFamily="Arial"
      fontStyle="bold"
      fill="white"
    />
  )
}