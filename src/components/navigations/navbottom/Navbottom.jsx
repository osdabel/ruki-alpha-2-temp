'use client'

import navbottom from './navbottom.css';
import Icon from './sub-comp/Icon';
import Link from 'next/link';

const Navbottom = () => {



    return (
        <>
        <div className="shadowing bg-gray-50 w-screen h-17 fixed bottom-0 left-0 z-99 pb-2 flex justify-around items-center">
        <a href="/">
            <Icon size={35} fill={0} weight={200} icon="home" name="Home"/>
        </a>
        <Link href="/osis">
            <Icon size={35} fill={0} weight={200} icon="circle" name="OSIS"/>
        </Link>
        <Link href={"/soon"}>
            <Icon size={35} fill={0} weight={200} icon="account_circle" name="Profil"/>
        </Link>
        </div>
        </>
    )
}

export default Navbottom;