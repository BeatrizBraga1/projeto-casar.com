import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

const NavbarMobile = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoToFavorites = () => {
        navigate('/favorites');
    };

    const isFavoritesPage = location.pathname === '/favorites';

    return (
        <div className="flex fixed bottom-0 w-full sm:hidden">
            <div className={`w-[50%] justify-items-center p-[20px] ${isFavoritesPage ? 'bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.11)]' : 'bg-p-color'}`}
                onClick={handleGoBack}>
                <FaUser className={`text-[25px] ${isFavoritesPage ? 'text-placeholder' : 'text-white'}`} />
            </div>
            <div className={`w-[50%] justify-items-center p-[20px] ${isFavoritesPage ? 'bg-p-color' : 'bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)]'}`}
                onClick={handleGoToFavorites}>
                <FaHeart className={`text-[25px] ${isFavoritesPage ? 'text-white' : 'text-placeholder'}`} />
            </div>
        </div>
    );
};

export default NavbarMobile;
