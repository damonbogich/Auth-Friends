import React from "react";

import Loader from "react-loader-spinner";
import Friends from './Friends'

import { axiosWithAuth } from "../Utils/axiosWithAuth";

class FriendsList extends React.Component {

    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
      }
    
      getData = () => {
        // fetch initial data - but it's protected! Use axiosWithAuth to send the token on the header of the request.
        axiosWithAuth()
          .get("/api/friends")
          .then(res => {
            console.log(res)
            this.setState({
                friends: res.data
            })
          })
          .catch(err => console.log(err));
      };
  
    render() {
        
        return (
            <div>
                {this.state.friends.map(character => {
                    return(
                        <Friends
                        key = {character.id}
                        name = {character.name}
                        age = {character.age}
                        email = {character.email}
                         />
                    ) 
            })}

            </div>
        )
    }



}
export default FriendsList

