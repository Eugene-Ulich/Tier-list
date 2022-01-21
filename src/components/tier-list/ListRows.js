import ListElements from "./ListElements";
import RowLabel from "./RowLabel";
import classes from "./tier-list.module.css";

function ListRows ({rowLabel, rowListElements, listIndex}) {
    return (
        <div className={classes["list_row"]}>
            <RowLabel name={rowLabel} index={listIndex} />
            <ListElements elements={rowListElements} label={rowLabel}/>
        </div>
    ); 
}

export default ListRows;