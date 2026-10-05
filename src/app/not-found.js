import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <p>The page or dish you are looking for does not exist.</p>

      <Link href="/menu">Back to Menu</Link>
    </main>
  );
}