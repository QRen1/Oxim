import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/shop.css";
import { useAuth0 } from "@auth0/auth0-react";
import { toast, ToastContainer } from "react-toastify"; // Fixed import
import "react-toastify/dist/ReactToastify.css";

// import { Products } from "@/fake-datas";

function Shop() {
  const [menuItems, setMenuItems] = useState<any[]>([]);

  useEffect(() => {
    // Fetch both image and menu data
    axios
      .all([
        axios.get("http://localhost:7000/getImage"),
        axios.get("http://localhost:7000/menu"),
      ])
      .then(
        axios.spread((imageRes, menuRes) => {
          // Merge the data from both requests
          const mergedData = imageRes.data.map(
            (imageItem: any, index: number) => ({
              ...imageItem,
              ...menuRes.data[index],
            })
          );
          setMenuItems(mergedData);
        })
      )
      .catch((err) => console.error(err));
  }, []);

  const { user } = useAuth0();
  const userId = user?.sub;

  // const addToCart = (menuItemId: string) => {
  //   axios
  //     .post("http://localhost:7000/cart/addToCart", {
  //       menuItemId,
  //       userId,
  //     })
  //     .then((res) => {
  //       console.log("Item added to cart:", res.data);
  //     })
  //     .catch((err) => console.error("Failed to add item to cart:", err));
  // };

  const addToCart = (menuItemId: string) => {
    axios
      .post("http://localhost:7000/cart/addToCart", {
        menuItemId,
        userId,
      })
      .then((res) => {
        console.log("Item added to cart:", res.data);
        // Show success toast
        toast.success("Item added to cart successfully", {
          position: "top-right",
        });
      })
      .catch((err) => {
        console.error("Failed to add item to cart:", err);
        // Show error toast
        toast.error("Failed to add item to cart", {
          position: "top-right",
        });
      });
  };
  return (
    <div className="all-container">
      <div className="addItem">
        {/* Display the fetched menu items */}
        {menuItems.map((menuItem, index) => (
          <div key={index} className="menuItem">
            <div
              style={{ backgroundImage: `url(${menuItem.imageUrl})` }}
              className="menuImage"
            ></div>
            <div className="menuInfo">
              <p className="font-bold">{menuItem.name}</p>
              {/* <p>{menuItem.description}</p> */}
              <p>₱{menuItem.price}</p>
            </div>
            <div className="buttonContainer">
              <button
                className="addToCartButton"
                onClick={() => addToCart(menuItem._id)}
              >
                Add to Cart
              </button>
              <button
                className="buyButton"
                onClick={() => addToCart(menuItem._id)}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Shop;
