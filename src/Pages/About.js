import React from 'react';
import Model from "../Components/Model";

function About() {
    return (
        <div id="skills" className="flex p-4 flex-col flex-nowrap w-full h-full ">
            <div className="text-secondary font-bold pl-4 pr-4">
                About me
                </div>
            <div className="flex justify-center pr-12 pl-12 pt-24 pb-24 w-full h-full">
                <div className="flex flex-wrap content-center p-28 w-1/2 h-auto">
                    <h3 className="text-secondary font-bold text-2xl">I am a University of Toronto computer science graduate who has a passion for graphics programming and web development. I am someone looking for new experiences and opportunities to showcase and apply my knowledge!</h3>
                    <h3 className="text-secondary font-bold text-xl pt-4">In my free time I like to hang out with me friends, work on side projects, watch shows, and play video games!</h3>
                </div>
                <div className="w-1/2 h-auto">
                    <Model />
                </div>
            </div>
        </div>
    );
}

export default About;