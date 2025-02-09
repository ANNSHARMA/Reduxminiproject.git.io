import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Navbar from '../Components/Navbar'
import { afterEach, expect, it } from "vitest";
import {BrowserRouter} from 'react-router-dom';
import { createMemoryHistory } from "history";
// import { legacy_createStore as createStore } from "redux";
// import reducer from '../reducer'
// import { Provider } from "react-redux";

afterEach(cleanup);

const renderWithRouter = (component) =>{
  const history = createMemoryHistory();
  return{
    ...render(<BrowserRouter>{component}</BrowserRouter>)
  };
};

it("should render Popular player page", () =>{
  const {container} = renderWithRouter(<Navbar />);
  const navbar = screen.getByTestId("navbar");

  const link = screen.getByTestId("POPULAR PLAYER");
  
  expect(navbar).toContainElement(link);
})