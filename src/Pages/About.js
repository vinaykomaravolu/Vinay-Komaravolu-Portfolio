import React from 'react';
import Model from "../Components/Model";

function About() {
    return (
        <div id="skills" className="flex p-4  flex-col flex-nowrap w-full h-full">
            <div className="m-auto flex justify-center p-28 h-full">
                <div className="h-48 flex flex-wrap content-center h-full">
                    <h3 className="text-secondary font-bold text-9xl">Hi I'm Vinay</h3>
                </div>
                <div className="w-1/2">
                    <Model />
                </div>
            </div>
        </div>
    );
}

export default About;