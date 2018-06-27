import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MeetupUserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ''
        }
    }

    componentWillMount() {
        this.getMeetup();
    }

    getMeetup() {
        let meetupId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/meetupzs/${meetupId}`)
            .then(response => {
                this.setState({ details: response.data }, () => {
                    console.log(this.state);
                })
            }).catch(err =>
                console.log(err));
    }

    onDelete() {
        let meetupId = this.state.details.user_id;
        axios.delete(`http://localhost:3000/api/meetupzs/${meetupId}`)
            .then(response => {
                this.props.history.push('/');
            }).catch(err => console.log(err));


    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Go Back</Link>
                <br />
                <h1>Profile {this.state.details.name}</h1>
                <ul className="collection">
                    <li className="collection-item">Email     :{this.state.details.email}</li>
                    <li className="collection-item">Facebook  :{this.state.details.facebook_id}</li>
                    <li className="collection-item">User Name :{this.state.details.username}</li>
                    <li className="collection-item">Palce     :{this.state.details.place}</li>
                </ul>
                <Link className="btn" to={`/user/edit/${this.state.details.user_id}`}>EDIT</Link>
                <button onClick={this.onDelete.bind(this)} className="btn red right">DELETE</button>
            </div>

        )
    }

}

export default MeetupUserDetails;