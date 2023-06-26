import React from "react";
import Typed from "react-typed";
import animationData from '../../assets/97639-coding.json';
import Lottie from "lottie-react";
import About from "../About/About";
import Projects from "../Projects/Projects";


function Home() {
    return (
        <div className="mt-10">
            <div className="flex gap-5">
                <div className="animated-typing">
                    <h1 className="title text-3xl font-extrabold mb-2">Hi, I’m <br />Md Samim Hossain Sujon</h1>{" "}
                    <Typed
                        className="text-[#F9004D] font-bold text-xl"
                        strings={[
                            "Front End Developer |",
                            "JavaScript Developer |",
                            "MERN-Stack Developer |",
                        ]}
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                    />
                    <p>A self-motivated and enthusiastic web developer.
                        To gain confidence and fame using my potential in the
                        field of web development and express my innovative creative
                        skills for self and company growth. I always like to learn new
                        things and have experience with new stuff.</p>

                    <button
                        className="btn btn-outline btn-secondary mt-5">
                        Download Resume
                    </button>


                </div>

                <div className="h-full w-full">
                    <Lottie animationData={animationData}> </Lottie>
                </div>

            </div>


            <div>
                <About/>
            </div>


            <div className="mt-10">
               <Projects/>
            </div>


        </div>
    );
}

export default Home;
