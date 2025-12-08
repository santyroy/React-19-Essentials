import { useState } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Bruce Wayne",
    age: 30,
    email: "batman@justiceleague.com",
    address: {
      city: "Gotham",
      country: "USA",
    },
  });

  const updateName = () => {
    setUser({ ...user, name: "Clark Kent" });
  };

  const updateAge = () => {
    setUser((prev) => {
      return { ...prev, age: prev.age + 1 };
    });
  };

  const updateMultiple = () => {
    setUser({ ...user, name: "Clark kent", age: user.age + 1 });
  };

  const updateCity = () => {
    setUser({ ...user, address: { ...user.address, city: "Metropolis" } });
  };

  console.log("Component rendering, user: ", user);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Country: {user.address.country}</p>
      <button onClick={updateName}>Change name to Clark Kent</button>
      <button onClick={updateAge}>Increase age by 1</button>
      <button onClick={updateMultiple}>Update Name and Age</button>
      <button onClick={updateCity}>Move to Metropolis</button>
    </div>
  );
};
