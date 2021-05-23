import React from 'react'
import { Icon } from '@iconify/react';
import personFill from '@iconify/icons-bi/person-fill';

export const SideBar = () => {
    return (
        <div className="h-screen w-20 bg-navcolor flex justify-center items-center">
            <div className="space-y-5">
                <Icon icon={personFill} className="text-active text-3xl" />
                <Icon icon={personFill} className="text-inactive text-3xl" />
                <Icon icon={personFill} className="text-inactive text-3xl" />
                <Icon icon={personFill} className="text-inactive text-3xl" />
            </div>
        </div>
    )
}
