export default function Experience({ experience }) {
  return (
    <div className="ExperienceContainer">
      <ul>
        {experience.map((entry) => (
          <li key={entry.id}>
            <div>{entry.company}</div>
            <div>{entry.title}</div>
            <div>{entry.startDate}</div>
            <div>{entry.endDate}</div>
            <div>{entry.responsibilities}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
