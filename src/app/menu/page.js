import Link from "next/link";
import { getDishes } from "../../lib/dishes";

export default async function MenuPage() {
  const dishes = await getDishes();

  return (
    <section>
      <h2>Our Menu</h2>

      <div>
        {dishes.map((dish) => (
          <article key={dish.id}>
            <h3>{dish.name}</h3>

            <p>{dish.description}</p>

            <p>{dish.price} ETB</p>

            <Link href={`/menu/${dish.id}`}>
              View Dish
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
