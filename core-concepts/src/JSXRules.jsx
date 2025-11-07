import React from "react";

// Rules for JSX

// Rule #1. Every component must return a single root element
//  - you can't return multiple elements sitting side by side
//  - they need to be wrapped in a parent container (<div> / <React.Fragment> / <></>)
//  - As JSX returns a JavaScript object, so in JS a function cannot return two objects without wrapping them in an array
export const UserProfile = () => {
  return (
    <>
      <h1>React 19 Course</h1>
      <p>Author: Sougata</p>
    </>
  );
};

// Rule #2. Every single tag must be properly closed
//  - even the ones that don't have closing tags in HTML
export const ContactForm = () => {
  return (
    <form>
      <input type="text" placeholder="Your name" />
      <br />
      <input type="text" placeholder="Your email" />
    </form>
  );
};

// Rule #3. Attribute names must be written in camelCase
//  - Since JSX is an extension of JavaScript, HTML attributes that conflict with JavaScript keywords need different names.
//  - Since attributes written in JSX become keys of JavaScript objects, they need to be valid JavaScript variable names.
export const StyledForm = () => {
  return (
    <form className="contact-form">
      <label htmlFor="username">Username</label>
      <input type="text" id="username" className="input-form" />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" className="input-form" tabIndex="0" />
    </form>
  );
};

// Rule #4. You can embed JavaScript expressions directly in your markup using curly braces.
export const CandidateProfile = () => {
  const name = "Peter Parker";
  const role = "Web Developer";
  const yearsOfExperience = 5;
  const isAvailable = true;

  return (
    <>
      <h2>{name}</h2>
      <p>
        {role} with {yearsOfExperience} years of experience
      </p>
      <p>Started in {2025 - yearsOfExperience}</p>
      <p>Status: {isAvailable ? "Available" : "Busy"}</p>
      <p>Contact: {name.toLowerCase().replace(" ", ".")}@email.com</p>
    </>
  );
};
