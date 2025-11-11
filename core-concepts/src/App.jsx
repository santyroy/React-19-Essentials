import { Welcome } from "./Welcome";
import Button from "./Button";
import { Hello, HelloWithoutJSX } from "./Hello";
import {
  UserProfile,
  ContactForm,
  StyledForm,
  CandidateProfile,
} from "./JSXRules";
import { Product } from "./Product";
import "./App.css";

// PascalCase - React Components (UserProfile.jsx)
// camelCase
// snake_case
// kebab-case - React Components (user-profile.jsx)

function App() {
  return (
    <div>
      <Product
        title="Gaming laptop"
        price={1299.99}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />
      <Welcome name="Bruce" alias="Batman" />
      <Welcome name="Clark" alias="Superman" />
      <Welcome name="Diana" alias="Wonder Woman" />
      <UserProfile />
      <ContactForm />
      <StyledForm />
      <CandidateProfile />
      <Hello />
      <HelloWithoutJSX />
      <Button />
    </div>
  );
}

export default App;
