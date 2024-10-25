import { StrictMode, useState } from "react";
import "./App.css";
import PersonalInfoForm from "./components/PersonalInfoForm";
import PersonalInfo from "./components/PersonalInfo";
import EducationForm from "./components/EducationForm";
import Education from "./components/Education";

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
  });

  const updateInfo = (info) => {
    setResume({ ...resume, info: info });
  };

  const updateEducation = (education) => {
    setResume({ ...resume, education: education });
  };

  return (
    <StrictMode>
      <PersonalInfoForm currInfo={resume.info} updateCallback={updateInfo} />
      <PersonalInfo info={resume.info} />
      <EducationForm
        currEducation={resume.education}
        updateCallback={updateEducation}
      />
      <Education education={resume.education} />
    </StrictMode>
  );
}

export default App;
