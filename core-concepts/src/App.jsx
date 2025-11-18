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
import { Greeting } from "./Greeting";
import { CardWrapper } from "./CardWrapper";
import { UserDetails } from "./UserDetails";
import { ProductList } from "./ProductList";
import { NameList } from "./NameList";
import { Alert } from "./Alert";
import { NewButton } from "./NewButton";
import "./App.css";

// PascalCase - React Components (UserProfile.jsx)
// camelCase
// snake_case
// kebab-case - React Components (user-profile.jsx)

function App() {
  return (
    <div>
      <Alert>Your changes have been saved!</Alert>
      <Alert type="error">Something went wrong!</Alert>
      <NewButton />
      <NameList />
      <ProductList />
      <UserDetails
        name={"Bruce Wayne"}
        isOnline={true}
        isPremium={true}
        isNewUser={true}
        role={"admin"}
      />
      <UserDetails
        name={"Clark Kent"}
        isOnline={true}
        hideOffline={true}
        role={"vip"}
      />

      <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>batman@jl.com</p>
        <button>Edit profile</button>
      </CardWrapper>

      <Greeting name="Bruce" message="Good Morning" />
      <Greeting name="Clark" />
      <Greeting message="Welcome" />
      <Greeting />
      <Greeting name={null} message={0} />

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
