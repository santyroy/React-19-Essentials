import { Welcome } from "./Welcome";
import Button from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import {
  UserProfile,
  ContactForm,
  StyledForm,
  CandidateProfile,
} from "./JSXRules";
import "./App.css";

// PascalCase - React Components (UserProfile.jsx)
// camelCase
// snake_case
// kebab-case - React Components (user-profile.jsx)

function App() {
  return (
    <div>
      <UserProfile />
      <ContactForm />
      <StyledForm />
      <CandidateProfile />
      <Hello />
      <HelloWithoutJSX />
      <Welcome />
      <Button />
    </div>
  );
}

export default App;
