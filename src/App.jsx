import { StrictMode, useState } from "react";
import "./styles/App.css";
import PersonalInfoForm from "./components/PersonalInfoForm";
import PersonalInfo from "./components/PersonalInfo";
import EducationForm from "./components/EducationForm";
import Education from "./components/Education";
import ExperienceForm from "./components/ExperienceForm";
import Experience from "./components/Experience";

function App() {
  const [resume, setResume] = useState({
    info: {
      name: "John Smith",
      location: "USA",
      phone: "555-555-1212",
      email: "johnsmith@gmail.com",
    },
    education: [
      {
        school: "University",
        degree: "Bachelor",
        date: "2000",
        id: crypto.randomUUID(),
      },
      {
        school: "University2",
        degree: "Masters",
        date: "2004",
        id: crypto.randomUUID(),
      },
    ],
    experience: [
      {
        company: "Company A",
        title: "My job",
        startDate: "01/01/2020",
        endDate: "03/05/2023",
        responsibilities: "Did some stuff",
        id: crypto.randomUUID(),
      },
      {
        company: "Company B",
        title: "A better job",
        startDate: "04/01/2023",
        endDate: "Present",
        responsibilities: "Did some different stuff",
        id: crypto.randomUUID(),
      },
    ],
  });

  const updateInfo = (info) => {
    setResume({ ...resume, info: info });
  };

  const updateEducation = (education) => {
    setResume({ ...resume, education: education });
  };

  const updateExperience = (experience) => {
    setResume({ ...resume, experience: experience });
  };

  return (
    <StrictMode>
      <div id="EntryContainer">
        <PersonalInfoForm currInfo={resume.info} updateCallback={updateInfo} />
        <EducationForm
          currEducation={resume.education}
          updateCallback={updateEducation}
        />
        <ExperienceForm
          currExperience={resume.experience}
          updateCallback={updateExperience}
        />
      </div>
      <div id="DisplayContainer">
        <PersonalInfo info={resume.info} />
        <Education education={resume.education} />
        <Experience experience={resume.experience} />
      </div>
    </StrictMode>
  );
}

export default App;
