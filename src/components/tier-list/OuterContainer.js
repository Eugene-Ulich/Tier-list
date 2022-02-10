import ListElements from "./ListElements";
import classes from "./tier-list.module.css";
import { useContext } from "react";
import { TierListContext } from "../controller/TierListProvider";

function OuterContainer(props) {
  const { list } = useContext(TierListContext);

  if (list.some((item) => item.label === "unordered")) {
    return (
      <div className={classes["outer-container"]}>
        <ListElements />
      </div>
    );
  } else return null;
}

export default OuterContainer;
