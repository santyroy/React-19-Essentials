export const CustomButton = ({ text }) => {
  const name = "Sougata";

  const handleClick = (e) => {
    console.log("Clicked element: ", e.target);
    console.log("Click cordinates: ", e.clientX, e.clientY);
    console.log("Which mouse button: ", e.button);

    console.log(`Hey ${name}, you clicked ${text}`);

    alert("Thanks for liking");
  };

  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <button onClick={() => alert("Thanks for liking!")}>Like</button>
    </>
  );
};
