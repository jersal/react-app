import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddUser extends Component {

    addUser(newUser){
        axios.request({
            method:'post',
            url:'http://localhost:3000/api/meetupzs',
            data:newUser
        }).then(response =>{
            this.props.history.push('/');
        }).catch(err => console.log(err));

    }
    onSubmit(e) {
        const newUser = {
            name:this.refs.name.value,
            email:this.refs.email.value,
            facebook_id:this.refs.facebook_id.value,
            username:this.refs.username.value,
            place:this.refs.place.value,
        }
        this.addUser(newUser);
        console.log(this.refs.name.value);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Go Back</Link>
                <h1>Add New User</h1>
                <form onSubmit={this.onSubmit.bind(this)}>

                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="email" ref="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="facebook_id" ref="facebook_id" />
                        <label htmlFor="facebook_id">Facebook Id</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="username" ref="username" />
                        <label htmlFor="username">User Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="place" ref="place" />
                        <label htmlFor="place">Place</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>

        )
    }

}

export default AddUser;