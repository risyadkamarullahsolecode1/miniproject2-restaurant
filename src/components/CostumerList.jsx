import React from 'react';
import { Table, Button } from 'react-bootstrap';

const CustomerList = ({ customers, onEdit, onDelete }) => {
  return (
    <div className="table-responsive pt-3">
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customer => (
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.phoneNumber || 'N/A'}</td>
            <td>{customer.address || 'N/A'}</td>
            <td>
              <Button
                variant="warning"
                size="sm"
                className="me-2"
                onClick={() => onEdit(customer)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDelete(customer.id)}
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

export default CustomerList;
