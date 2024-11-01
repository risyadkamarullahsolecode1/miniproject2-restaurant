// src/components/Customer.jsx
import React, { useState } from 'react';
import CustomerList from "./CostumerList"
import AddCustomerForm from './AddCostumerForm';

let nextCustomerId = 0;

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const addCustomer = (customer) => {
    setCustomers([...customers, { ...customer, id: nextCustomerId++ }]);
  };

  const updateCustomer = (customer) => {
    setCustomers(customers.map(cust => (cust.id === customer.id ? customer : cust)));
    setSelectedCustomer(null); // Reset form
  };

  const editCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter(cust => cust.id !== id));
  };

  return (
    <div>
      <AddCustomerForm
        onSubmit={selectedCustomer ? updateCustomer : addCustomer}
        selectedCustomer={selectedCustomer}
      />
      <CustomerList
        customers={customers}
        onEdit={editCustomer}
        onDelete={deleteCustomer}
      />
    </div>
  );
}

export default Customer;
