import React, { useState } from "react";

const Code = () => {
  const [input, setInput] = useState("");
  const dummydata = [
    { course: "HTML" },
    { course: "CSS" },
    { course: "JavaScript" },
  ];
  const handleInput = () => {};
  return (
    <div>
      <div className="input-filed">
        <input
          type="text"
          placeholder="Enter some text.."
          value={input}
          onChange={handleInput}
        />
        <button>Go!</button>
      </div>
      <div className="container">
        <table border={1}>
          <tbody>
            {dummydata.map((data, index) => (
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
