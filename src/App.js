import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import About from './pages/AboutUs';
import { Route, Switch, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const questions = [
    {
      title: "How do I start ?",
      answer: "Lorem ipsum dolor sit amet.",
      answerFull: `Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Non, placeat?`,
    },
    {
      title: "Daily Schedule",
      answer: "Lorem ipsum dolor sit amet.",
      answerFull: `Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Non, placeat?`,
    },
    {
      title: "Payment Mehthods",
      answer: "Lorem ipsum dolor sit amet.",
      answerFull: `Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Non, placeat?`,
    },
    {
      title: "What products do we offer ?",
      answer: "Lorem ipsum dolor sit amet.",
      answerFull: `Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Non, placeat?`,
    },
  ];
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home questions={questions} />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
