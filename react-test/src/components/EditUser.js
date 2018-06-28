import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            name: '',
            email: '',
            facebook_id: '',
            username: '',
            place: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {
        this.getMeetupDetails();
    }
    getMeetupDetails() {
        let meetupId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/meetupzs/${meetupId}`)
            .then(response => {
                this.setState({
                    user_id: response.data.user_id,
                    name: response.data.name,
                    email: response.data.email,
                    facebook_id: response.data.facebook_id,
                    username: response.data.username,
                    place: response.data.place
                }, () => {
                    console.log(this.state);
                });
            }).catch(err =>
                console.log(err));
    }
    EditUser(newUser) {
        axios.request({
            method: 'put',
            url: `http://localhost:3000/api/meetupzs/${this.state.user_id}`,
            data: newUser
        }).then(response => {
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }
    onSubmit(e) {
        const newUser = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            facebook_id: this.refs.facebook_id.value,
            username: this.refs.username.value,
            place: this.refs.place.value,
        }
        this.EditUser(newUser);
        e.preventDefault();
    }
    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Go Back</Link>
                <h1>Update</h1>
                <form onSubmit={this.onSubmit.bind(this)}>

                    <div className="input-field">
                        <input type="text" name="name" ref="name" value={this.state.name}
                            onChange={this.handleInputChange} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="email" ref="email" value={this.state.email}
                            onChange={this.handleInputChange} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="facebook_id" ref="facebook_id" value={this.state.facebook_id}
                            onChange={this.handleInputChange} />
                        <label htmlFor="facebook_id">Facebook Id</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="username" ref="username" value={this.state.username}
                            onChange={this.handleInputChange} />
                        <label htmlFor="username">User Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="place" ref="place" value={this.state.place}
                            onChange={this.handleInputChange} />
                        <label htmlFor="place">Place</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        )
    }
}

export default EditUser;