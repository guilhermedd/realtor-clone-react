import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const location = useLocation(); // what page are we on?
    const navigate = useNavigate(); // function to navigate to a different page

    function pathMatchRoute(route) {
        console.log(route, location.pathname);
        return route === location.pathname;
    }
    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-50">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
                <div>
                    <img
                        src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
                        alt="logo"
                        className="h-5 cursor-pointer"
                        onClick={() => navigate('/')}
                    />
                </div>
                <div>
                    <ul className="flex space-x-10">
                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-transparent ${pathMatchRoute('/') && "text-black border-b border-b-red-500"
                                }`}
                            onClick={() => navigate('/')}
                        >
                            Home
                        </li>
                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-transparent ${pathMatchRoute('/Offers') && "text-black border-b border-b-red-500"
                                }`}
                            onClick={() => navigate('/Offers')}
                        >
                            Offers
                        </li>
                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-transparent ${pathMatchRoute('/SignIn') && "text-black border-b border-b-red-500"
                                }`}
                            onClick={() => navigate('/SignIn')}
                        >
                            Sign In
                        </li>
                        <li
                            className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-transparent ${pathMatchRoute('/profile') && "text-black border-b border-b-red-500"
                                }`}
                            onClick={() => navigate('/profile')}
                        >
                            Profile
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
