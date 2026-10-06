import { placeOrder } from "../actions";

export default function CheckoutPage() {
  return (
    <section>
      <h2>Checkout</h2>

      <form action={placeOrder}>
        <div>
          <label htmlFor="name">
            Name
          </label>

          <input
            id="name"
            name="name"
            required
          />
        </div>

        <div>
          <label htmlFor="phone">
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            required
          />
        </div>

        <button type="submit">
          Place Order
        </button>
      </form>
    </section>
  );
}
