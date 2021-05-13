import React from "react";
import Chip from './Chip';

function ProjectCard({ projectData }) {
    return (
        <a
            className="p-4 m-4 rounded-lg text-secondary"
            href={projectData.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="hover:bg-primary2 rounded-xl">
                <img src={process.env.PUBLIC_URL + projectData.image} className="rounded-lg object-fill w-full" />
                <div id="Card" className="grid grid-cols-1 text-2xl divide-y-2 divide-primary">

                    <div className="p-4 font-bold" id="Title">{projectData.title}</div>
                    <div className="text-lg text-primarytext p-4">{projectData.description}</div>
                </div>
                <div className="flex flex-wrap">{projectData.tags.map((item) => {
                    return <Chip customClass="bg-secondary text-primary" text={item} />
                })}</div>
                <div className="flex flex-wrap">{projectData.tech.map((item) => {
                    return <Chip customClass="bg-primary text-primarytext border-2 border-secondary" text={item} />
                })}</div>
            </div>


        </a >

    );
}

export default ProjectCard;