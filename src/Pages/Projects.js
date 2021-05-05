import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import { projectData } from '../data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Projects() {

    return (
        <><div className="text-secondary font-bold pl-12 pr-12 pt-4 pb-4">
            Projects
            </div>
            <div id="projects" className="pl-32 pr-32 w-auto h-6/7">
                <div>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        autoPlay={true}
                        centerMode={false}
                        className=""
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={true}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >

                        {projectData.map((project) => {
                            return (<div className="p-4">
                                <ProjectCard projectData={project} />
                            </div>);

                        })}
                    </Carousel>
                </div>
            </div >
        </>

    );
}

export default Projects;