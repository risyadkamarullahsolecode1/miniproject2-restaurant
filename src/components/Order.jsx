// src/components/Order.jsx
import React, { useState, useEffect } from 'react';
import OrderForm from './OrderForm';

function Order() {
  const [menuItems, setMenuItems] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleAddOrder = (order) => {
    setOrders([...orders, order]);
  };

  useEffect(() => {
    // Fetch or set initial data here. Replace with real data-fetching in production.
    setMenuItems([
      { name: 'Pizza', price: 50000 },
      { name: 'Burger', price: 30000 },
    ]);
    setCustomers([
      { name: 'risyad', email: 'risyad@example.com' },
      { name: 'rocks', email: 'rocks@example.com' },
    ]);
  }, []);

  return (
    <div>
      <OrderForm 
        onSubmit={handleAddOrder}
        customers={customers} 
        menuItems={menuItems}
      />
    </div>
  );
}

export default Order;
