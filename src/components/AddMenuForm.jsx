import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddMenuForm = ({ onSubmit, editingMenu }) => {
  const [form, setForm] = useState({
    name: '',
    price: 0,
    category: 'Food',
    rating: 0,
    isAvailable: true
  });

  const nameInputRef = useRef(null);

  useEffect(() => {
    if (editingMenu) {
      setForm(editingMenu);
    }
    nameInputRef.current.focus();
  }, [editingMenu]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.length >= 2 && form.price > 0) {
      onSubmit(form);
      setForm({ name: '', price: 0, category: 'Food', rating: 0, isAvailable: true });
    } else {
      alert("Please fill in valid menu details.");
    }
  };

  return (
    <div className="pt-1">
      <h2>{editingMenu ? 'Edit Menu Management' : 'Add Menu Management'}</h2>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group as={Row} controlId="formName" className="mb-3">
          <Form.Label column sm="2" className="fw-bold">Name</Form.Label>
          <Col sm="10">
            <Form.Control
              ref={nameInputRef}
              type="text"
              placeholder="Enter name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              max="200"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPrice" className="mb-3">
          <Form.Label column sm="2" className="fw-bold">Price</Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })}
              required
              min="0"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formCategory" className="mb-3">
          <Form.Label column sm="2" className="fw-bold">Category</Form.Label>
          <Col sm="10">
            <Form.Select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="Food">Food</option>
              <option value="Beverage">Beverage</option>
              <option value="Dessert">Dessert</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formRating" className="mb-3">
          <Form.Label column sm="2" className="fw-bold">Rating</Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Enter rating"
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: parseFloat(e.target.value) })}
              min="0"
              max="5"
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="formAvailability" className="mb-3 fw-bold">
          <Form.Check
            type="checkbox"
            label="Available"
            checked={form.isAvailable}
            onChange={(e) => setForm({ ...form, isAvailable: e.target.checked })}
          />
        </Form.Group>

        <div className="text-center mt-2">
          <Button type="submit" variant="primary">
            {editingMenu ? 'Update Menu' : 'Add Menu'}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddMenuForm;
