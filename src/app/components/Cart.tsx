import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotalPrice = () => {
    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    return total > 0 ? total : 0; // Fallback to 0 if total is negative
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.slug.current} className="flex items-center justify-between mb-2">
              <span>{item.title}</span>
              <div className="flex items-center">
                <input 
                  type="number" 
                  min="1" 
                  value={item.quantity} 
                  onChange={(e) => updateQuantity(item.slug.current, parseInt(e.target.value))}
                  className="w-16 text-center border rounded-md" 
                  aria-label={`Quantity for ${item.title}`} 
                />
                <button 
                  className="text-red-500 ml-2 hover:text-red-700" 
                  onClick={() => removeFromCart(item.slug.current)} 
                  aria-label={`Remove ${item.title} from cart`}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="mt-4">
          <p className="font-bold">Total: ${calculateTotalPrice().toFixed(2)}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
