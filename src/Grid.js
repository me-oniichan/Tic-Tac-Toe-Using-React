import { useState } from "react";
import Icon from "./Icon";
// import { useState } from "react";

const data = new Array(9).fill(" ");

const Grid = () => {
  const [turn, setTurn] = useState(Math.round(Math.random()));
  const [msg, setMsg] = useState(
    `Start Playing ${turn ? "Circle's" : "Cross'"} turn`
  );

  const playTurn = (index) => {
    if (data[index] === " ") {
      data[index] = turn ? "circle" : "cross";
      setMsg(`${turn ? "Cross'" : "Circle's"} turn`);
      setTurn(!turn);
      checkWin(index);
    }
  };

  const checkWin = (index) => {
    if (
      data[4] != " " && (
      data[0] == data[4] && data[4] == data[8]) ||
      (data[2] == data[4] && data[4] == data[6])
    )
      setMsg(`${turn ? "Circle Win" : "Cross Win"}`);

    else if (index % 3 == 0) {
      if (data[0] === data[3] && data[3] === data[6]) {
        setMsg(`${turn ? "Circle Win" : "Cross Win"}`);
      } else if (
        data[index] == data[index + 1] &&
        data[index + 2] === data[index]
      ) {
        setMsg(`${turn ? "Circle Win" : "Cross Win"}`);
      }
    } else if (index % 3 == 1) {
      if (data[1] === data[4] && data[4] === data[7]) {
        setMsg(`${turn ? "Circle Win" : "Cross Win"}`);
      } else if (
        data[index - 1] == data[index] &&
        data[index + 1] === data[index]
      ) {
        setMsg(`${turn ? "Circle Win" : "Cross Win"}`);
      }
    } else if (index % 3 == 2) {
      if (data[2] === data[5] && data[5] === data[8]) {
        setMsg(`${turn ? "Circle Win" : "Cross Win"}`);
      } else if (
        data[index - 2] == data[index - 1] &&
        data[index] === data[index]
      ) {
        setMsg(`${turn ? "Circle Win" : "Cross Win"}`);
      }
    }
  };

  return (
    <div>
      <div className="msg">{msg}</div>
      <div className="grid">
        {data.map((element, index) => (
          <div className="cell" onClick={() => playTurn(index)}>
            <Icon icon={element} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
