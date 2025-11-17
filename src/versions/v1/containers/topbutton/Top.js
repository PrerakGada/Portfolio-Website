import React from "react";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
    <button onClick={TopEvent} id="topButton" title="Go to top" className="invisible fixed bottom-5 right-[30px] z-[99] border-none outline-none bg-button-primary text-white cursor-pointer p-[15px] rounded-[15px] text-[25px] hover:bg-button-top-hover transition-all ease-in-out duration-200">
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
