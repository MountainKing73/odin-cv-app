export default function PersonalInfo({ info }) {
  return (
    <div className="InfoContainer">
      <div>{info.name}</div>
      <div>{info.location}</div>
      <div>{info.phone}</div>
      <div>{info.email}</div>
    </div>
  );
}
