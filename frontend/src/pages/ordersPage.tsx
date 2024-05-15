import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/purchase.css";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0

interface CartItem {
  itemId: string;
  quantity: number;
  imageUrl: string;
  name: string;
}

interface Purchase {
  _id: string;
  userId: string;
  cartItems: CartItem[];
  totalAmount: number;
  purchaseDate: Date;
  status: string;
  email: string;
  addressLine1: string;
}

function PurchasePage() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth0(); // Get the authenticated user from Auth0
  const userId = user?.sub; // Extract the userId from the user object

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get<Purchase[]>(
          `http://localhost:7000/purchases/getOrder?userId=${userId}`
        );
        setPurchases(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError("Error fetching purchases");
        console.error("Error fetching purchases:", err);
      }
    };

    fetchPurchases();
  }, [userId]); // Include userId in the dependency array to re-fetch purchases when it changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  function getStatusBackgroundColor(status: string): string {
    switch (status) {
      case "pending":
        return "gray";
      case "preparing":
        return "#7F7F00"; // yellow
      case "to be picked up":
        return "#000066y";
      case "completed":
        return "#14701E"; // green
      case "canceled":
        return "red";
      default:
        return "white";
    }
  }
  return (
    <div className="purchaseContainer">
      <div className="purchaseItem">
        {purchases.map((purchase) => (
          <div key={purchase._id} className="container">
            <div className="purchaseImageContainer">
              <img
                src={purchase.cartItems[0].imageUrl}
                alt={purchase.cartItems[0].name}
              />
              <div className="itemInfo">
                <div className="info">
                  <div className="category">Item Name: </div>
                  <div className="value">{purchase.cartItems[0].name}</div>
                </div>
                <div className="info">
                  <div className="category">Quantity: </div>
                  <div className="value">{purchase.cartItems[0].quantity}</div>
                </div>
                <div className="info">
                  <div className="category">Total Amount: </div>
                  <div className="value">₱{purchase.totalAmount}</div>
                </div>
                <div className="info">
                  <div className="category">Purchase Date: </div>
                  <div className="value">
                    {new Date(purchase.purchaseDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="info">
                  <div className="category">Email: </div>
                  <div className="value">{purchase.email}</div>
                </div>
                <div className="info">
                  <div className="category">Address: </div>
                  <div className="value">{purchase.addressLine1}</div>
                </div>
              </div>
            </div>
            <section className="purchaseStatus">
              <p>{purchase.status}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PurchasePage;
