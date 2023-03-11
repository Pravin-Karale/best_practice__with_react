import { useParams } from "react-router-dom";

const Customers =()=>{
const routerParams=useParams();

return(
<div> <h1>This is Customers Page</h1>
<h2>{routerParams.id}</h2>
</div>)
}
export default Customers;