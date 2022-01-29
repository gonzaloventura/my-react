import React from 'react';

function ButtonPrimary(props) {
    return ( 
        <button className='p-2 pl-5 pr-5 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-blue-500 hover:text-gray-100 focus:border-4 focus:border-blue-300 transition-all hover:shadow-lg'>
            {props.title}
        </button>
    );
}

export default ButtonPrimary;