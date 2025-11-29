import React from "react";
import Button from "../ui/Button";

const WhatWeDo = () => {
  return (
    <div className="md:h-screen flex mx-4 md:mx-32 py-20 md:pt-44 gap-32" id="about-us">
      <div className="flex md:h-3/4">
        <video
          src="/assets/2.mp4"
          autoPlay
          muted
          loop
          className="w-1/2 md:block hidden"
        />
        <div className="flex flex-col justify-center font-regular md:pl-36 md:pr-16 gap-12">
          <h1 className="text-3xl">
            Nexus Studio specializes in UI/UX Design, Mobile and Web
            Development.
          </h1>

          <h1 className="px-2 md:pr-32 text-2xl md:text-xl font-regular leading-7 md:leading-6">
          Every brand has a story. Our mission is to tell yours in the most
          compelling way possible. Through thoughtful design, intuitive
          interfaces, and seamless interactions, we create digital experiences
          that forge genuine connections. <br />
          <br />
          We approach each project with fresh eyes and an open mind. No
          templates, no shortcuts—just authentic creativity backed by technical
          mastery. The outcome? Digital products that feel personal, perform
          brilliantly, and grow with your business.
        </h1>
          {/* <Button
            url="/services"
            className="border-1 border-black rounded-full w-full md:w-fit text-2xl md:text-3xl"
            padding="px-20 py-16"
          >
            What we do
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
