import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <header>
        <h1 className="header">About Us</h1>

        <p className="subheader">
          Welcome to my Greeting Assignment!
          This website is created to practise React,
          components, CSS styling, and navigation
          using React Router.
        </p>
      </header>

      <div className="Sub-container">
        <h3>What I Am Learning</h3>

        <ul>
          <li>Building reusable React components</li>
          <li>Using JSX to create webpage layouts</li>
          <li>Styling pages with CSS</li>
          <li>Navigating between pages using React Router</li>
        </ul>
      </div>

      <section className="main-section">
        <p>
          This assignment is part of my journey
          toward becoming a better frontend developer.
        </p>

        <Link to="/" className="back-link">
          Back to Home
        </Link>
      </section>
    </>
  );
}

export default About;