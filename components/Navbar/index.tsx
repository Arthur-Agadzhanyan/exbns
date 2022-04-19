import React from 'react'
//NEXT COMPONENTS
import Image from 'next/image'
//IMAGES
import logoImg from '@/public/logos/e_logo.svg'
import menuIcon from '@/public/icons/menu.svg'
import facebookIcon from '@/public/logos/socials/facebook.svg'
import linkedInIcon from '@/public/logos/socials/linked_in.svg'
//STYLES
import s from './navbar.module.scss'

function Navbar() {
    return (
        <div className={s.navbar}>
            <div className={s.navbar__logo}>
                <Image src={logoImg}/>
            </div>

            <button className={s.navbar__btn}>
                <Image src={menuIcon}/>
            </button>

            <div className={s.navbar__socials}>
                <a href='/' className={s.socials__item}>
                    <Image src={facebookIcon}/>
                </a>

                <a href='/' className={s.socials__item}>
                    <Image src={linkedInIcon}/>
                </a>
            </div>
        </div>
    )
}

export default Navbar
