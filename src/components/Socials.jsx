'use client' 

import {
    RiYoutubeFill,
    RiLinkedinFill,
    RiGithubFill,
    RiInstallFill
} from 'react-icons/ri';

import  Link from 'next/link';

const icons = [
    {
        path: '/',
        name: <RiYoutubeFill/>
    },
    {
        path: '/',
        name: <RiLinkedinFill/>
    },
    {
        path: '/',
        name: <RiGithubFill/>
    },
    {
        path: '/',
        name: <RiInstallFill/>
    },
]

const Socials = ({containerStyles, iconStyles}) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return <Link href={icon.path} key={index}>
                <div className={`${iconStyles}`}>{icon.name}</div></Link>
            })}
        </div>
    );
};

export default Socials;