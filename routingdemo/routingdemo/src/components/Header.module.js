import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header=()=>{
    return(
    <header class={classes.header}>
        <nav>
            <ul>
                <li>
                    <Link to='./Customers'>customers</Link>
                </li>
                <li>
                    <Link to='./Products'>products</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}
export default Header;
