import React from "react";
import './style.css';
import logo from './menuLogo.jpg'

export default function App() {
  return (
    <div>
      <div className="body">
        <header>Your Logo</header>
        <nav>
          <ul>
            <li>Home</li>
            <li>|</li>
            <li>About</li>
            <li>|</li>
            <li>Services</li>
            <li>|</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div className="about">
          <div className="img">
            <img src={logo}></img>
          </div>
          <div className="text">
            <h2>About</h2>
            <p>
              the quick brown fox jumos over the kazy dog the quick brown fox
              jumos over the kazy dog the quick brown fox jumos over the kazy
              dog the quick brown fox jumos over the kazy dog the quick brown
              fox jumos over the kazy dog the quick brown fox jumos over the
              kazy dog the quick brown fox jumos over the kazy dog the quick
            </p>
          </div>
        </div>

        <div className="menu">
          <ul>
            <li>About Us</li>
            <hr />
            <li>How We Work</li>
            <hr />
            <li>Testimonials</li>
            <hr />
            <li>Contact Support</li>
            <hr />
          </ul>
        </div>

        <div className="rsec">
          <div>
            <h2>How we work</h2>
            <p>
              the quick brown fox jumos over the kazy dog the quick brown fox
              jumos over the kazy dog the quick brown fox jumos over the kazy
              dog the quick brown fox jumos over the kazy dog the quick brown
              fox jumos over the kazy dog the quick brown fox jumos over the
              kazy dog the quick brown fox jumos over the kazy dog the quick
              brown fox jumos over the kazy dog the quick brown fox jumos over
              the kazy dog the quick brown fox jumos over the kazy dog the quick
              brown fox jumos over the kazy dog the quick brown fox jumos over
              the kazy dog the quick brown fox jumos over the kazy dog the quick
              brown fox jumos over the kazy dog
            </p>
          </div>
        </div>

        <footer>All Rights Reserved.</footer>
      </div>
    </div>
  );
}
