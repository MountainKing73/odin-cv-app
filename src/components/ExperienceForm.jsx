import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";

export default function ExperienceForm({ currExperience, updateCallback }) {
  const [experience, setExperience] = useState([
    {
      company: "",
      title: "",
      dateFrom: "",
      dateTo: "",
      responsibilities: "",
      id: "",
    },
  ]);

  useEffect(() => {
    setExperience(currExperience);
  }, [currExperience]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    const newList = [...experience];
    const entry = newList.find((a) => a.id === e.target.getAttribute("itemid"));
    switch (id) {
      case "company":
        entry.company = value;
        break;
      case "title":
        entry.title = value;
        break;
      case "dateFrom":
        entry.dateFrom = value;
        break;
      case "dateTo":
        entry.dateTo = value;
        break;
      case "responsibilities":
        entry.responsibilities = value;
        break;
    }
    setExperience(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCallback(experience);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newList = [...experience];
    const newEntry = {
      company: "",
      title: "",
      dateFrom: "",
      dateTo: "",
      responsibilities: "",
      id: crypto.randomUUID(),
    };
    newList.push(newEntry);
    setExperience(newList);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setExperience(
      experience.filter((a) => a.id !== e.target.getAttribute("itemid")),
    );
  };

  return (
    <div className="ExperienceForm">
      {experience.map((entry) => (
        <div key={entry.id}>
          <Input
            label="Company"
            id="company"
            value={entry.company}
            itemID={entry.id}
            onChangeCB={handleInputChange}
          />
          <Input
            label="Title"
            id="title"
            value={entry.title}
            itemID={entry.id}
            onChangeCB={handleInputChange}
          />
          <Input
            label="Date From"
            id="dateFrom"
            value={entry.dateFrom}
            itemID={entry.id}
            onChangeCB={handleInputChange}
          />
          <Input
            label="Date To"
            id="dateTo"
            value={entry.dateTo}
            itemID={entry.id}
            onChangeCB={handleInputChange}
          />
          <Input
            label="Responsibilities"
            id="responsibilities"
            value={entry.responsibilities}
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
