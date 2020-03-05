import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import data from '../Dashboard/data';

const empData = data.EmployeeData;

class Dashboard extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2 style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>Employee Details</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Emp ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Role</th>
                            <th>Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                        {empData.map(emp => (
                            <tr>
                            <td>{emp.id}</td>
                            <td>{emp.firstname}</td>
                            <td>{emp.lastname}</td>
                            <td>{emp.role}</td>
                            <td>{emp.desgination}</td>
                            </tr>
                        ))}
                        </tbody>
                        </Table>
                </div>
            </div>
        );
    }
}

export default Dashboard;