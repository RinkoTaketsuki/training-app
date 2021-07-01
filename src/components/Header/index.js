import "./index.scss";
import imgURL from '../../avatar.jpg';
export default function Header() {
  return (
    <header className="header">
      <img
        className="avatar"
        alt="Avatar"
        src={imgURL}
      />
      <h2>
        my name is <span className="name">Narisu.T</span>,{" "}
        <span className="age">24</span> years old and this is my resume/cv
      </h2>
    </header>
  );
}
