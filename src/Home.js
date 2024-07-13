import homepage from "./images/homepage.jpg";
import leanstartupimg from "./images/leanstartup.jpg";
import shoesimg from "./images/shoes.jpg";
import watchimg from "./images/watch.jpg";
import dumbellimg from "./images/dumbell.webp";
import waterpurifierimg from "./images/waterpurifier.jpg";
import laptopimg from "./images/laptop.jpg";
import "./Home.css";
import Product from "./Product";
export default function Home() {
  return (
    <div className="home">
      <img src={homepage} className="home__image" />
      <div className="home--row">
        <Product
          id="123456"
          title={
            "The Lean Startup : The Million Copy Bestseller Driving Entrepreneurs to Success"
          }
          rating={5}
          price={444}
          img={leanstartupimg}
        />
        <Product
          id="123457"
          title={
            "Noise Twist Round dial Smart Watch with Bluetooth Calling, 1.38"
          }
          rating={5}
          price={444}
          img={watchimg}
        />
        <Product
          id="123458"
          title={"SPARX mens Sd0323g Sneaker"}
          rating={4}
          price={674}
          img={shoesimg}
        />
      </div>
      <div className="home--row">
        <Product
          id="123459"
          title={"Protoner Pair of 5kg Each PVC Dumbbells Sets"}
          rating={3}
          price={474}
          img={dumbellimg}
        />
        <Product
          id="123460"
          title={
            "Arroser Pure Ro water Purifier Copper + Zinc + Alkaline B12 RO + UV + TDS Controller Best For home & office working Up 3000 Tds/PPM"
          }
          rating={5}
          price={4449}
          img={waterpurifierimg}
        />
      </div>{" "}
      <div className="home--row">
        <Product
          id="123461"
          title={
            "HP Laptop 15s, 12th Gen Intel Core i3, 15.6-inch (39.6 cm), 8GB DDR4, 512GB SSD, Thin & light, Dual speakers (Win 11, MSO 2021, Silver, 1.69 kg), fq5007TU / FQ5327TU"
          }
          rating={5}
          price={44444}
          img={laptopimg}
        />
      </div>
    </div>
  );
}
