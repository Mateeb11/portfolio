export default function Skill({ skill, level }) {
  return (
    <li>
      {skill}
      <div>{level}</div>
    </li>
  );
}
