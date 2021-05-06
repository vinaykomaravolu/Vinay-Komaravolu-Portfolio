import React from 'react';

function Home() {
    return (
        <div id="skills" className="flex p-4  flex-col flex-nowrap w-full h-full ">
            <div className="m-auto flex justify-center p-28 h-full">
                <div className="flex flex-wrap content-center h-full w-5/6">
                    <h3 className="text-secondary font-bold text-9xl">Hi, I'm Vinay!</h3>
                </div>
                <div className="w-1/2">
                    <img src={process.env.PUBLIC_URL + "./images/vinay.png"} className="  object-scale-down rounded-lg w-full h-full " />
                </div>
            </div>
        </div>
    );
}

export default Home;