import React from "react";
import IndexPage from "./Pages/IndexPage/IndexPage";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function App() {
  return (
    <div>
      <RecoilRoot>
        <IndexPage />
      </RecoilRoot>
    </div>
  );
}
