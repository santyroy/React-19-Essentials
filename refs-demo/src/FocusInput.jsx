import { useRef } from "react";

export const FocusInput = () => {
  const inputRef = useRef(null);

  const handleInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <button onClick={handleInputFocus}>Focus Input</button>
    </div>
  );
};
