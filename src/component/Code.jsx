import React, { useState } from "react";

const Code = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([{ course: "HTML" }]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    setData((prev) => [...prev, { course: input }]);
    setInput("");
  };
  return (
    <div>
      <div className="input-filed">
        <input
          type="text"
          placeholder="Enter some text.."
          value={input}
          onChange={handleInput}
        />
        <button onClick={handleAdd}>Go!</button>
      </div>
      <div className="container">
        <table border={1}>
          <tbody>
            {data.map((data, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{data.course}</td>
                <td>
                  <button>Update</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Code;
