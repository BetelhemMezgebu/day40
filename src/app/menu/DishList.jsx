import Link from "next/link";

const dishes = [
  {
    id: "kitfo",
    name: "Kitfo",
    price: 350,
    description: "Traditional Ethiopian minced beef dish.",
  },
  {
    id: "pizza",
    name: "Pizza",
    price: 500,
    description: "Freshly baked pizza.",
  },
  {
    id: "burger",
    name: "Burger",
    price: 400,
    description: "Beef burger with fresh vegetables.",
  },
];

export default function DishList() {
  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>
          <p>{dish.price} ETB</p>

          <Link href={`/menu/${dish.id}`}>View Dish</Link>
        </div>
      ))}
    </div>
  );
}
