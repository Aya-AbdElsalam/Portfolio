import { useEffect, useState } from "react";
function Cursor() {
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
        className="cursor"
        style={{
          left: pagex + "px",
          top: pagey + "px",
        }}
      ></div>
    </>
  );
}
export default Cursor;
