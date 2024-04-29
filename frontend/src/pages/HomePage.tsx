import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/home.css";
import { ArrowRight, ArrowLeft } from "lucide-react";
import driedFlower from "../assets/driedFlower.jfif";
import livePlant from "../assets/livePlant.jfif";
import aromaCandles from "../assets/aromaCandles.jfif";
import fresheners from "../assets/fresheners.jfif";
import maki from "../assets/maki.jpg";
import puds from "../assets/puds.jpg";
const HomePage = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleScreenSizeChange = () => {
    setScreenSize(window.innerWidth);
  };
  useEffect(() => {
    handleScreenSizeChange();
    window.addEventListener("resize", handleScreenSizeChange);
    return () => window.removeEventListener("resize", handleScreenSizeChange);
  }, []);

  const products = [
    {
      to: "/filter/fresh-flower",
      title: "Maki",
      imgSrc: maki,
      icon: <ArrowLeft className="m-[auto]" />,
    },
    {
      to: "/filter/dried-flower",
      title: "Dried Flowers",
      imgSrc: driedFlower,
      icon: <ArrowRight className="m-[auto]" />,
    },
    {
      to: "/filter/live-plant",
      title: "Live Plants",
      imgSrc: livePlant,
      icon: <ArrowLeft className="m-[auto]" />,
    },
    {
      to: "/filter/aroma-candle",
      title: "Aroma Candles",
      imgSrc: aromaCandles,
      icon: <ArrowRight className="m-[auto]" />,
    },
    {
      to: "/filter/freshener",
      title: "Fresheners",
      imgSrc: fresheners,
      icon: <ArrowLeft className="m-[auto]" />,
    },
  ];

  return (
    <div className="border-black">
      <div className="hidden nine:flex">
        <div
          className="flex border-b border-black"
          style={{
            alignItems: "flex-start",
          }}
        >
          <StickyBox
            offsetTop={0}
            offsetBottom={50}
            className="flex-1 flex-start z-[-15] "
          >
            <div id="buoquet-buffet">
              <div className="flex-1">
                <header className="sample">
                  <section
                    style={{ lineHeight: "100%", paddingBottom: "20px" }}
                  >
                    Oxim's
                  </section>
                  <p
                    className="italic font-light text-gray-600 border-b border-black pb-[40px] text-justify"
                    style={{ fontSize: "clamp(0.8rem, 1.2vw, 1.5rem)" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    ipsum:
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    laboriosam architecto!
                  </p>
                </header>
                <div className="flex ml-[70px] pb-[50px]">
                  <img
                    src={puds}
                    alt="flower"
                    className="border-r border-black pr-[20px]"
                    style={{
                      height: "clamp(15vh, 30vh, 40vh)",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex align-end justify-end  mr-[70px] ml-[20px]">
                    <p
                      className="self-end text-justify"
                      style={{ fontSize: "clamp(0.8rem, 1.2vw, 1.5rem)" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione quos alias inventore modi nesciunt, nihil vel?
                      Placeat quos odit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StickyBox>
          <div className="flex-1 border-l border-black">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.to}
                className={`flex w-full  ${
                  index !== products.length - 1
                    ? "border-b-[0.5px] border-black"
                    : ""
                } ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
                onMouseOver={(e) =>
                  (e.currentTarget.getElementsByTagName(
                    "img"
                  )[0].style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.getElementsByTagName(
                    "img"
                  )[0].style.transform = "scale(1)")
                }
              >
                <div className="flex-1 flex flex-col m-auto">
                  <header
                    className="h-[100%] w-[100%] text-center justify-center flex flex-col gap-[50px] items-center"
                    style={{
                      fontSize: "clamp(1rem, 3rem, 4rem)",
                    }}
                  >
                    {product.title} <br></br>
                    <section
                      style={{
                        fontSize: "clamp(1rem, 1.3rem, 4rem)",
                      }}
                    >
                      Shop now {product.icon}
                    </section>
                  </header>
                </div>
                <section
                  className={`flex-1 w-[50%] overflow-hidden ${
                    index % 2 === 0 ? "border-l-[0.5px]" : "border-r-[0.5px]"
                  }   border-black`}
                >
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="transform transition-all duration-300 ease"
                  />
                </section>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden nine:flex border-b border-black">
        <StickyBox
          className="flex-start flex-1  h-[300px]"
          offsetTop={50}
          offsetBottom={100}
        >
          <header className="sample">About us</header>
        </StickyBox>
        <div className="flex flex-1 border-l border-black">
          <div className="pt-[70px] pl-[70px] pr-[30px] flex flex-col ">
            <header className="pb-[20px] text-[3vw]">Oxim's</header>
            <p className="text-gray-600 justify-evenly text-[1.2vw] text-justify pr-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              voluptates numquam iusto vel, saepe quisquam ab sint a doloribus
              dicta eaque officiis laborum modi exercitationem dolor aliquam
              perspiciatis quaerat earum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Porro voluptates numquam iusto vel, saepe
              quisquam ab sint a doloribus dicta eaque officiis laborum modi
              exercitationem dolor aliquam perspiciatis quaerat earum. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Porro
              voluptates numquam iusto vel, saepe quisquam ab sint a doloribus
              dicta eaque officiis laborum modi exercitationem dolor aliquam
              perspiciatis quaerat earum.
            </p>

            <Link
              to="/about"
              className="p-[15px] border border-black w-[15vw] mt-[70px] mb-[100px] text-center"
              style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.7rem)" }}
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden nine:flex border-b border-black">
        <StickyBox
          className="flex-start flex-1  h-[300px]"
          offsetTop={50}
          offsetBottom={100}
        >
          <header className="pt-[70px] pl-[70px] font-bold text-[5vw]">
            Why choose us?
          </header>
        </StickyBox>

        <div className="flex flex-col flex-1 border-l border-black">
          <div className="pt-[70px] pl-[70px] pr-[30px] flex flex-col ">
            <header className="pb-[20px] text-[3vw]">lorem ipsum</header>
            <p className="text-gray-600  text-justify justify-evenly pb-[70px] text-[1.2vw]  pr-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              recusandae veritatis neque ratione, debitis ut provident aliquam
              illum ipsa voluptas aperiam facilis eaque quos incidunt corrupti,
              similique beatae, rem ullam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Id recusandae veritatis neque
              ratione, debitis ut provident aliquam illum ipsa voluptas aperiam
              facilis eaque quos incidunt corrupti, similique beatae, rem ullam.
            </p>
          </div>
          <div className="pt-[70px] pl-[70px] pr-[30px] flex flex-col border-t border-black">
            <header className="pb-[20px] text-[3vw]">Lorem ipsum</header>
            <p className="text-gray-600 text-justify justify-evenly pb-[70px] text-[1.2vw]  pr-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              recusandae veritatis neque ratione, debitis ut provident aliquam
              illum ipsa voluptas aperiam facilis eaque quos incidunt corrupti,
              similique beatae, rem ullam.
            </p>
          </div>
          <div className="pt-[70px] pl-[70px] pr-[30px] flex flex-col border-t border-black">
            <header className="pb-[20px] text-[3vw]">
              Subscription by your needs
            </header>
            <p className="text-gray-600 justify-evenly pb-[70px] text-[1.2vw] text-justify pr-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              recusandae veritatis neque ratione, debitis ut provident aliquam
              illum ipsa voluptas aperiam facilis eaque quos incidunt corrupti,
              similique beatae, rem ullam.
            </p>
          </div>
        </div>
      </div>

      {/* ----------- mobile md, nine, ------------ */}

      <div className="mobile-container">
        {screenSize < 768 ? (
          // dont know why theres a blank div classname
          <div className=" ">
            <div className="md:hidden">
              <div className="flex flex-col border-b border-black md:hidden ">
                <div>
                  <div className="flex flex-col">
                    <header
                      className="mt-[50px] ml-[30px] mb-[20px] mr-[30px] font-bold text-clamp"
                      style={{
                        fontSize: "clamp(50px, 9vw, 100px)",
                      }}
                    >
                      <section
                        style={{ lineHeight: "100%", paddingBottom: "20px" }}
                      >
                        Oxim's
                      </section>
                      <p
                        className="italic font-light text-gray-600 border-b border-black pb-[40px] text-justify"
                        style={{ fontSize: "clamp(.7rem, 2vw, 3rem)" }}
                      >
                        Explore Exquisite Bouquets and Thoughtful Gifts for
                        Every Event:
                        <br />
                        Share Happiness through Our Convenient Online Flower
                        Delivery Solution
                      </p>
                    </header>
                    <div className="flex ml-[30px] pb-[50px]">
                      <img
                        src={puds}
                        alt="flower"
                        className=""
                        style={{ width: "40%", objectFit: "cover" }}
                      />
                      <div className="flex align-end justify-end  mr-[70px] ml-[20px]">
                        <p
                          className="self-end text-justify"
                          style={{ fontSize: "clamp(.7rem, 2vw, 5rem)" }}
                        >
                          Experience the joy of giving with our modern floral
                          studio. Order online and send fresh flowers, plants
                          and gifts today.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    {products.map((product, index) => (
                      <Link
                        key={index}
                        to={product.to}
                        className={`flex w-full  border-black transform transition-all duration-300 ease ${
                          index % 2 === 0 ? "" : "flex-row-reverse"
                        } ${index === products.length - 1 ? "" : "border-t"}`}
                        onMouseOver={(e) => {
                          e.currentTarget.getElementsByTagName(
                            "img"
                          )[0].style.transform = "scale(1.1)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.getElementsByTagName(
                            "img"
                          )[0].style.transform = "scale(1)";
                        }}
                      >
                        <div className="flex-1 flex flex-col m-auto">
                          <header
                            className="categories"
                            style={{
                              fontSize: "7vw",
                            }}
                          >
                            {product.title} <br />
                            <div
                              className="category-arrow"
                              style={{
                                fontSize: "5vw",
                              }}
                            >
                              Shop now {product.icon}
                            </div>
                          </header>
                        </div>
                        <div
                          className={`flex-1 w-[50%] overflow-hidden ${
                            index % 2 === 0
                              ? "border-l border-black"
                              : "border-r border-black"
                          }`}
                        >
                          <img
                            src={product.imgSrc}
                            alt={product.title}
                            className="transform transition-all duration-300 ease"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="nine:flex border-b border-black">
              <div className="flex flex-1 flex-start border-b border-black">
                <header className="m-auto font-bold pt-[50px] pb-[50px] text-[12vw]">
                  About us
                </header>
              </div>
              <div className="flex flex-1 mt-[50px]">
                <div className="pl-[30px]  flex flex-col ">
                  <header className="pb-[20px] text-5xl">Oxim's</header>
                  <p className="text-gray-600 justify-evenly pl-[20px] text-[2.3vw] pr-[20px] text-justify">
                    We are a contemporary local flower shop that focuses on
                    crafting and delivering one-of-a-kind floral arrangements.
                    Our team of skilled florists meticulously curates each
                    bouquet, sourcing fresh flowers directly from partnered
                    farms. This ensures that our collections always feature the
                    finest blooms, arranged in exquisite designs. In addition to
                    our selection of fresh bouquets and dried arrangements, we
                    offer an assortment of house plants and premium scented
                    candles, ideal for setting a delightful ambiance. Brighten
                    someone's day by effortlessly sending flowers, plants, and
                    thoughtful gifts, with the convenience of same or next-day
                    delivery. Our streamlined online ordering process makes
                    sending flowers a hassle-free experience.
                  </p>

                  <Link
                    to="/about"
                    className="p-[15px] border border-black w-[150px] mt-[70px] mb-[100px] text-center"
                    style={{ fontSize: "clamp(0.8rem, 1.6rem 1.7rem)" }}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="nine:flex border-b border-black">
              <div className="flex-start flex-1 border-b border-black">
                <header className="text-center font-bold pt-[50px] pb-[50px] text-[12vw]">
                  Why choose us?
                </header>
              </div>

              <div className="flex flex-col flex-1">
                <div className="pl-[30px] flex flex-col  mt-[50px]">
                  <header className="pb-[20px] text-[6vw]">
                    Stylish buoquets by professional
                  </header>
                  <p className="text-gray-600 text-justify justify-evenly pb-[70px] pl-[20px] pr-[20px] text-[2.3vw]">
                    In our flower shop, our skilled florists create
                    sophisticated and fashionable bouquets using only the
                    freshest and finest materials accessible. We keep ourselves
                    informed about the newest floral design fashions and provide
                    exclusive arrangements that are certain to make an impact.
                    Allow us to bring some joy to your day with our exquisite
                    bouquets and quick delivery service.
                  </p>
                </div>
                <div className="pt-[70px] pl-[30px] flex flex-col border-t border-black">
                  <header className="pb-[20px] text-[6vw]">
                    On-time delivery
                  </header>
                  <p className="text-gray-600 text-justify justify-evenly pb-[70px] pl-[20px] text-[2.3vw] pr-[20px]">
                    Never miss a moment with our on-time flower delivery
                    service. Our couriers will deliver your bouquet personally,
                    without boxes, to ensure it arrives in perfect condition.
                    Trust us to deliver your thoughtful gift reliably.
                  </p>
                </div>
                <div className="pt-[70px] pl-[30px] flex flex-col border-t border-black">
                  <header className="pb-[20px] text-[6vw]">
                    Subscription by your needs
                  </header>
                  <p className="text-gray-600 text-justify justify-evenly pb-[70px] pl-[20px] text-[2.3vw] pr-[20px]">
                    With our subscription service tailored to your specific
                    needs, you can enjoy the convenience of having beautiful
                    bouquets delivered straight to your door at regular
                    intervals. Our flexible service is perfect for busy
                    individuals or those who want to ensure they always have
                    fresh flowers on hand. You'll save time and money with this
                    hassle-free solution to your floral needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="nine:hidden">
            <div className=" flex flex-col border-b border-black nine:hidden ">
              <div>
                <div className="flex flex-col">
                  <header
                    className="mt-[70px] ml-[70px] mb-[20px] mr-[70px] font-bold text-clamp"
                    style={{
                      fontSize: "clamp(50px, 9vw, 100px)",
                    }}
                  >
                    <section
                      style={{ lineHeight: "100%", paddingBottom: "20px" }}
                    >
                      Oxim's
                    </section>
                    <p
                      className="italic font-light text-gray-600 border-b border-black pb-[40px] text-justify"
                      style={{ fontSize: "clamp(1rem, 2vw, 3rem)" }}
                    >
                      Explore Exquisite Bouquets and Thoughtful Gifts for Every
                      Event:
                      <br />
                      Share Happiness through Our Convenient Online Flower
                      Delivery Solution
                    </p>
                  </header>
                  <div className="flex ml-[70px] pb-[50px]">
                    <img
                      src={puds}
                      alt="flower"
                      className=""
                      style={{ width: "40%", objectFit: "cover" }}
                    />
                    <div className="flex align-end justify-end  mr-[70px] ml-[20px]">
                      <p
                        className="self-end text-justify"
                        style={{ fontSize: "clamp(1rem, 2vw, 5rem)" }}
                      >
                        Experience the joy of giving with our modern floral
                        studio. Order online and send fresh flowers, plants and
                        gifts today.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 ">
                  {products.map((product, index) => (
                    <Link
                      key={index}
                      to={product.to}
                      className={`flex w-full   border-black transform transition-all duration-300 ease ${
                        index % 2 === 0 ? "" : "flex-row-reverse"
                      } ${index === products.length - 1 ? "" : "border-t"}`}
                      onMouseOver={(e) => {
                        e.currentTarget.getElementsByTagName(
                          "img"
                        )[0].style.transform = "scale(1.1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.getElementsByTagName(
                          "img"
                        )[0].style.transform = "scale(1)";
                      }}
                    >
                      <div className="flex-1 flex flex-col m-auto">
                        <header
                          className="categories"
                          style={{
                            fontSize: "7vw",
                          }}
                        >
                          {product.title} <br />
                          <div
                            className="category-arrow"
                            style={{
                              fontSize: "5vw",
                            }}
                          >
                            Shop now {product.icon}
                          </div>
                        </header>
                      </div>
                      <div
                        className={`flex-1 w-[50%] overflow-hidden ${
                          index % 2 === 0
                            ? "border-l border-black"
                            : "border-r border-black"
                        }`}
                      >
                        <img
                          src={product.imgSrc}
                          alt={product.title}
                          className="transform transition-all duration-300 ease"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="nine:flex border-b border-black">
              <div className="flex flex-1 border-b border-black">
                <header className="m-auto text-center flex font-bold pt-[50px] pb-[50px] text-[12vw]">
                  About Us
                </header>
              </div>

              <div className="flex flex-1 mt-[50px]">
                <div className="pl-[30px] flex flex-col pr-[30px]">
                  <header
                    className="pb-[20px]"
                    style={{ fontSize: "clamp(2rem, 3rem, 150rem)" }}
                  >
                    Oxim's
                  </header>
                  <p
                    className="text-gray-600 justify-evenly text-justify pr-[20px]"
                    style={{ fontSize: "clamp(0.6rem, 1rem, 2rem)" }}
                  >
                    We are a contemporary local flower shop that focuses on
                    crafting and delivering one-of-a-kind floral arrangements.
                    Our team of skilled florists meticulously curates each
                    bouquet, sourcing fresh flowers directly from partnered
                    farms. This ensures that our collections always feature the
                    finest blooms, arranged in exquisite designs. In addition to
                    our selection of fresh bouquets and dried arrangements, we
                    offer an assortment of house plants and premium scented
                    candles, ideal for setting a delightful ambiance. Brighten
                    someone's day by effortlessly sending flowers, plants, and
                    thoughtful gifts, with the convenience of same or next-day
                    delivery. Our streamlined online ordering process makes
                    sending flowers a hassle-free experience.
                  </p>

                  <Link
                    to="/about"
                    className="p-[15px] border border-black w-[150px] mt-[70px] mb-[100px] text-center"
                    style={{ fontSize: "clamp(0.8rem, 1.6rem 1.7rem)" }}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="nine:flex border-b border-black">
              <div className="flex-start flex-1 border-b border-black">
                <header className="text-center font-bold pt-[50px] pb-[50px] text-[12vw]">
                  Why choose us?
                </header>
              </div>

              <div className="flex flex-col flex-1">
                <div className="pl-[30px] flex flex-col pr-[30px] mt-[50px] ">
                  <header className="pb-[20px] text-[6vw]">
                    Stylish buoquets by professional
                  </header>
                  <p className="text-gray-600 text-justify justify-evenly pb-[70px] pl-[20px] pr-[20px] text-[2.3vw]">
                    In our flower shop, our skilled florists create
                    sophisticated and fashionable bouquets using only the
                    freshest and finest materials accessible. We keep ourselves
                    informed about the newest floral design fashions and provide
                    exclusive arrangements that are certain to make an impact.
                    Allow us to bring some joy to your day with our exquisite
                    bouquets and quick delivery service.
                  </p>
                </div>
                <div className="pt-[70px] pl-[30px] pr-[30px] flex flex-col border-t border-black">
                  <header className="pb-[20px] text-[6vw]">
                    On-time delivery
                  </header>
                  <p className="text-gray-600 text-justify justify-evenly pb-[70px] pl-[20px] text-[2.3vw] pr-[20px]">
                    Never miss a moment with our on-time flower delivery
                    service. Our couriers will deliver your bouquet personally,
                    without boxes, to ensure it arrives in perfect condition.
                    Trust us to deliver your thoughtful gift reliably.
                  </p>
                </div>
                <div className="pt-[70px] pl-[30px] pr-[30px] flex flex-col border-t border-black">
                  <header className="pb-[20px] text-[6vw]">
                    Subscription by your needs
                  </header>
                  <p className="text-gray-600 text-justify justify-evenly pb-[70px] pl-[20px] text-[2.3vw] pr-[20px]">
                    With our subscription service tailored to your specific
                    needs, you can enjoy the convenience of having beautiful
                    bouquets delivered straight to your door at regular
                    intervals. Our flexible service is perfect for busy
                    individuals or those who want to ensure they always have
                    fresh flowers on hand. You'll save time and money with this
                    hassle-free solution to your floral needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
