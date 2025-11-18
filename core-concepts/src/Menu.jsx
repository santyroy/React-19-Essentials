import { MenuIten } from "./MenuItem";

export const Menu = () => {
  const handleOrder = (itemName, itemPrice) => {
    alert(`You ordered: ${itemName} for ${itemPrice}`);
  };

  return (
    <div>
      <h2>Our Menu</h2>
      <MenuIten name={"Pizza"} price={12} onOrder={handleOrder} />
      <MenuIten name={"Burger"} price={8} onOrder={handleOrder} />
      <MenuIten name={"Salad"} price={6} onOrder={handleOrder} />
    </div>
  );
};
