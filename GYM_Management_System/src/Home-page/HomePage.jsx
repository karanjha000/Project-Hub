// GymDashboard.jsx

import React, { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const greetings = [
    "Welcome Back, Karan!",
    "Ready to Crush Our Goals?",
    "Unleash Your Beast Part!",
    "Let's Make Today Count!",
    "No Pain, No Gain!",
    "Stay Strong, Stay Focused!"
  ];

  const getRandomGreeting = () => greetings[Math.floor(Math.random()*greetings.length)]
  const [currentGreeting] = useState(getRandomGreeting);

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">Gympro</h1>
        <nav className="nav-links">
          <a href="#">Dashboard</a>
          <a href="#">Workouts</a>
          <a href="#">Memberships</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h2>{currentGreeting}</h2>
          <button className="start-button">Start Workout</button>
        </header>

        <section className="content-grid">
          <div className="card">
            <h3>Today's Workout</h3>
            <p>Chest, Back, Cardio</p>
          </div>
          <div className="card">
            <h3>Progress</h3>
            <p>Bench Press: 120kg ➔ 130kg</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
