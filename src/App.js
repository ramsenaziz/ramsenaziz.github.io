import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ParticlesContainer from "./components/ParticlesContainer";
import CvEng from "./components/CvEng";
import CvSwe from "./components/CvSwe";
import "./App.css";

const App = () => {
  const [translate, setTranslate] = useState(true);

  return (
    <div id="particle-js" className="container gradient">
      <ParticlesContainer />
      <span className="translate" onClick={() => setTranslate(!translate)}>
        {translate ? "Svenska" : "English"}
      </span>
      <Grid
        className="container"
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {translate ? <CvEng /> : <CvSwe />}
      </Grid>
    </div>
  );
};

export default App;
