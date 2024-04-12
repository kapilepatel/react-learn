import React from "react";

class Profile extends React.Component {
  render(props) {

    return <div>
    <h1>Profile Class Component </h1>
    <h2>Name: {this.props.name}</h2>
    </div>
    }
}

export default Profile;