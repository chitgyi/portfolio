import React, { useState } from 'react'
import { routes } from '../../router'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const SideBar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const setIndex = (index) => {
        setCurrentIndex(index);
    }
    return (
        <div className="h-screen w-20 bg-navcolor flex justify-center items-center">
            <div className="space-y-5">
                {routes.map((item, index) =>
                (
                    <div key={index}>
                    <Link to={item.path} onClick={() => setIndex(index)}>
                        <Icon
                            icon={item.icon}
                            className={`${currentIndex === index ? 'text-active' : 'text-inactive'} text-3xl`}
                        />
                    </Link>
                    </div>
                )
                )}
           </div>
        </div>
    )
}
