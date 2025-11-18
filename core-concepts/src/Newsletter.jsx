import { ActionButton } from "./ActionButton";

export const Newsletter = () => {
  const handleSubscribe = () => {
    alert("Thanks you for subscribing");
  };

  return (
    <div>
      <h2>Subcrive for Newsletter</h2>
      <ActionButton text={"Subscribe"} onClick={handleSubscribe} />
    </div>
  );
};
