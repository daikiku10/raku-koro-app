import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";
import { PcrPositiveRate } from "../index";

describe("PcrPositiveRate", () => {
  //毎回レンダリング画面を空にする
  afterEach(() => {
    cleanup();
  });

  test("render", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PcrPositiveRate />
        </BrowserRouter>
      </Provider>
    );
  });
});

//Stmtsは一応80パーセント