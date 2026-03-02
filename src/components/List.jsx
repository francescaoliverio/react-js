import { useState } from "react";

import pencilIcon from "../assets/pencil.svg";
import trashIcon from "../assets/trash.svg";
import checkCircle from "../assets/check-circle.svg";

function List({ listElements }) {
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(6);

  function handleClick(pulsante) {
    console.log("Click sul pulsante ", pulsante);
  }

  function updateCounter() {
    setCompleted((prev) => prev + 1);
    setPending((prev) => prev - 1);
  }

  return (
    <>
      <div className="completed-tasks">
        <div>
          <span>{completed}</span>
          completate
        </div>
        <div>
          <span>{pending}</span>
          da completare
        </div>
      </div>
      <ul className="list">
        {listElements.map((element) => (
          <li className={`list-item ${element.status === "done" && "done"}`} key={element.id} onClick={updateCounter}>
            {element.text}
            <div className="actions">
              {element.status === "done" ? (
                <div onClick={() => handleClick(element)} className="icon-btn">
                  <img src={checkCircle} alt="done" />
                </div>
              ) : (
                <div onClick={() => handleClick(element)} className="icon-btn">
                  <img src={pencilIcon} alt="edit" />
                </div>
              )}
              <div className="icon-btn">
                <img src={trashIcon} alt="delete" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
