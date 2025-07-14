// src/App.jsx
import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/about';
import { Skill } from './components/skills/Skill';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/contact';
import Dash from './components/project3-dash/dash';

// Combined full homepage
const FullHome = () => (
  <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </main>
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FullHome />} />
      <Route path="/dashboard" element={<Dash />} />
    </Routes>
  );
};

export default App;
