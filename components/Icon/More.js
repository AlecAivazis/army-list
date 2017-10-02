// external imports
import React from "react"
import { G, Circle as SvgCircle, Svg } from "react-native-svg"

const Circle = ({ ...unused }) => <SvgCircle fill="white" {...unused} />

const More = () => (
    <Svg height={14} width={48} viewbox="0 0 48 14">
        <Circle cx="6" cy="9" r="5" />
        <Circle cx="24" cy="9" r="5" />
        <Circle cx="42" cy="9" r="5" />
    </Svg>
)

export default More
