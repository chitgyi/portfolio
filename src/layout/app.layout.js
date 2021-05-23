import React from 'react'
import { SideBar } from '../components/SideBar';
import { ContentLayout } from './content.layout';

export const AppLayout = () => {
    return (
        <div className="h-screen w-screen bg-background text-white flex">
            <SideBar />
            <ContentLayout />
        </div>
    )
}
