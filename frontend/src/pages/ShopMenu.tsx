import { Link } from "react-router-dom";
import "../styles/shop.css";
import { Products } from "../fake-datas/index";

function Shop() {
  return (
    <div className=" w-[100vw]">
      <div className="grid-container">
        {Products.map((product) => (
          <div key={product.id} className="grid-item   h-[60vh]">
            <Link to={`/description/${product.id}`}>
              <div
                className="shop-container items-center justify-center flex h-[85%]"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundPosition: "center",
                }}
              ></div>
            </Link>
            <section className="flex justify-between product-info h-[15%] items-center">
              <div className="header flex flex-col gap-[5px] pl-[10px] max-w-[15vw]">
                <header className="text-[1rem] overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {product.title}
                </header>
                <h1 className="text-[1] min-text-[1vw]">₱{product.price}</h1>
              </div>
              {/* <div className='flex gap-[5px] mr-[10px] items-center h-full'>
                                {
                                    Array.isArray(cartItem) && cartItem.some(({ id }) => id === product.id) ? (
                                        <button className='remove-button border border-black w-[130px] h-[75%] text-center' onClick={() => removeFromCart(product.id)}>Remove to cart</button>
                                    ) : (
                                        <button className='button border border-black w-[130px] h-[75%] text-center' onClick={() => addToCart(product)}>Add to cart</button>
                                    )
                                }
                                <button className='button border border-black w-[130px] h-[75%] text-center'>Buy</button>
                            </div> */}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
