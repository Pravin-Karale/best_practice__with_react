import React from "react"
import Customer from "./Customer";
import classes from "./Customer.module.css";
const CustomersList=(props)=>{
    return (
        <ul className={classes['customers-list']}>
        {props.customers.map((customer)=>(
            <Customer
            key={customer.id}
            name={customer.name}
            email={customer.email}
            tel={customer.tel}
            feedback={customer.feedback }></Customer>
        ))}

        </ul>
    )
}
export default CustomersList;