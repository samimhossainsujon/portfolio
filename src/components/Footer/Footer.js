import React from 'react';

import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <div className='grid grid-cols-3  gap-5'>
                        <Link to='https://github.com/samimhossainsujon'>
                            <button className="btn btn-square btn-lg btn-outline btn-secondary">
                                <AiOutlineGithub />
                            </button>
                        </Link>


                        <Link to='https://www.linkedin.com/in/samimhossainsujon/'>
                            <button className="btn btn-square  btn-lg btn-outline btn-secondary">
                                <AiFillLinkedin />
                            </button>
                        </Link>


                        <Link to='https://twitter.com/samimhossain_s'>
                            <button className="btn btn-square btn-lg btn-outline btn-secondary">
                                <AiFillTwitterCircle />
                            </button>
                        </Link>                       


                    </div>

                    <p className='text-3xl font-bold text-center mt-5'>Designed and Developed by <span className='text-red-500'>Samim hossain sujon</span></p>
                    <div>
                        <p className='font-bold text-black'>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;