import { useEffect, useState } from "react";
export default function Cursor(props) {
  const [pagex, setPagex] = useState(0);
  const [pagey, setPagey] = useState(0);
  useEffect(() => {
    window.addEventListener(
      "mousemove",
      (e) => {
        setPagex(e.clientX);
        setPagey(e.clientY);
      },
      []
    );
  });
  return (
    <>
      <div
        className={`cursor  ${props.activeCursor === true ? "active" : ""} ${
          props.activeInputCursor === true ? "input" : ""
        } ${
          props.moreInfo === "ar"
            ? "more_ar"
            : props.moreInfo === "en"
            ? "more"
            : ""
        }`}
        style={{
          left: pagex + "px",
          top: pagey + "px",
        }}
      ></div>
    </>
  );
}
