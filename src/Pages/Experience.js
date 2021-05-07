import React from 'react';
import { experienceData } from '../data';
import 'react-multi-carousel/lib/styles.css';
import ExperienceCard from '../Components/ExperienceCard';

function Experience() {
    return (
        <div id="experience" className="flex p-4 flex-col h-auto w-full">
            <div className="">
                <div className="text-secondary font-bold pl-10 pr-10">
                    Experience
            </div>

                <div className="flex flex-nowrwap h-full justify-center items-center ">
                    {experienceData.map((project) => {
                        return (<div className="p-4">
                            <ExperienceCard experienceData={project} />
                        </div>);
                    })}
                </div>            </div>
        </div>

    );
}

export default Experience;