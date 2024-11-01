import React, { useState } from 'react';
import { Form, Button, Table, InputGroup } from 'react-bootstrap';

const OrderForm = ({ customers, menuItems }) => {
  console.log('Customers:', customers);  // Verify customers data
  console.log('Menu Items:', menuItems); // Verify menu items data
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [selectedMenuItems, setSelectedMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    if (!selectedCustomer || selectedMenuItems.length === 0) {
      alert('Please select a customer and at least one menu item.');
      return;
    }

    const totalPrice = selectedMenuItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder = {
      customer: selectedCustomer,
      menuItems: selectedMenuItems,
      totalPrice,
      status: 'Processed'
    };

    setOrders([...orders, newOrder]);

    setSelectedCustomer('');
    setSelectedMenuItems([]);
  };

  const handleMenuItemChange = (menuItem, isChecked) => {
    if (isChecked) {
      setSelectedMenuItems((prev) => [...prev, { ...menuItem, quantity: 1 }]);
    } else {
      setSelectedMenuItems((prev) => prev.filter((item) => item.name !== menuItem.name));
    }
  };

  const handleQuantityChange = (menuItem, quantity) => {
    setSelectedMenuItems((prev) =>
      prev.map((item) => (item.name === menuItem.name ? { ...item, quantity: parseInt(quantity) } : item))
    );
  };

  const updateOrderStatus = (index, newStatus) => {
    const updatedOrders = orders.map((order, i) => 
      i === index ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="mt-4">
      <h2>Create Order</h2>
      <Form onSubmit={handleOrderSubmit}>
        <Form.Group controlId="customerSelect" className="mb-3">
          <Form.Label>Select Customer</Form.Label>
          <Form.Control
            as="select"
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
          >
            <option value="">--Select Customer--</option>
            {customers.length > 0
              ? customers.map((customer, index) => (
                  <option key={index} value={customer.name}>
                    {customer.name} ({customer.email})
                  </option>
                ))
              : <option value="">No customers available</option>}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Menu Items</Form.Label>
          {menuItems.length > 0 ? (
            menuItems.map((menuItem, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <Form.Check
                  type="checkbox"
                  label={`${menuItem.name} - Rp.${menuItem.price}`}
                  checked={selectedMenuItems.some((item) => item.name === menuItem.name)}
                  onChange={(e) => handleMenuItemChange(menuItem, e.target.checked)}
                />
                {selectedMenuItems.some((item) => item.name === menuItem.name) && (
                  <InputGroup className="ms-3" style={{ width: '100px' }}>
                    <Form.Control
                      type="number"
                      min="1"
                      value={selectedMenuItems.find((item) => item.name === menuItem.name)?.quantity || 1}
                      onChange={(e) => handleQuantityChange(menuItem, e.target.value)}
                    />
                  </InputGroup>
                )}
              </div>
            ))
          ) : (
            <p>No menu items available</p>
          )}
        </Form.Group>

        <Button type="submit" variant="primary">Submit Order</Button>
      </Form>

      <div className="mt-5">
        <h3>Submitted Orders</h3>
        {orders.length > 0 ? (
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Menu Items</th>
                <th>Total Price (Rp)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.customer}</td>
                  <td>
                    {order.menuItems.map((item, idx) => (
                      <span key={idx}>
                        {item.name} (x{item.quantity})
                        {idx < order.menuItems.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </td>
                  <td>{order.totalPrice}</td>
                  <td>{order.status}</td>
                  <td>
                    {order.status === 'Processed' && (
                      <>
                        <Button
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => updateOrderStatus(index, 'Delivered')}
                        >
                          Complete
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => updateOrderStatus(index, 'Cancelled')}
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                    {order.status !== 'Processed' && <span>No Actions Available</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No orders submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default OrderForm;
