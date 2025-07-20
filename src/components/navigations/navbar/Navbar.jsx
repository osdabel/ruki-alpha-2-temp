'use client'
import { useState, useEffect } from "react";
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {


        
        const navTop = document.querySelector('.nav-1');
        const navBot = document.querySelector('.nav-2');
        const sidemenu = document.querySelector('.sidemenu');
        
        const handleClick = () => {
            setIsOpen(!isOpen);
            navTop.classList.toggle('active');
            navBot.classList.toggle('active');
            sidemenu.classList.toggle('active');
        }

        const button = document.querySelector('.menu-button');
        button?.addEventListener('click', handleClick);

        return () => {
            button?.removeEventListener('click', handleClick);
        };

    }, []);
    
    

    return (
        <>
        <div className="bg-gray-50 w-screen h-14 flex justify-between items-center px-6 fixed top-0 left-0 z-99 shadow-sm">
            <div className="text-xl font-bold ">
                <h1>RUKI</h1>
            </div>
            <button className="menu-button">
            <div className="gap-1 flex flex-col items-end">
                <div className="nav-1 bg-black h-0.5"></div>
                <div className="nav-2 bg-black h-0.5"></div>
            </div>
            </button>
        </div>
        <div className="w-screen h-14"></div>

        <div className="sidemenu bg-blue-950 w-screen fixed z-80 text-white">
            <div className="flex flex-col gap-2 mt-4">
                <div className="my-2 mx-4 text-gray-100">
                    <h1 className="font-black text-2xl">HOME</h1>
                </div>
                <div className="my-2 mx-4 text-gray-100">
                    <h1 className="font-black text-2xl">OSIS</h1>
                </div>
                <div className="my-2 mx-4 text-gray-100">
                    <h1 className="font-black text-2xl">MPK</h1>
                </div>
                <div className="my-2 mx-4 text-gray-100">
                    <h1 className="font-black text-2xl">MPLS</h1>
                </div>
                <div className="my-2 mx-4 text-gray-100">
                    <h1 className="font-black text-2xl">AKSI SISWA</h1>
                </div>
                <div className="my-2 mx-4 text-gray-100">
                    <h1 className="font-black text-2xl">SONG REQUEST</h1>
                </div>
                <div className="my-2 mx-4 text-gray-100">
                    <h1 className="font-black text-2xl">E - Commerce</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;