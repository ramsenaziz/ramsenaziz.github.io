import React from "react";
import Particles from "react-particles-js";
import particlesJSON from "../assets/json/particles.json";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >
    <Particles params={particlesJSON} height={700} />
  </div>
);
