"use client";

import { useState } from "react";

export default function CartClient() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Kitfo",
      price: 350,
      quantity: 1,
    },
  ]);

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      {cart.map((item) => (
        <article key={item.id}>
          <h3>{item.name}</h3>

          <p>
            {item.quantity} × {item.price} ETB
          </p>
        </article>
      ))}

      <h3>Total: {total} ETB</h3>
    </div>
  );
}