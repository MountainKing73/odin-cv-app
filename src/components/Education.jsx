export default function Education({ education }) {
  return (
    <div className="EducationContainer">
      <ul>
        {education.map((entry) => (
          <li key={entry.id}>
            <div>{entry.school}</div>
            <div>{entry.degree}</div>
            <div>{entry.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
