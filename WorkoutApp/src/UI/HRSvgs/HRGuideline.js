import React from 'react';
import { Svg } from 'expo';

const HRGuideline = props => (
    /**PROPS:
     * width: width of the guideline
     * height: height of the guideline
     * barHeight: height of the guideline bar
     * barCcolor: color of the guideline bar
     * circleColor: color of the guideline circles
     */
    <Svg
    width={props.width || 100}
    height={props.height || 100}
    viewBox="0 0 100 100" 
    preserveAspectRatio="none"
    style={props.style}
    >
        <Svg.Rect width="8" height={100} fill={props.barColor || 'grey'} />
        <Svg.Circle fill={props.circleColor || 'green'} r="10" />
    </Svg>
);

export default HRGuideline;
