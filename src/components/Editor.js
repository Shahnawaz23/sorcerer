import React, { useEffect, useState } from "react";

export default function Editor() {
  const [text, setText] = useState(localStorage.getItem("id1") || "");

  useEffect(() => {
    localStorage.setItem("id1", text);
  }, [text]);

  // let mystyle = {
  //   fontSize: "large",
  //   color: "blue",
  // };

  var mystyle;

  function handleOnChange(event) {
    const newText = event.target.value;

    if (newText === "* ") {
      mystyle = {
        fontSize: "20px",
        fontWeight: "bold",
      };
      // console.log(newText);
      setText("");
    } else {
      setText(newText);
    }
  }

  useEffect(() => {
    localStorage.setItem("id1", text);
  }, [text]);

  return (
    <div>
      <textarea
        className="editor"
        style={mystyle}
        value={text}
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
}
