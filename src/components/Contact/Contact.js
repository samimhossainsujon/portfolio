import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import animationData from "../../assets/contact-me.json";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_isj7zvp",
        "template_9kkwy3u",
        form.current,
        "Ca-3XxD1NGBAQaZiU"
      )
      .then(
        (result) => {
          Swal.fire("Your send successfully", "success");
          form.current.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Contact Me</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">




            {/* <StyledContactForm >              
             
            </StyledContactForm> */}




            <div className="card-body">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter Your Subject"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="user_email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">message</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Description"
                    className="input input-bordered h-40 w-60"
                  />
                </div>
                <div className="form-control mt-6">               

                  <input className="btn btn-primary"  type="submit" value="Send" required />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Contact;




