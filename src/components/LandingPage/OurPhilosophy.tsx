import React from "react";
import { TextAnimate } from "../ui/magicui/text-animate";

const OurPhilosophy = () => {
  return (
    <div className="min-h-screen bg-white -top-20 relative md:rounded-t-[5rem] px-4 pt-20 md:px-40 md:pt-48 md:pb-64">
      <div className="text-7xl md:text-[9rem] flex flex-col leading-20 md:leading-30 tracking-tighter">
        <TextAnimate
          by="word"
          animation="slideUp"
          className="font-regular top-0 relative"
        >
          Our
        </TextAnimate>
        <TextAnimate
          by="word"
          animation="slideUp"
          className="font-light-italic"
        >
          philosophy
        </TextAnimate>
      </div>

      <div className="flex items-center mt-20 md:mt-32">
        <video
          src="/assets/2.mp4"
          autoPlay
          muted
          loop
          className="w-1/2 md:block hidden"
        />
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
      </div>
    </div>
  );
};

export default OurPhilosophy;
