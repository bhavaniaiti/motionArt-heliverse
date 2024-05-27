import React from "react";
import "./App.css"; // Import your CSS file
import App from "./App";

class Animation extends React.Component {
  handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { offsetTop, offsetLeft } = this.body;

    for (let i = 0; i < 10; i++) {
      const spark = document.createElement("i");
      spark.style.top = clientY - offsetTop + "px";
      spark.style.left = clientX - offsetLeft + "px";
      const randomX = ((Math.random() - 0.5) * window.innerWidth) / 1.5;
      const randomY = ((Math.random() - 0.5) * window.innerWidth) / 1.5;

      spark.style.setProperty("--randomx", randomX + "px");
      spark.style.setProperty("--randomY", randomY + "px");

      const randomSize = Math.random() * 30 + 2;
      // spark.style.width = randomSize + "px";
      // spark.style.height = randomSize + "px";
      // const duration = Math.random() * 2 + 0.5;
      spark.style.animation = `animate ${duration}s ease-out forwards`;

      const colors = ["#f87516", "#5e11ff", "#f4034c", "#03a9f4"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      spark.style.background = randomColor;

      this.body.appendChild(spark);

      setTimeout(function () {
        spark.remove();
      }, 2000);
    }
  };

  componentDidMount() {
    this.body = document.querySelector("body");
    setTimeout(() => {
      this.handleMouseMove({
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2,
      });
    }); // Trigger animation after 1 second delay
    this.body.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    this.body.removeEventListener("mousemove", this.handleMouseMove);
  }

  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

export default Animation;
