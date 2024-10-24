import { StrictMode, useState } from "react";
import "./App.css";
import PersonalInfoForm from "./components/PersonalInfoForm";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  const [resume, setResume] = useState({
    info: {
      name: "John Smith",
      location: "USA",
      phone: "555-555-1212",
      email: "johnsmith@gmail.com",
    },
  });

  const updateInfo = (info) => {
    console.log("in updateInfo");
    console.log(info);
    setResume({ ...resume, info: info });
  };

  return (
    <StrictMode>
      <PersonalInfoForm updateCallback={updateInfo} />
      <PersonalInfo info={resume.info} />
    </StrictMode>
  );
}

export default App;
