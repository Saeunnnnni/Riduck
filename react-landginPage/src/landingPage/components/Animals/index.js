import React, { useEffect } from "react";
import lottie from "lottie-web";
import AnimalsStyles from "./lottie.module.css";

const Animals = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#tiger"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/Tiger.json"),
    });
    lottie.loadAnimation({
      container: document.querySelector("#lion"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/lion.json"),
    });

    lottie.loadAnimation({
      container: document.querySelector("#elephant"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/elephant.json"),
    });
    lottie.loadAnimation({
      container: document.querySelector("#deer"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/deer.json"),
    });
    lottie.loadAnimation({
      container: document.querySelector("#dog"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/dog.json"),
    });
    lottie.loadAnimation({
      container: document.querySelector("#horse"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/horse.json"),
    });
    lottie.loadAnimation({
      container: document.querySelector("#boar"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/boar.json"),
    });
    lottie.loadAnimation({
      container: document.querySelector("#turtle"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/turtle.json"),
    });
    lottie.loadAnimation({
      container: document.querySelector("#camel"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/camel.json"),
    });
    lottie.loadAnimation({
      container: document.querySelector("#cow"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/cow.json"),
    });
  }, []);

  return (
    <>
      <div className={AnimalsStyles.animalsBottomWrap}>
        <div className={AnimalsStyles.animalInner}>
          <div className={AnimalsStyles.rightAnimalsWrap} id="right_animal">
            <div className={AnimalsStyles.tiger} id="tiger"></div>
            <div className={AnimalsStyles.lion} id="lion"></div>
            <div className={AnimalsStyles.elephant} id="elephant"></div>
            <div className={AnimalsStyles.deer} id="deer"></div>
            <div className={AnimalsStyles.dog} id="dog"></div>
            <div className={AnimalsStyles.bike} id="bike">
              <img src={require("../common/bike.png")} alt="bike" />
            </div>
          </div>

          <div className={AnimalsStyles.leftAnimalsWrap} id="left_animal">
            <div className={AnimalsStyles.cow} id="cow"></div>
            <div className={AnimalsStyles.boar} id="boar"></div>
            <div className={AnimalsStyles.horse} id="horse"></div>
            <div className={AnimalsStyles.camel} id="camel"></div>
            <div className={AnimalsStyles.turtle} id="turtle"></div>
            <div className={AnimalsStyles.roller} id="roller">
              <img src={require("../common/roller.png")} alt="roller" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animals;
