import React from 'react';
import ButtonPrimary from './Button';

function Mainsection(props){
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <h1 className="text-6xl font-bold text-gray-800">{props.title}</h1>
            <p className="text-xl text-gray-800 max-w-5xl text-justify mt-8">{props.description}</p>
            <ButtonPrimary
            title="Hola Mundo!" 
            />
        </div>
    );
}

export default Mainsection;