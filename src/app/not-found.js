import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h2>Dish Not Found</h2>

      <p>
        Sorry, the dish you requested does not exist.
      </p>

      <Link href="/menu">
        Return to Menu
      </Link>
    </section>
  );
}
