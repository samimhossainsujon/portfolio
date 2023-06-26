import React from 'react';
import img from '../../assets/samim.jpg'

import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';




const Projects = () => {
    return (
        <div>
            <div>
                <h1 className="text-center font-bold text-black text-3xl">Some of My Projects</h1>

                <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-6 mb-10'>

                    <div className="card w-96 bg-base-300 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={img} alt="Shoes" />
                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold text-3xl
                            ">Dance School</h2>
                            <p>
                                Stripe payment gateway integration enables purchases and payments using Stripe as the processor. <br />
                                Purchased courses grant access to class content or materials for students. <br />
                                Instructors add classes, admins approve or deny them, and instructors receive student feedback. The website homepage should be
                                responsive for optimal user experience. <br />
                            </p>

                            <div className="flex justify-around gap-7">
                                <Link to=''>
                                    <button className="btn btn-square btn-secondary btn-outline">
                                        <BiLinkExternal />
                                    </button>
                                </Link>

                                <Link to=''>
                                    <button className="btn btn-square btn-secondary btn-outline">
                                        <AiFillGithub />
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>



                    <div className="card w-96 bg-base-300 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={img} alt="Shoes" />
                        </figure>



                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Dance School</h2>
                            <p>sdf</p>

                            <div className="card-actions">
                                <Link to=''>
                                    <button className="btn btn-square btn-secondary btn-outline">
                                        <BiLinkExternal />
                                    </button>
                                </Link>

                                <Link to=''>
                                    <button className="btn btn-square btn-secondary btn-outline">
                                        <AiFillGithub />
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>



                    <div className="card w-96 bg-base-300 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={img} alt="Shoes" />
                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Dance School</h2>
                            <p>sdf</p>

                            <div className="card-actions">
                                <Link to=''>
                                    <button className="btn btn-square btn-secondary btn-outline">
                                        <BiLinkExternal />
                                    </button>
                                </Link>

                                <Link to=''>
                                    <button className="btn btn-square btn-secondary btn-outline">
                                        <AiFillGithub />
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default Projects;

// website name Dance School
// first website link : https://splendid-sfogliatella-1a2470.netlify.app/
//  git hub client site link:https://github.com/samimhossainsujon/Dance-School-Client
// git hub server site link:https://github.com/samimhossainsujon/Dance-School-Server


// website name :Toy-Robots
// seconde website live link : https://monumental-palmier-c01294.netlify.app/
//  git hub client site link:https://github.com/samimhossainsujon/Toy-Robots-Server
// git hub server site link:https://github.com/samimhossainsujon/Toy-Robots-Server




// third website live link : https://chic-faun-1d0ec4.netlify.app/
//  git hub client site link:https://github.com/samimhossainsujon/Bangla-Bazar-Restaurant
// git hub server site linkhttps://github.com/samimhossainsujon/Bangla-Bazar-Restaurant-server