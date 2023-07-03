import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Projects.css';






const Projects = () => {
    const img1 = 'https://i.ibb.co/8DqXS81/assinment12.png'
    const img2 = 'https://i.ibb.co/6RN08zq/assinment10.png'
    const img3 = 'https://i.ibb.co/wNwL9fg/assinment11.png'

    return (
        <div>
            <div>
                <h1 className="text-center font-bold text-black text-3xl">Some of <span className='text-red-500'>My Projects</span></h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-6 mb-10'>

                    <div data-aos="fade-right" className="card w-96 bg-base-300 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={img1} alt="Shoes" />
                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold text-3xl">Dance School</h2>
                            <p>
                                Stripe payment gateway integration enables purchases and payments using Stripe as the processor. <br />
                                Purchased courses grant access to class content or materials for students. <br />
                                Instructors add classes, admins approve or deny them, and instructors receive student feedback. The website homepage should be
                                responsive for optimal user experience. <br />
                            </p>

                            <div className="flex justify-around gap-7 mt-5">
                                <Link to="https://splendid-sfogliatella-1a2470.netlify.app/">
                                    <button className="btn btn-square btn-secondary btn-outline">
                                        <BiLinkExternal />
                                    </button>
                                </Link>

                                <Link to="https://github.com/samimhossainsujon/Dance-School-Server">
                                    <button className="btn btn-square btn-secondary btn-outline">
                                        <AiFillGithub />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>



                    <div data-aos="fade-right" className="card w-96 bg-base-300 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={img2} alt="Shoes" />
                        </figure>



                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold text-3xl">Bangla Bazar & Restaurant</h2>
                            <p>
                                Users Can navigate to another page <br />
                                Each recipe includes the recipe name, ingredients, cooking method, and rating.<br />
                                Users can add recipes to their favorites list by clicking the "Add to favorites" button. <br />
                                The website includes a responsive design that looks great on desktop and mobile devices.<br />
                                This website includes a contact page In the blog page Users can download the blog pdf version <br />


                            </p>

                            <div className="flex justify-around gap-7 mt-5">
                                <Link to='https://chic-faun-1d0ec4.netlify.app/'>
                                    <button className="btn btn-square btn-secondary btn-outline">
                                        <BiLinkExternal />
                                    </button>
                                </Link>

                                <Link to='https://github.com/samimhossainsujon/Bangla-Bazar-Restaurant-server'>
                                    <button className="btn btn-square btn-secondary btn-outline">
                                        <AiFillGithub />
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>



                    <div data-aos="fade-right" className="card w-96 bg-base-300 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={img3} alt="Shoes" />
                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold text-3xl">Toy Robots</h2>
                            <p>
                                This Website based on kidds Toy Robots <br />
                                User can see all Toys Robots. <br />
                                seller can add his Toy Robots firbase login Authentication is added
                            </p>

                            <div className="flex justify-around gap-7 mt-5">
                                <Link to='https://monumental-palmier-c01294.netlify.app/'>
                                    <button className="btn btn-square btn-secondary btn-outline">
                                        <BiLinkExternal />
                                    </button>
                                </Link>

                                <Link to='https://github.com/samimhossainsujon/Toy-Robots-Server'>
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


// website name :Toy-Robots
// seconde website live link : https://monumental-palmier-c01294.netlify.app/
//  git hub client site link:https://github.com/samimhossainsujon/Toy-Robots-Server
// git hub server site link:





// third website live link : https://chic-faun-1d0ec4.netlify.app/
//  git hub client site link:https://github.com/samimhossainsujon/Bangla-Bazar-Restaurant
// git hub server site link: https://github.com/samimhossainsujon/Bangla-Bazar-Restaurant-server



// website name Dance School
// first website link : https://splendid-sfogliatella-1a2470.netlify.app/
//  git hub client site link:https://github.com/samimhossainsujon/Dance-School-Client
// git hub server site link:https://github.com/samimhossainsujon/Dance-School-Server
