import React from "react";
import Typed from "react-typed";
import animationData from '../../assets/97639-coding.json';
import Lottie from "lottie-react";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { Link } from "react-router-dom";
import resume from '../../assets/SAMIMHOSSAINSUJONRESUME.pdf'


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

                    <div className="mt-5">
                        <a href={resume}
                            download="SAMIM HOSSAIN SUJON RESUME.pdf" >
                            <button

                                className="btn btn-outline btn-secondary">
                                Download Resume
                            </button>

                        </a>
                    </div>


                </div>

                <div className="h-full w-full">
                    <Lottie animationData={animationData}> </Lottie>
                </div>

            </div>


            <div>
                <About />
            </div>


            <div className="mt-10">
                <Projects />
            </div>

            <div className="flex justify-center items-center mb-5 mt-4">
                <Link to='/projects'>
                    <button
                        className="btn btn-outline btn-secondary">
                        See More
                    </button>
                </Link>
            </div>


        </div>
    );
}

export default Home;
