import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";
import { UserInfo } from "../index";

describe("DeceasedPerson", () => {
  //毎回レンダリング画面を空にする
  afterEach(() => {
    cleanup();
  });

  test("renders learn react link", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UserInfo />
        </BrowserRouter>
      </Provider>
    );
  });
});
