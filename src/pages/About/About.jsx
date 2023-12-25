import { Image } from "cloudinary-react";
import cloudinaryConfig from "../../config/cloudinaryConfig";
import Map from "../../components/Map/Map";
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";

const About = () => {
  return (
    <>
      <Breadcrumb />
      <section className="container about">
        <div className="about__main">
          <h1 className="about__title">
            Welcome to Innovation Oasis: Your Ultimate Destination for Electronics
            and Endless Possibilities!
          </h1>
          <Image
            cloudName={cloudinaryConfig.cloudName}
            publicId="https://res.cloudinary.com/dfinki0p4/image/upload/v1689280219/about/istockphoto03_axxxei.jpg"
            className="about__img"
            alt=""
          />
        </div>
        <ul>
          <li className="about__elements">
            <div className="about__item">
              <Image
                cloudName={cloudinaryConfig.cloudName}
                publicId="https://res.cloudinary.com/dfinki0p4/image/upload/v1689280218/about/Icon04_le1oir.png"
                className="about__icons"
                alt=""
              />
              <h3>
                Who we are: Unleashing Innovation with Passion, Quality, and Speed!
              </h3>
            </div>
            <p>
              Welcome to Innovation Oasis, where innovation is our driving force!
              We are a young and dynamic team committed to delivering the highest
              quality products and services in record time. With a passion for
              excellence and a dedication to customer satisfaction, we are here to
              redefine your expectations.
            </p>
            <p>
              At Innovation Oasis, we believe in the power of efficient and timely solutions. Our team thrives on challenges and embraces the fast-paced nature of the industry. We constantly push the boundaries to provide you with cutting-edge electronics, ensuring that you stay ahead of the curve.
            </p>
            <p>
              But it's not just about the products; it's about the experience. We take pride in our exceptional customer service, going above and beyond to meet your needs. From the moment you step into our store or visit our website, you will be greeted by a friendly and knowledgeable team ready to assist you.
            </p>
          </li>
          <li>
            <div className="about__item">
              <Image
                cloudName={cloudinaryConfig.cloudName}
                publicId="https://res.cloudinary.com/dfinki0p4/image/upload/v1689280219/about/Icon05_uakc0d.png"
                className="about__icons"
                alt=""
                width={80}
                height={70} />
              <h3>What we do: Making Quality Affordable - Redefining the Way You Shop</h3>
            </div>
            <p>
              At Innovation Oasis, our mission is clear: to provide you with the opportunity to purchase essential products at more affordable prices without compromising on quality. We believe that everyone should have access to top-notch electronics without breaking the bank.
            </p>
            <p>
              In pursuit of this goal, our team has made a conscious decision to prioritize customer value over excessive profit margins. We understand that building trust and fostering long-term relationships with our customers is far more valuable than maximizing our earnings. We have reduced our own profit margins to offer you competitive prices, demonstrating our commitment to your satisfaction and trust.
            </p>
            <p>
              Discover the difference today and become a part of our growing community of satisfied customers who appreciate both quality and affordability. Trust us to bring you exceptional products at accessible prices, as we continue to innovate and serve you with passion and dedication.
            </p>
          </li>
          <li>
            <div className="about__item">
              <Image
                cloudName={cloudinaryConfig.cloudName}
                publicId="https://res.cloudinary.com/dfinki0p4/image/upload/v1689280219/about/Icon06_ogqm7o.png"
                className="about__icons"
                alt=""
              />
              <h3 className="about__item-subtitle">Our Core Values</h3>
            </div>
            <ul className="about__list">
              <li className="about__list-items">
                <Image
                  cloudName={cloudinaryConfig.cloudName}
                  publicId="https://res.cloudinary.com/dfinki0p4/image/upload/v1689280218/about/better-together_urc7gg.png"
                  className="about__list-img"
                  alt=""
                />
                <div className="about__list-item">
                  <h3 className="about__list-title">Customer first</h3>
                  <span className="about__list-text">Our priority is to provide a flawless e-commerce experience to our customers.</span>
                </div>
              </li>
              <li className="about__list-items">
                <Image
                  cloudName={cloudinaryConfig.cloudName}
                  publicId="https://res.cloudinary.com/dfinki0p4/image/upload/v1689280219/about/results-matter_vtjmeg.png"
                  className="about__list-img"
                  alt=""
                />
                <div className="about__list-item">
                  <h3 className="about__list-title">Results matter</h3>
                  <span className="about__list-text">We are solution-oriented and take ownership of our work. We value results over opinions.</span>
                </div>
              </li>
              <li className="about__list-items">
                <Image
                  cloudName={cloudinaryConfig.cloudName}
                  publicId="https://res.cloudinary.com/dfinki0p4/image/upload/v1689280219/about/trust-in-data_bppc7k.png"
                  className="about__list-img"
                  alt=""
                />
                <div className="about__list-item">
                  <h3 className="about__list-title">Stronger as a team</h3>
                  <span className="about__list-text">We empower and value each other, and strive for our shared dream together as a team.</span>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div className="about__item">
              <Image
                cloudName={cloudinaryConfig.cloudName}
                publicId="https://res.cloudinary.com/dfinki0p4/image/upload/v1689280218/about/Icon07_swn6xc.png"
                className="about__icons"
                alt=""
              />
              <h3 className="about__item-subtitle">Stay Connected with Us</h3>
            </div>
            <div className="about__item-contact">
              <a href="tel:+380623656899">Tel: +380 62 365 68 99</a>
              <a href="mailto:info@innoasis.com">Email: info@innoasis.com</a>
              <span>Address: ul.Bolsunovska, 13-15</span>
            </div>
          </li>
        </ul>
        <div className="about__item">
          <Image
            cloudName={cloudinaryConfig.cloudName}
            publicId="https://res.cloudinary.com/dfinki0p4/image/upload/v1689280219/about/location01_saiy0u.png"
            className="about__icons"
            alt=""
          />
          <h3 className="about__item-subtitle">Find Us on the Map!</h3>
        </div>
        <Map />
      </section>
    </>
  );
};


export default About;
