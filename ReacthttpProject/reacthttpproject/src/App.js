import './App.css';
import React from 'react';
import CustomersList from './components/CustomersList';

function App() {
  const dummyCustomers=[
    {
      id:1,
      name:'Dummy Customer 1',
      email:'pravin100@.in',
      tel:'12345',
      feedback: "this is some sampe feddback"
    },

    {
      id:2,
      name:'Dummy Customer 2',
      email:'pravin200@.in',
      tel:'12345',
      feedback:"this is some sampe feddback"
    },

    {
      id:3,
      name:'Dummy Customer 3',
      email:'pravin300@.in',
      tel:'12345',
      feedback:"this is some sampe feddback"
    }
  ];

return(
  <React.Fragment>
    <section>
      <button>Fetch Customers</button>
    </section>
    <section>
      <CustomersList customers={dummyCustomers}>
      </CustomersList>
    </section>
  </React.Fragment>
)

}

export default App;
