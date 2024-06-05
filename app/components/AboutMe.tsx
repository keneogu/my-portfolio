import React from "react";
import Container from "./Container";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="w-full dark:bg-[#0b0a0a]">
      <Container>
        <div className="w-full p-6">
        <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
            About Me!
          </h2>
          <div className="flex flex-col lg:grid grid-cols-2 justify-between text-center my-9 py-6">
            <div className="text-center flex items-center justify-center bg-light-bg dark:bg-dark-bg bg-cover bg-no-repeat bg-center py-11">
              <div className="rounded-full relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] justify-self-center">
                <Image
                  src="/images/projects/profile.png"
                  alt="hero image"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  width={900}
                  height={900}
                />
              </div>
            </div>
            <div className="p-3 leading-8 py-11 items-center">
              <h3 className='font-medium text-xl pb-3'>I&#39;m Kenechukwu Oguagbaka and a Web Developer</h3>
              <p className='pb-2'>
                I&#39;m a full-stack engineer who strives to build performant web
                applications with a focus on user interaction and accessibility
                with JavaScript, TypeScript, React, Next, Ruby, Ruby on Rails
                and Node.
              </p>
              <p className='pb-2'>
                I gained hands-on experience coding under the direction of a
                team, collaborating on software projects, and testing systems
                and applications. One of my responsibilities was developing
                creative solutions across a variety of software platforms. Some
                of my accomplishments include helping to create mobile-ready
                expense tracking software for clients.
              </p>
              <p className='pb-2'>
                I worked as a Quality Assurance and Tester Engineer intern for
                Jubbix, a fintech company based in united kingdom and as a
                Frontend Engineer for a startup fintech company in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
