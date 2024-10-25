import { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";

export default function PersonalInfoForm({ currInfo, updateCallback }) {
  const [info, setInfo] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    setInfo(currInfo);
  }, [currInfo]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInfo({ ...info, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCallback(info);
  };

  return (
    <div className="infoForm">
      <Input
        label="Name"
        id="name"
        value={info.name}
        onChangeCB={handleInputChange}
      />
      <Input
        label="Location"
        id="location"
        value={info.location}
        onChangeCB={handleInputChange}
      />
      <Input
        label="Phone Number"
        id="phone"
        type="tel"
        value={info.phone}
        onChangeCB={handleInputChange}
      />
      <Input
        label="Email Address"
        id="email"
        type="email"
        value={info.email}
        onChangeCB={handleInputChange}
      />
      <Button text="Update" handleClick={handleSubmit} />
    </div>
  );
}
