import React, { useState } from "react";
import productImage from "./products/product001.png";
import { PiArrowCircleLeft, PiArrowCircleRight } from "react-icons/pi";
import "./App.css";
function App() {
  const [selectedDiv, setSelectedDiv] = useState("");

  let selectedPortionDetails = [
    { title: "IOS/Android Apps", selected: false },
    { title: "Web Apps", selected: false },
    { title: "Browser Extension", selected: false },
    { title: "Orchestrator", selected: false },
    { title: "NodeWorker", selected: false },
    { title: "OpenLedger", selected: false },
  ];

  const [selectedPortion, setSelectedPortion] = useState(
    selectedPortionDetails
  );

  const handleMouseOver = ({ target }) => {
    let { title } = target;
    setSelectedDiv(title);

    const modifiedFilter = selectedPortion.map((obj) => {
      if (obj?.title === target?.title) {
        return { ...obj, selected: true };
      } else return { ...obj, selected: false };
    });
    setSelectedPortion(modifiedFilter);
  };

  const checkSelectedProtion = ({ target }) => {
    return selectedPortion?.find((obj) => obj?.title === target?.title)
      ?.selected;
  };

  const handleArrow = (type = "next") => {
    let findIndex = selectedPortion?.findIndex(
      (obj) => obj?.title === selectedDiv
    );
    console.log("findIndex", findIndex);

    let finalIndex;
    if (type === "next") {
      finalIndex =
        findIndex + 1 === selectedPortion?.length ? 0 : findIndex + 1;
    } else {
      finalIndex =
        findIndex - 1 === -1 ? selectedPortion?.length - 1 : findIndex - 1;
    }
    console.log("finalIndex", finalIndex);
    setSelectedDiv(selectedPortion[finalIndex]?.title);
  };

  return (
    <>
      <section className="section">
        <img src={productImage} alt="productImage" className="img-main" />
        <div className="main">
          <div
            title="IOS/Android Apps"
            className={`selected-div ${
              selectedDiv === "IOS/Android Apps" && "selected"
            }`}
            id="ios"
            onMouseOver={(e) => handleMouseOver(e)}
          ></div>
          <div
            title="Web Apps"
            className={`selected-div2 ${
              selectedDiv === "Web Apps" && "selected"
            }`}
            id="web"
            onMouseOver={(e) => handleMouseOver(e)}
          ></div>
          <div
            title="Browser Extension"
            className={`selected-div3 ${
              selectedDiv === "Browser Extension" && "selected"
            }`}
            id="browser"
            onMouseOver={(e) => handleMouseOver(e)}
          ></div>
          <div
            className={`selected-div4 ${
              selectedDiv === "Orchestrator" && "selected"
            }`}
            id="orchestrator"
            title="Orchestrator"
            onMouseOver={(e) => handleMouseOver(e)}
          ></div>

          <div
            className={`selected-div5 ${
              selectedDiv === "NodeWorker" && "selected"
            }`}
            id="nodeWorker"
            title="NodeWorker"
            onMouseOver={(e) => handleMouseOver(e)}
          ></div>
          <div
            className={`selected-div6 ${
              selectedDiv === "OpenLedger" && "selected"
            }`}
            id="openLedger"
            title="OpenLedger"
            onMouseOver={(e) => handleMouseOver(e)}
          ></div>
        </div>
      </section>
      <div className="flex items-center mt-2 ">
        <PiArrowCircleLeft
          size={40}
          className="cursor-pointer"
          onClick={() => handleArrow("prev")}
        />
        <PiArrowCircleRight
          size={40}
          className="cursor-pointer"
          onClick={() => handleArrow("next")}
        />
        <h4 className="font-bold text-[1.5rem] ml-2">{selectedDiv}</h4>
      </div>
    </>
  );
}

export default App;
