// src/components/MenuList.jsx
import React from 'react';
import { Table, Button } from 'react-bootstrap';

const MenuList = ({ menuItems, onEdit, onDelete }) => {
  return (
    <div className="table-responsive pt-3">
    <Table striped bordered hover className="mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Rating</th>
          <th>Availability</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {menuItems.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>Rp. {item.price}</td>
            <td>{item.category}</td>
            <td>{item.rating}</td>
            <td>{item.isAvailable ? 'Yes' : 'No'}</td>
            <td>
              <Button
                variant="warning"
                size="sm"
                onClick={() => onEdit(item)}
                className="me-2"
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default MenuList;
