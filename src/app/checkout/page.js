import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main>
      <h1>Checkout</h1>

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <br />

        <label>
          Address:
          <input type="text" name="address" />
        </label>

        <br />

        <button type="submit">Place Order</button>
      </form>

      <br />

      <Link href="/cart">Back to Cart</Link>
    </main>
  );
}