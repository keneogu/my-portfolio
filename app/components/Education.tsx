"use client";
import Container from "./Container";
import { CalenderIcon } from "../common/IconifyIcons";

const Education = () => {
  return (
    <section id="education">
      <Container>
        <div className="w-full bg-gradient1 dark:bg-gradient2 p-6 rounded-lg">
          <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
            Education & Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="grow-0 shrink-0 basis-3/6 mt-6">
              <h3 className="mb-5 font-bold text-center">Education</h3>
              <div className="grow-0 shrink-0 basis-full">
                <div className="w-full py-8 px-4 border-4 drop-shadow-lg shadow-xl dark:shadow-white">
                  <div className="relative mb-4">
                    <h3 className="flex items-center text-lg font-bold">
                      <CalenderIcon size={18} />{" "}
                      <span className="ml-1">2012 - 2016</span>
                    </h3>
                    <h4 className="font-bold text-lg mb-4 capitalize">
                      Bachelor in Computer Science
                    </h4>
                    <p className="text-base text-justify">
                      Spent 4+ years learning and mastering the importance of
                      computing, data structure, modeling data, and solving
                      algorithms
                    </p>
                  </div>
                  <div className="relative">
                    <h3 className="flex items-center text-lg font-bold">
                      <CalenderIcon size={18} />{" "}
                      <span className="ml-1"> Nov 2020 - Sep 2021</span>
                    </h3>
                    <h4 className="font-bold text-lg mb-4 capitalize">
                      Remote Full Stack Web Development Program, Full Time
                    </h4>
                    <p className="text-base text-justify">
                      Spent 1300+ hours mastering algorithms, data structures,
                      and full-stack development while simultaneously developing
                      projects with Ruby, Rails, JavaScript, React, and Redux
                      Developed skills in remote pair-programming using GitHub,
                      industry-standard git-flow, and daily standups to
                      communicate and collaborate with international remote
                      developers
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-3/6 mt-8">
              <h3 className=" mb-5 font-bold text-center">Experience</h3>
              <div className="grow-0 shrink-0 basis-full">
                <div className="w-full py-8 px-4 border-4 drop-shadow-lg shadow-xl dark:shadow-white">
                  <div className="relative mb-4">
                    <h3 className="flex items-center text-lg font-bold">
                      <CalenderIcon size={18} />{" "}
                      <span className="ml-1">March 2021 - Present</span>
                    </h3>
                    <h4 className="font-bold text-lg mb-4 capitalize">
                      Technical Support Engineer
                    </h4>
                    <p className="text-base text-justify">
                      Mentor junior web developers, providing technical support
                      through code reviews Propose improvements to code
                      organization to improve code quality and overall
                      performance Provide advice and tips on how to maintain
                      motivation to maintain longevity in the program
                    </p>
                  </div>
                  <div className="relative mb-4">
                    <h3 className="flex items-center text-lg font-bold">
                      <CalenderIcon size={18} />{" "}
                      <span className="ml-1">2013 - 2015</span>
                    </h3>
                    <h4 className="font-bold text-lg mb-4 capitalize">
                      Software Developer Intern at NASRDA
                    </h4>
                    <p className="text-base text-justify">
                      Spent 3+ months on industrial training(IT) at the National
                      Space Research and Development Agency (NASRDA) where I
                      collaborated with their software Engineers to build their
                      frontend page website
                    </p>
                  </div>
                  <div className="relative mb-4">
                    <h3 className="flex items-center text-lg font-bold">
                      <CalenderIcon size={18} />{" "}
                      <span className="ml-1">
                        September 2023 – December 2023
                      </span>
                    </h3>
                    <h4 className="font-bold text-lg mb-4 capitalize">
                      QA/Tester Engineer at JUUBIX
                    </h4>
                    <p className="text-base text-justify">
                      <span>
                        I distributed tasks to both the frontend and backend
                        Engineers using ClickUp
                      </span>
                      <br />
                      <span>
                        I ensured that the UI/UX design done with figma is the
                        same as the frontend designs
                      </span>
                      <br />
                      <span>
                        I ensured that the functionalities are working properly
                        before being moved to production
                      </span>
                      <br />
                      <span>
                        Write unit tests, Integration tests and e2e tests using
                        Jest
                      </span>
                    </p>
                  </div>
                  <div className="relative mb-4">
                    <h3 className="flex items-center text-lg font-bold">
                      <CalenderIcon size={18} />{" "}
                      <span className="ml-1">August 2023 – present</span>
                    </h3>
                    <h4 className="font-bold text-lg mb-4 capitalize">
                      Frontend Developer at FullView
                    </h4>
                    <p className="text-base text-justify">
                      <span>
                        Ensure that website visitors can easily interact with
                        the page
                      </span>
                      <br />
                      <span>Developing and maintaining the user interface</span>
                      <br />
                      <span>
                        Building out components and testing components with
                        storybook.js
                      </span>
                      <br />
                      <span>
                        Using Next.js, TypeScript, React, and Tailwind to bring
                        Figma design to life
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Education;
