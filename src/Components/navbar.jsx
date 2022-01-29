import React from 'react';

function Navbar() {
    return ( 
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 shadow-lg w-screen">
            <div className="flex items-center flex-shrink-0 text-white">
                <h3>LogoName</h3>
            </div>
        </nav>
    );
}

export default Navbar;