import React from 'react'

export const ProjectsContent = () => {
    return (
        <div>
            <p className="text-2xl font-bold">
                Academic Projects
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    )
}

export const ProjectItem = () => {
    return (
        <div className="bg-navcolor p-5 border-white border-2 rounded border-l-8 m-3 justify-items-start">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                <img src='https://miro.medium.com/max/1000/1*qZ_k3pkSpSFwsw7_aiEUYQ.jpeg' alt="Brain Tumor" className="w-60 rounded pr-3" />
                <p className="text-xl font-bold ">Brain Tumor Classification Using CNN</p>
            </div>
            <div>
                <p className="pt-3">
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has ...
                </p>
            </div>
        </div>
    )
}

