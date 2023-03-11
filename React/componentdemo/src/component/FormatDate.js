// import Card from "../Card";
import "./FormatDate.css";
import Card from "./UI/Card";
const FormatDate=(props)=>
{
    const day=props.itemPurDate.getDate();
    const year=props.itemPurDate.getFullYear();
    const month=props.itemPurDate.toLocaleString("en-us",{month:"long"});
    return(
        <Card className="format-date">
            <div className="format-date_name">{day}</div>
            <div className="format-date_month">{month}</div>
            <div className="format-date_year">{year}</div>
        </Card>
    );
}

export default FormatDate;