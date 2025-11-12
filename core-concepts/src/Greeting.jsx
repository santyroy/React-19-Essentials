// - The default value of props is only used if prop is missing or if we pass undefined
// - If we pass null or 0, the default value won't be used
export const Greeting = ({ name = "Guest", message = "Hello" }) => {
  return (
    <h2>
      {message}, {name}
    </h2>
  );
};
