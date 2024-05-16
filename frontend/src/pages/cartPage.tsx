import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/cart.css";
import { toast, ToastContainer } from "react-toastify"; // Fixed import
import "react-toastify/dist/ReactToastify.css";
interface CartItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface UserInfo {
  email: string;
  addressLine1: string;
}

function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // const [totalAmount, setTotalAmount] = useState<number>(0);
  const { user, getAccessTokenSilently } = useAuth0();
  const userId = user?.sub;

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (userId) {
      // Fetch cart items from the server based on userId
      axios
        .get(`http://localhost:7000/cart/getCart?userId=${userId}`)
        .then((response) => {
          setCartItems(response.data);
          // calculateTotalAmount(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
        });

      // Fetch user information from the server based on userId
      const fetchUserInfo = async () => {
        try {
          const token = await getAccessTokenSilently();
          const response = await axios.get(
            "http://localhost:7000/api/my/user",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserInfo(response.data);
        } catch (error) {
          console.error("Error fetching user information:", error);
        }
      };

      fetchUserInfo();
    }
  }, [userId, getAccessTokenSilently]);

  // const calculateTotalAmount = (items: CartItem[]) => {
  //   let total = 0;
  //   items.forEach((item) => {
  //     total += item.price * item.quantity;
  //   });
  //   setTotalAmount(total);
  // };

  // const handleRemoveFromCart = (cartItemId: string) => {
  //   axios
  //     .delete(`http://localhost:7000/cart/deleteCartItem/${cartItemId}`)
  //     .then((response) => {
  //       setCartItems((prevCartItems) =>
  //         prevCartItems.filter((item) => item._id !== cartItemId)
  //       );
  //       calculateTotalAmount(
  //         cartItems.filter((item) => item._id !== cartItemId)
  //       );
  //     })
  //     .catch((error) => {
  //       console.error("Error removing item from cart:", error);
  //     });
  // };
  const handleRemoveFromCart = (cartItemId: string) => {
    axios
      .delete(`http://localhost:7000/cart/deleteCartItem/${cartItemId}`)
      .then(() => {
        // Item removed successfully
        toast.success("Item removed from cart", {
          position: "top-right",
        });
        setCartItems((prevCartItems) =>
          prevCartItems.filter((item) => item._id !== cartItemId)
        );
        // calculateTotalAmount(
        //   cartItems.filter((item) => item._id !== cartItemId)
        // );
      })
      .catch((error) => {
        // Error removing item from cart
        console.error("Error removing item from cart:", error);
        toast.error("Failed to remove item from cart", {
          position: "top-right",
        });
      });
  };

  const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
    const itemIndex = cartItems.findIndex((item) => item._id === cartItemId);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex] = {
        ...updatedCartItems[itemIndex],
        quantity: newQuantity,
      };
      setCartItems(updatedCartItems);
      // calculateTotalAmount(updatedCartItems);
    }
  };

  const handlePurchase = (
    cartItemId: string,
    cartItems: CartItem[],
    userId: string,
    userEmail: string,
    addressLine1: string
  ) => {
    const itemToPurchase = cartItems.find((item) => item._id === cartItemId);

    if (itemToPurchase && userId && userEmail && addressLine1) {
      try {
        const purchaseData = {
          userId: userId,
          email: userEmail,
          addressLine1: addressLine1,
          totalAmount: itemToPurchase.price * itemToPurchase.quantity,
          cartItems: [
            {
              itemId: itemToPurchase._id,
              quantity: itemToPurchase.quantity,
              imageUrl: itemToPurchase.imageUrl,
              name: itemToPurchase.name,
            },
          ],
        };

        axios
          .post(
            `http://localhost:7000/purchases/addPurchaseFromCart`,
            purchaseData
          )
          .then((response) => {
            console.log("Item purchased:", response.data);
            // Show success toast
            toast.success("Item purchased successfully", {
              position: "top-right",
            });
          })
          .catch((error) => {
            console.error("Error purchasing item:", error);
            // Show failure toast
            toast.error("Failed to purchase item", {
              position: "top-right",
            });
          });
      } catch (error) {
        console.error("Error purchasing item:", error);
        // Show failure toast
        toast.error("Failed to purchase item", {
          position: "top-right",
        });
      }
    } else {
      console.error(
        "Item to purchase, userId, userEmail, or addressLine1 not found."
      );
      // Show failure toast
      toast.error("Failed to purchase item", {
        position: "top-right",
      });
    }
  };

  return (
    <div>
      <ul className="cartContainer">
        {cartItems.map((cartItem, index) => (
          <div className="cartSmallContainer" key={index}>
            <div
              style={{ backgroundImage: `url(${cartItem.imageUrl})` }}
              className="cartImage"
            ></div>
            <div className="cartItem">
              <div className="cartInfo">
                <p className="font-bold">{cartItem.name}</p>
                <p>₱{cartItem.price}</p>
                <input
                  type="number"
                  value={cartItem.quantity}
                  onChange={(e) =>
                    handleUpdateQuantity(cartItem._id, parseInt(e.target.value))
                  }
                />
              </div>
              <div className="cartButtonContainer">
                <button
                  className="cartButton cart"
                  onClick={() => handleRemoveFromCart(cartItem._id)}
                >
                  Remove from Cart
                </button>
                {userId && userInfo && (
                  <button
                    className="cartButton buy"
                    onClick={() =>
                      handlePurchase(
                        cartItem._id,
                        cartItems,
                        userId,
                        userInfo.email,
                        userInfo.addressLine1
                      )
                    }
                  >
                    Buy
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default CartPage;
