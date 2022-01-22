import React, { Component } from "react";
import list_of_data from './../data.json';

class BulkData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: list_of_data
        };
    }

    renderData = () => {
        const dataItems = this.state.data;
        return  dataItems.map(row => (
            <tr id={row.id}>
                <td>{row.id}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>{row.email}</td>
            </tr>
        ));
    };

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>First name</td>
                        <td>Last name</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderData()}
                </tbody>
             </table>
        );
    }

}

export default BulkData;