import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const AddCustomerForm = ({ onSubmit, selectedCustomer, setSelectedCustomer }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  });

  const nameInputRef = useRef(null);

  useEffect(() => {
    if (selectedCustomer) {
      setForm(selectedCustomer);
    }
    nameInputRef.current.focus();
  }, [selectedCustomer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.length >= 2 && /\S+@\S+\.\S+/.test(form.email)) {
      onSubmit(form);
      setForm({ name: '', email: '', phoneNumber: '', address: '' });
      setSelectedCustomer(null);
    } else {
      alert("Please fill in valid customer details.");
    }
  };

  return (
    <div className="pt-1">
      <h2>{selectedCustomer ? 'Edit Customer Management' : 'Add Customer Management'}</h2>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group as={Col} className="mb-3 fw-bold" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={nameInputRef}
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            max="200"
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3 fw-bold" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email@gmail.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            max="200"
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3 fw-bold" controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="08**********"
            value={form.phoneNumber}
            onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} className="mb-3 fw-bold" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            rows="3"
            max="200"
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            {selectedCustomer ? 'Update Customer' : 'Add Customer'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddCustomerForm;
