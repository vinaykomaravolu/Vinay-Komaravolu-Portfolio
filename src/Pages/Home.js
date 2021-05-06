import React from 'react';

function Home({ isTop }) {
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
            <div className=" m-auto flex flex-col justify-center h-1/2 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                    {isTop ? <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" /> : null}
                </svg>
            </div>
        </div>
    );
}

export default Home;