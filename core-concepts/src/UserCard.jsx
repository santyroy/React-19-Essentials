import { UserInfo } from "./UserInfo";

export const UserCard = ({ name, age, city, email }) => {
  return (
    <div>
      <h2>User Details</h2>
      <UserInfo name={name} age={age} city={city} email={email} />
    </div>
  );
};

// Better way of passing props
export const UserCard2 = (props) => {
  return (
    <div>
      <h2>User Details</h2>
      <UserInfo {...props} />
    </div>
  );
};

// Extract few props and deligate rest props using ...rest operator
export const UserCard3 = ({ id, ...rest }) => {
  return (
    <div>
      <h2>User{id} Details</h2>
      <UserInfo {...rest} />
    </div>
  );
};
