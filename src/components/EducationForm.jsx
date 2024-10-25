import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";

export default function EducationForm({ currEducation, updateCallback }) {
  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      date: "",
      id: "",
    },
  ]);

  useEffect(() => {
    setEducation(currEducation);
  }, [currEducation]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    const newList = [...education];
    const entry = newList.find((a) => a.id === e.target.getAttribute("itemid"));
    switch (id) {
      case "school":
        entry.school = value;
        break;
      case "degree":
        entry.degree = value;
        break;
      case "date":
        entry.date = value;
        break;
    }
    setEducation(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCallback(education);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newList = [...education];
    const newEntry = {
      school: "",
      degree: "",
      date: "",
      id: crypto.randomUUID(),
    };
    newList.push(newEntry);
    setEducation(newList);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setEducation(
      education.filter((a) => a.id !== e.target.getAttribute("itemid")),
    );
  };

  return (
    <div className="EducationForm">
      {education.map((entry) => (
        <div className="FormItem" key={entry.id}>
          <Input
            label="School"
            id="school"
            value={entry.school}
            itemID={entry.id}
            onChangeCB={handleInputChange}
          />
          <Input
            label="Degree"
            id="degree"
            value={entry.degree}
            itemID={entry.id}
            onChangeCB={handleInputChange}
          />
          <Input
            label="Dates"
            id="date"
            value={entry.date}
            itemID={entry.id}
            onChangeCB={handleInputChange}
          />
          <Button text="Delete" handleClick={handleDelete} itemID={entry.id} />
        </div>
      ))}
      <Button text="Update" handleClick={handleSubmit} />
      <Button text="Add" handleClick={handleAdd} />
    </div>
  );
}
