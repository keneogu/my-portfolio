"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Container from "./Container";

const HeaderSubsection = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col md:grid grid-cols-2 justify-between items-center">
          <div className="">
            <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold text">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-color to-neon-color">
                Hi! I'm{" "}
              </span>
              <TypeAnimation
                sequence={[
                  "Kenechukwu",
                  1000,
                  "Oguagbaka",
                  1000,
                  "A Full-Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-base sm:text-lg mb-6 lg:text-xl">
              I’m a Full-Stack Engineer who strives to build performant web
              applications with a focus on user interaction and accessibility
              with JavaScript, TypeScript, Ruby, React, Next, Ruby on Rails and
              Node.
            </p>
          </div>
          <div className="rounded-full relative bg-[#d0d0d0] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] justify-self-center z-10">
            <Image
              src="/images/projects/profilerotate.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 h-60 lg:h-80"
              width={400}
              height={50}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderSubsection;
