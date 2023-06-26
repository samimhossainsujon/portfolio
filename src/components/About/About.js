import React from 'react';
import img from '../../assets/samim.jpg'
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const About = () => {
    return (
        <div className='flex gap-7 mt-2'>
            <div className='mt-16'>
                <img className='rounded-lg' src={img} alt="" />
            </div>

            <div>
                <h1 className='text-4xl font-extrabold'>About <span className='text-red-500'>Me</span></h1>
                <p className='text-black font-semibold text-base'>I am a MERN-Stack WEB Developer.
                    I am working with React, Node.js and MongoDB.
                    I also have experience in developing static websites
                    using HTML5, CSS3 and JavaScript (ES6). I am a quick
                    learner. I believe in hard work and efficiency.
                    That's why I am always ready to accomplish any task
                    by working hard. I always focus on learning new
                    technology. My goal is to become A World-Class Professional
                    Web Developer.</p>
                <h1 className='text-black font-semibold text-xl underline-offset-auto mt-5'>
                    Here are a few technologies I've been working with recently:</h1>

                <div>
                    <h1 className='text-2xl font-extrabold  text-red-500'>Frontend</h1>
                    <ul
                        className='text-black text-lg'
                        style={{ display: 'flex', gap: '10px', flexDirection: 'row', listStyleType: 'none' }}>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span> JavaScript(ES6)</li>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span> React.js</li>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span> React Bootstrap</li>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span> Tailwind CSS</li>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span> CSS3</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl font-extrabold  text-red-500'>Backend</h1>
                    <ul
                        className='text-black text-lg font-semibold'
                        style={{ display: 'flex', gap: '10px', flexDirection: 'row', listStyleType: 'none' }}>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span> Node.js</li>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span> Express.js</li>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span> MongoDB</li>

                    </ul>
                </div>



                <div>
                    <h1 className='text-2xl font-extrabold  text-red-500'>Tools</h1>
                    <ul
                        className='text-black text-lg font-semibold'
                        style={{ display: 'flex', gap: '10px', flexDirection: 'row', listStyleType: 'none' }}>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span> VS Code</li>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span>Git</li>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span>Chrome Dev Tool</li>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span>Npm & Yarn</li>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span>Firebase</li>
                        <li><span style={{ color: '#CC009C' }}>&#9679;</span> Netlify</li>

                    </ul>
                </div>





                <div className='flex gap-6 mt-5'>
                    <Link to=''>
                        <button className="btn btn-square btn-lg btn-outline btn-secondary">
                            <AiOutlineGithub/>
                        </button>
                    </Link>


                    <Link to=''>
                        <button className="btn btn-square  btn-lg btn-outline btn-secondary">
                            <AiFillLinkedin/>
                        </button>
                    </Link>


                    <Link to=''>
                        <button className="btn btn-square btn-lg btn-outline btn-secondary">
                            <AiFillTwitterCircle/>
                        </button>
                    </Link>


                    <Link to=''>
                        <button className="btn btn-square btn-lg btn-outline btn-secondary">
                            <BsFacebook/>
                        </button>
                    </Link>


                    <Link to=''>
                        <button className="btn btn-square btn-outline btn-lg btn-secondary">
                            <FaInstagramSquare/>
                        </button>
                    </Link>


                </div>

            </div>
        </div>
    );
};

export default About;