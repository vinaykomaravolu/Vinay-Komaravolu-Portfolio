import React from 'react';
import { skillsData } from '../data';
import Chip from '../Components/Chip';

function Skills() {
    return (
        <div id="skills" className="flex p-4  flex-col flex-nowrap w-full h-full">
            <div className="text-secondary font-bold pl-12 pr-12 pt-4 pb-4">
                Skills
            </div>
            <div className="m-auto flex justify-center p-52">
                {skillsData.map((skills) => {
                    return (
                        <div className="p-4 m-4 bg-primary2 rounded-3xl font-bold text-secondary text-xl w-auto h-auto">
                            {skills.title}
                            <div className="flex flex-row flex-wrap pt-6">
                                {skills.content.map((item) => {
                                    return <Chip customClass="bg-primary border-secondary  text-lg" text={item} />
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;