import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import GlassExample from "./GlassExample";
import defaultImg from './assets/default-state.jpg';
import revealImg from './assets/reveal-state.jpg';


// require deprecated with react 17, use import statements instead
// const defaultImg = require("./assets/default-state.jpg");
// const revealImg = require("../assets/reveal-state.jpg")
const defaultUrlImage = 'https://cisco-dev2-dss.igxdev.com/DITA/content/zzSandbox/react-build-test/magnifying-glass-cursor--react/static/media/proofs-red.0317a6b1775e9652308b.jpg';
const revUrlImage = 'https://cisco-dev2-dss.igxdev.com/DITA/content/zzSandbox/react-build-test/magnifying-glass-cursor--react/static/media/proofs-green.b67776662db52d47c8d7.jpg';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Fragment>
      <div style={{ padding: "2rem", maxWidth: "832px", margin: "0 auto", textAlign: "center" }} className="app">
        <GlassExample image={defaultImg} largeImage={revealImg}  />
      </div>
    </React.Fragment>
  </React.StrictMode>,
)
