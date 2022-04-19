import React from 'react'
import s from './wrapper.module.scss'

interface Props{
    children: React.ReactNode
}

function Wrapper({children}:Props) {
    return (
        <div className={s.wrapper}>
            {children}
        </div>
    )
}

export default Wrapper;
