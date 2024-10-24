import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function PersonalInfoForm({ updateCallback }) {
  const [info, setInfo] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    console.log("in handleInputChange");
    console.log(e.target);
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    updateCallback(info);
  };

  return (
    <form className="infoForm">
      <Input label="Name" id="name" onChangeCB={handleInputChange} />
      <Input label="Location" id="location" onChangeCB={handleInputChange} />
      <Input
        label="Phone Number"
        id="phone"
        type="tel"
        onChangeCB={handleInputChange}
      />
      <Input
        label="Email Address"
        id="email"
        type="email"
        onChangeCB={handleInputChange}
      />
      <Button text="Update" handleClick={handleSubmit} />
    </form>
  );
}
