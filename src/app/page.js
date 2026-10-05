import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Addis Eats</h1>
      <p>Delicious food, just a click away.</p>

      <Link href="/menu">View Menu</Link>
    </main>
  );
}