import React from "react";
import Chip from './Chip';

function ExperienceCard({ experienceData }) {
    return (
        <div
            className="p-4 m-4 rounded-lg text-secondary w-full h-3/4 "
        >
            <div className="grid grid-cols-4 gap-4 rounded-xl w-full">
                <div className="col-span-2 ">
                    <img src={process.env.PUBLIC_URL + experienceData.image} className="rounded-lg w-full" />
                    <div className="flex flex-wrap pt-4 pb-4">{experienceData.tags.map((item) => {
                        return <Chip customClass="bg-secondary text-primary" text={item} />
                    })}</div>
                </div>
                <div className="pl-8 pr-8 col-span-1">
                    <div id="Card" className="grid grid-cols-1 text-2xl divide-y-2 divide-primary">
                        <div className="p-4 font-bold" id="Title">{experienceData.title}</div>
                        <div className="text-lg text-white p-4">{experienceData.description}</div>
                        <div className="pl-4 pt-1 pr-4 font-bold text-xl" id="Title">Date</div>
                        <div

                            className="m-1.5 pr-2 pl-2 pt-1 pb-1 rounded-2xl text-sm font-medium text-white">
                            {experienceData.date}
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="pl-4 pt-1 pr-4 font-bold text-xl" id="Title">Date</div>
                    <div className=" w-full h-auto pl-2 pb-4 pr-2 m-2 h-8 overflow-y-hidden">
                        {experienceData.workdone.map((work) => {
                            return (<div className="bg-primary2 rounded-2xl p-2 m-2 h-full">
                                <div className="font-bold text-base" id="Title">{work.header}</div>
                                <div className="text-base text-white text-base pl-8">
                                    <ul class="list-disc">
                                        {work.content.map((item) => {
                                            return <li>{item}</li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            )
                        })
                        }
                    </div>
                </div>

            </div>


        </div >

    );
}

export default ExperienceCard;