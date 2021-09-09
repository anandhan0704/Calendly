import React from "react";
import { InlineWidget  } from "react-calendly";
import "./styles.css";


export default function App() {
  const preFill = {
    name: "Jon Snow",
    firstName: "Jon",
    lastName: "Snow",
    email: "test@test.com"
  };

  const pageSettings = {
    backgroundColor: "cbe5e2",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: "00a2ff",
    textColor: "4d5055"
  };

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>Click Below To Schedule a Meeting</h2>
      <InlineWidget 
        color="#00a2ff"
        text="Request a Demo"
        textColor="#ffffff"
        url="https://calendly.com/anandhansuneev1/"
        prefill={preFill}
        pageSettings={pageSettings}
      />
    </div>
  );
}
