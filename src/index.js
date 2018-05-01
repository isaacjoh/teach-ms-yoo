import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/index.css";

document.addEventListener("DOMContentLoaded", function() {
  var $navbarMenu = document.querySelector(".navbar-menu");
  var $navbarBurger = document.querySelector(".navbar-burger");

  var $body = document.querySelector("body");
  $body.addEventListener("click", function() {
    $navbarMenu.classList.remove("is-active");
    $navbarBurger.classList.remove("is-active");
  });

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function(e) {
        $navbarMenu.classList.toggle("is-active");
        $el.classList.toggle("is-active");
        e.stopPropagation();
      });
    });
  }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
