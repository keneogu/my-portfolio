import Container from "./Container";

const MySkills = () => {
  return (
    <div>
      <Container>
        <div className="w-full p-6">
        <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
            My Skills
          </h2>
          <div className="w-full grid md:grid-cols-2 md:gap-y-8 md:gap-x-12">
            <div className="left-side">
              <h3 className="mb-5 font-bold text-center">Technical Skills</h3>
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="mb-9">
                  <div className="info flex justify-between items-center px-3">
                    <p>ReactJS</p>
                    <p>80%</p>
                  </div>
                  <div className="w-full h-3 border-2 rounded-3xl mt-3 relative">
                    <span className="html h-full absolute left-0 rounded-3xl bg-gradient-to-r from-lime-color to-neon-color w-[80%]"></span>
                  </div>
                </div>
                <div className="mb-9">
                  <div className="flex justify-between items-center md:px-3">
                    <p>Tailwind</p>
                    <p>90%</p>
                  </div>
                  <div className="w-full h-3 border-2 rounded-3xl mt-3 relative">
                    <span className="css w-[90%] h-full absolute left-0 rounded-3xl bg-gradient-to-r from-lime-color to-neon-color"></span>
                  </div>
                </div>
                <div className="mb-9">
                  <div className="flex justify-between items-center md:px-3">
                    <p>NextJS</p>
                    <p>75%</p>
                  </div>
                  <div className="w-full h-3 border-2 rounded-3xl mt-3 relative">
                    <span className="next w-[75%] h-full absolute left-0 rounded-3xl bg-gradient-to-r from-lime-color to-neon-color"></span>
                  </div>
                </div>
                <div className="mb-9">
                  <div className="flex justify-between items-center md:px-3">
                    <p>JavaScript</p>
                    <p>90%</p>
                  </div>
                  <div className="w-full h-3 border-2 rounded-3xl mt-3 relative">
                    <span className="css w-[90%] h-full absolute left-0 rounded-3xl bg-gradient-to-r from-lime-color to-neon-color"></span>
                  </div>
                </div>
                <div className="mb-9">
                  <div className="flex justify-between md:items-center md:px-3">
                    <p>Node/Express</p>
                    <p>65%</p>
                  </div>
                  <div className="w-full h-3 border-2 rounded-3xl mt-3 relative">
                    <span className="node w-[65%] h-full absolute left-0 rounded-3xl bg-gradient-to-r from-lime-color to-neon-color"></span>
                  </div>
                </div>
                <div className="mb-9">
                  <div className="flex justify-between items-center md:px-3">
                    <p>Ruby</p>
                    <p>70%</p>
                  </div>
                  <div className="w-full h-3 border-2 rounded-3xl mt-3 relative">
                    <span className="ruby w-[70%] h-full absolute left-0 rounded-3xl bg-gradient-to-r from-lime-color to-neon-color"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-right">
              <h3 className="mb-5 font-bold text-center">Professional Skills</h3>
              <div className="p-6">
                <div className="mb-9">
                  <div className="info flex justify-between items-center md:px-3">
                    <p>HTML</p>
                    <p>72%</p>
                  </div>
                  <div className="w-full h-3 border rounded-3xl mt-3 relative">
                    <span className="html h-full absolute left-0 rounded-3xl bg-gradient-to-r from-lime-color to-neon-color w-[72%]"></span>
                  </div>
                </div>
                <div className="mb-9">
                  <div className="flex justify-between items-center md:px-3">
                    <p>CSS</p>
                    <p>90%</p>
                  </div>
                  <div className="w-full h-3 border rounded-3xl mt-3 relative">
                    <span className="css w-[90%] h-full absolute left-0 rounded-3xl bg-gradient-to-r from-lime-color to-neon-color"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MySkills;
