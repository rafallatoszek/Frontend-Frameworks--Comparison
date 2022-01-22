import React, { Component } from "react";

class Request extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData(){
        const address = 'https://jsonplaceholder.typicode.com/photos';
        fetch(address)
            .then(response => response.json())
            .then(data => this.setState({ data: data}))
    }

    renderData = () => {
        const dataItems = this.state.data;
        return  dataItems.map(photo => (
            <tr id={photo.id}>
                <td>{photo.albumId}</td>
                <td>{photo.id}</td>
                <td>{photo.title}</td>
                <td>{photo.url}</td>
                <td>
                    <img src={photo.thumbnailUrl}/>
                </td>
            </tr>
        ));
    };

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <td>Album Id</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Url</td>
                    <td>ThumbnailUrl</td>
                </tr>
                </thead>
                <tbody>
                    {this.renderData()}
                </tbody>
            </table>
        );
    }
}


export default Request;