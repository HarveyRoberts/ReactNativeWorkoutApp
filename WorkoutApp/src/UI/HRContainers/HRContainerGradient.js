import React from 'react';
import { LinearGradient } from 'expo';

const HRContainerGradient = props => (
    //Used as a basic LinearGradient Component but with a flex 1 styles property
    <LinearGradient 
    style={[{ flex: 1 }, props.style]} 
    colors={props.colors}
    start={props.start}
    end={props.end}
    >
     { props.children }
    </LinearGradient>
);

export default HRContainerGradient;
