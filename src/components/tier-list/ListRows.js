import ListElements from "./ListElements";
import RowLabel from "./RowLabel";
import classes from "./tier-list.module.css";

function ListRows({ labelValue, labelIndex }) {
  return (
    <div className={classes["list_row"]}>
      <RowLabel name={labelValue} index={labelIndex} />
      <ListElements labelIndex={labelIndex} />
    </div>
  );
}

export default ListRows;
