import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { GiConfirmed, GiCancel } from "react-icons/gi";

export default function TextField({ text, Tag = "div", onEdit }) {
  const [editStatus, toggleStatus] = useState(false);
  const [innerText, changeText] = useState(text);
  const statusHandler = () => toggleStatus(!editStatus);

  if (editStatus) {
    return (
      <Tag>
        <input
          type="text"
          value={innerText}
          onChange={(e) => changeText(e.target.value)}
        />
        {Tag==="div" ? <br /> : "\t" }
        <GiConfirmed
          onClick={(_) => {
            onEdit(innerText);
            statusHandler();
          }}
        />
        <GiCancel
          onClick={(_) => {
            changeText(text);
            statusHandler();
          }}
        />
      </Tag>
    );
  } else {
    return (
      <Tag>
        {text}
        {Tag==="div" ? <br /> : "\t" }
        <FaRegEdit onClick={statusHandler} />
      </Tag>
    );
  }
}
