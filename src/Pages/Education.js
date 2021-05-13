import React from 'react';
import Chip from '../Components/Chip'
import { educationData } from '../data'

function Education() {
    return (
        <div id="education" className="flex p-4 flex-col h-full w-full">
            <div className="text-secondary font-bold pl-4 pr-4 pb-4">
                Education
                </div>
            <div className="flex flex-nowrwap justify-center items-center ">

                <div
                    className="w-5/6 h-4/5 rounded-lg text-secondary"
                >
                    <div className="grid grid-cols-3 rounded-xl ">
                        <div className="col-span-1 w-full h-full">
                            <img src={process.env.PUBLIC_URL + educationData.image} className="object-scale-down rounded-lg w-full h-full" />
                        </div>
                        <div className="col-span-2 pt-8 pl-8 pr-8">
                            <div id="Card" className="grid grid-cols-1 divide-y-2 divide-primary">

                                <div className="p-4 font-bold text-5x" id="Title">{educationData.title}</div>
                                <div className="pl-4 pt-1 pr-4 font-bold text-xl" id="Title">Study Term</div>
                                <div

                                    className="m-2 pr-2 pl-2 pt-1 pb-1 rounded-2xl text-base font-medium text-primarytext">
                                    {educationData.date}
                                </div>
                                <div className="pl-4 pt-1 pr-4 font-bold text-xl" id="Title">Degree</div>
                                <div

                                    className="m-2 pr-2 pl-2 pt-1 pb-1 rounded-2xl text-base font-medium text-primarytext">
                                    {educationData.degree}
                                </div>
                                <div className="pl-4 pt-1 pr-4 font-bold text-xl" id="Title">GPA</div>
                                <div

                                    className="m-2 pr-2 pl-2 pt-1 pb-1 rounded-2xl text-base font-medium text-primarytext">
                                    {educationData.GPA}
                                </div>
                                <div className="pl-4 pt-1 pr-4 font-bold text-xl" id="Title">Courses Completed</div>
                                <div className="flex flex-wrap pt-4 pb-4 pr-2 pl-2">{educationData.courses.map((item) => {
                                    return <Chip customClass="bg-primary text-primarytext border-2 border-secondary" text={item} />
                                })}</div>
                            </div>

                        </div>


                    </div>

                </div >

            </div>
        </div>


    );
}

export default Education;