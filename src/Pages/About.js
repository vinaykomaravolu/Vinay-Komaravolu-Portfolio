import React from 'react';
import Model from "../Components/Model";

function About() {
    return (
        <div id="skills" className="flex p-4 flex-col flex-nowrap w-full h-full ">
            <div className="text-secondary font-bold pl-4 pr-4">
                About me
                </div>
            <div className="m-auto flex justify-center h-full w-full pr-12 pl-12 pt-24 pb-24">
                <div className="flex flex-wrap content-center h-full w-full p-48">
                    <h3 className="text-secondary font-bold text-2xl">I am a University of Toronto graduate who has a passion for graphics programming and web development. I am someone looking for new experiences and opportunities to showcase and apply my knowledge!</h3>
                    <h3 className="text-secondary font-bold text-xl pt-4">In my free time I like to hang out with me friends, work on side projects, watch shows, and play video games!</h3>
                </div>
                <div className="w-full h-5/6">
                    <Model />
                </div>
            </div>
        </div>
    );
}

export default About;