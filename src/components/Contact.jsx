import React from 'react'
import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();
  return (
    <div className="text-zinc-200 px-[20%] py-[5%]">
      <h1 className="text-3xl font-semibold">
        <i
          onClick={() => navigate("/")}
          class="mr-5 hover:text-[#6556CD] ri-arrow-left-line"
        ></i>
        Contact Us
      </h1>

      <p className="mt-2 font-sm text-md mb-5">
        We’d love to hear from you! Whether you have questions, feedback,
        suggestions, or just want to say hello — our team is here to help. At
        SCSDB DATABASE, we’re committed to delivering the best experience for
        movie and TV lovers like you.
      </p>

      <h1 className="text-2xl font-semibold mt-[5%]">General Inquiries : </h1>
      <p className="mt-2 font-sm text-md mb-5">
        For any general questions about our platform, features, or how to use
        our service, feel free to reach out.
      </p>

      <h1 className="text-2xl font-semibold mt-[5%]">Report Bug : </h1>
      <p className="mt-2 font-sm text-md mb-5">
        Found a bug or something not working as expected? Let us know so we can
        fix it as soon as possible.
      </p>

      <h1 className="text-2xl font-semibold mt-[5%]">Suggestions & Feedback </h1>
      <p className="mt-2 font-sm text-md mb-5">
        Have an idea to improve the experience? We’d love to hear your thoughts.
      </p>
        <hr className='mt-12 text-zinc-600' />
      
    </div>
  );
}

export default Contact
