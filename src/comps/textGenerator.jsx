import React from 'react';
import MicroFrontend from '../microfrontend';

const textGeneratorHost = process.env.REACT_APP_TEXTGENERATOR_HOST;

const TextGenerator = () => {
    return <MicroFrontend name="TextGenerator" host={textGeneratorHost} />
}

export default TextGenerator;