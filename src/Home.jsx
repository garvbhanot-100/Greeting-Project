
import { useEffect } from "react";
import codingImage from "./images/coding image.png";

function Home() {
  useEffect(() => {
    document.title = `Home Page`;
  });

  return (
    <>
      <header>
        <h1 className="header">Welcome to the Student Routine Website</h1>
        <h2 className="subheader">
          <b>
            Make your Own Routine here and Make yourself Disciplined in your
            life
          </b>
        </h2>

        <h1 className="main-sub-heading">Make yourself the Bright Future for the best from the Next Generation</h1>
      </header>

      <div className="Sub-container">
        <h3>
          What are you Looking for just make yourself a Perfect Disciplined
          Person this Site is for you!
        </h3>
        <ul>
          <li>Register</li>

          <li>Make a Routine </li>
          <li>Decide Your Day to Day task and work</li>
          <li>Automate Your Work and Achieve your Future Goals</li>
        </ul>
      </div>

      <section className="main-section">
        <img src={codingImage} alt="coding" />

        <p>&copy; Garv Bhanot: All Rights Reserved</p>
      </section>
    </>
  );
}

export default Home;
