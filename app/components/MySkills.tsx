import Container from "./Container";

const pro_skills = [
  {name: "HTML", percent: 72},
  {name: "CSS", percent: 90},
]

const tech_skills = [
  {name: "ReactJs", percent: 80},
  {name: "Tailwind", percent: 90},
  {name: "NextJs", percent: 85},
  {name: "JavaScript", percent: 90},
  {name: "Node/Express", percent: 65},
  {name: "Ruby", percent: 70},
  {name: "Java", percent: 90},
  {name: "Python", percent: 70},
]

const MySkills = () => {
  return (
    <section id="skills">
      <Container>
        <div className="w-full p-6">
        <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
            My Skills
          </h2>
          <div className="w-full grid md:grid-cols-2 md:gap-y-8 md:gap-x-12">
            <div className="left-side">
              <h3 className="py-5 font-bold text-center text-2xl">Technical Skills</h3>
              <div
                className={`p-6 ${
                  tech_skills.length > 2
                    ? "md:grid grid-cols-2 gap-4"
                    : "block"
                }`}
              >
                {tech_skills.map((skill, index) => (
                  <div key={index} className="mb-9">
                    <div className="flex justify-between items-center md:px-3">
                      <p>{skill.name}</p>
                      <p>{skill.percent}%</p>
                    </div>

                    <div className="w-full h-3 border rounded-3xl mt-3 relative">
                      <span
                        className="h-full absolute left-0 rounded-3xl bg-gradient-to-r from-lime-color to-neon-color"
                        style={{ width: `${skill.percent}%` }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-right">
              <h3 className="py-5 font-bold text-center text-2xl">Professional Skills</h3>
              <div
                className={`p-6 ${
                  pro_skills.length > 2
                    ? "md:grid grid-cols-2 gap-6"
                    : "block"
                }`}
              >
                {pro_skills.map((skill, index) => (
                  <div key={index} className="mb-9">
                    <div className="flex justify-between items-center md:px-3">
                      <p>{skill.name}</p>
                      <p>{skill.percent}%</p>
                    </div>

                    <div className="w-full h-3 border rounded-3xl mt-3 relative">
                      <span
                        className="h-full absolute left-0 rounded-3xl bg-gradient-to-r from-lime-color to-neon-color"
                        style={{ width: `${skill.percent}%` }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MySkills;
