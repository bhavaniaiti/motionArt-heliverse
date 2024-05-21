import "./App.css";
import { Row, Col, Button } from "antd";
import logo from "./Logo.png";
import rating from "./rating.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import motionart from "./motionart.png";
import magicstick from "./magicstick.png";
import section from "./section.png";
import page from "./page.png";
import website from "./websites.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
// import App from "./animation"

function App() {

  const handleBuyNowClick = () => {
    window.location.href = "https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891";
  };

  const handlePurchaseNowClick = () => {
    window.location.href = "https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891";
  };


  return (
    <div className="main-container">
      <Row className="header">
        <Col className="headerLogo">
          <img className="logo" src={logo} alt="logo" />
          <div className="companyName">
            envato<span style={{ color: "#90D26D" }}>market</span>
          </div>
        </Col>
        <Col>
          <Button className="buyNow" onClick={handleBuyNowClick}>Buy now</Button>
        </Col>
      </Row>
      <div>
        <Row className="motionArtEffect-container">
          <Col>
            <div className="motionArtEffect">
              <img src={motionart} />
            </div>
          </Col>
          <Col>
            <Button className="purchaseNow">Purchase Now</Button>
          </Col>
        </Row>
        <div className="frontpage">
          <div className="transform">
            <div className="text1">Transform Your Website</div>
            <div className="text2">With Motion Art Effect</div>
          </div>
          <div className="attract">
            <div className="text3">
              <h1>
                Attract Your Visitors Attention With Colorful
                <span> Motion Art Effect</span>
              </h1>
            </div>
            <div
              className="text2"
              style={{ width: "100%", color: "#EEE5FFBD" }}
            >
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website.
            </div>
          </div>
        </div>
      </div>

      <div className="rating">
        Trusted by thousands of users around the world
      </div>
      <Row className="reviewContainer" gutter={[50, 70]}>
        <Col>
          <Row className="logoimg">
            <img src={logo} />
            <img className="rating_img" src={rating} />
          </Row>
        </Col>
        <Col>
          <Row className="logoimg">
            <img src={logo2} />
            <img className="rating_img" src={rating} />
          </Row>
        </Col>
        <Col>
          <Row className="logoimg">
            <img src={logo3} />
            <img className="rating_img" src={rating} />
          </Row>
        </Col>
      </Row>

      <Row justify={"space-around"}>
        <Col xl={10}>
          <div className="purchaseEnvatoContainer">
            <div className="purchaseEnvato">
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </div>
            <div className="purchaseEnvatoPara">
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse your website with visually stunning
              motion art elements.
            </div>
            <Button className="envatoButton" onClick={handlePurchaseNowClick}>Purchase From Envato</Button>
          </div>
        </Col>
        <Col>
          <div className="magicstick">
            <img src={magicstick} />
          </div>
        </Col>
      </Row>
      <div>
        <div className="applySection">
          Apply On Any Section Or Enable For Whole Page
        </div>
        <Row className="sectionPage">
          <Col  xs={24} lg={10} md={10} sm={10} xl={10}>
            <div className="sectioncContainer">
              <div className="sectionPageHeading" style={{ color: "white" }}>
                Apply On Section
              </div>
              <div className="sectionPageContent" style={{ color: "white"}}>
                Apply on section is a game-changer, offering an unparalleled way
                to manage applications directly from your website.
              </div>
              <div className="sectionPageImg">
                <img src={section} />
              </div>
            </div>
          </Col>
          <Col xs={24} lg={10}  md={10} sm={10} xl={10}>
            <div className="sectioncContainer" style={{ marginTop: "15%" }}>
              <div className="sectionPageHeading" style={{ color: "white" }}>
                Apply On Page
              </div>
              <div className="sectionPageContent" style={{ color: "white" }}>
                Take your website to new heights with Motion Art for Elementor.
                Embrace the power of motion and animation.
              </div>
              <div className="sectionPageImg">
                <img src={page} />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="supportContainer" style={{}}>
        <div className="supportByHeading">
          Supported by All Popular Browsers
        </div>
        <div className="supportedByContent">
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </div>
        <Row justify={"space-evenly"}>
          <Col className="websiteImg">
            <img src={website} />
          </Col>
        </Row>
      </div>

      <div className="applySection" style={{ margin: "2% 0" }}>
        An All-Round Plugin With Powerful Features
      </div>
      <Row justify={"space-evenly"}>
        <div className="pluginsPara">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience
        </div>
      </Row>
      <Row justify={"space-evenly"} gutter={[0, 30]} style={{ padding: "6%" }}>
        <Col lg={7} sm={16} className="pluginsFeatures">
          <div>
            <img src={img1} />
          </div>
          <div className="sectionPageHeading">Light Weight</div>
          <div className="sectionPageContent">
            Motion Art for Elementor is designed to be lightweight.
          </div>
        </Col>
        <Col lg={7} sm={16} className="pluginsFeatures">
          <div>
            <img src={img2} />
          </div>
          <div className="sectionPageHeading">100% Responsive</div>
          <div className="sectionPageContent">
            Create a consistent visual experience across all devices.
          </div>
        </Col>
        <Col lg={7} sm={16} className="pluginsFeatures">
          <div>
            <img src={img3} />
          </div>
          <div className="sectionPageHeading">User Friendly Interface</div>
          <div className="sectionPageContent">
            Ensure a smooth experience for both applicants and administrators.
          </div>
        </Col>
      </Row>

      <Row className="fotterRow">
        <Col>© 2023 Copywrite. All rights reserved by QodeMatrix</Col>
        <Col xs={24} sm={8} lg={5}>
          <Row gutter={20}>
            <Col>Documentation </Col>
            <Col>Support</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
