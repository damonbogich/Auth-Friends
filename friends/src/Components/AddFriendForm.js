import React from "react";
import axios from "axios";
import {axiosWithAuth} from '../Utils/axiosWithAuth';

class AddFriendForm extends React.Component {
    state = {
        credentials: { 
          name: "",
          age: "",
          email: ""
        }
      };

      handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

      submit = e => {
          e.preventDefault();
          axiosWithAuth()
          .post("/api/friends", this.state.credentials)
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));
      };

      

      render() {
        return (
          <div>
            <h1>Add Friend</h1>
            <form onSubmit={this.submit}>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={this.state.credentials.name}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="age"
                placeholder="age"
                value={this.state.credentials.age}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                value={this.state.credentials.email}
                onChange={this.handleChange}
              />
              <button>Log in</button>
            </form>
          </div>
        );
      }
    };



    
export default AddFriendForm;