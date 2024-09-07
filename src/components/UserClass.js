import React from "react";
// const User = () => {
//     return (
//       <div className="user-card">
//         <h2> Name: </h2>
//         <h3> Location: </h3>
//         <h4> Contact: </h4>
//       </div>
//     );
//   };

//   export default User;

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "dummyName",
        location: "dummyLocation",
        avatar_url: "",
      },
    };
    console.log(props.name + " Child contructor");
  }
  async componentDidMount() {
    console.log(this.props.name + " Child componentDidMount");
    // APi call
    const userData = await fetch("https://api.github.com/users/navalkishor3");
    const jsonUserData = await userData.json();
    console.log(jsonUserData);

    this.setState({
      userInfo: jsonUserData,
    });
  }
  componentDidUpdate() {
    console.log(this.props.name + " componentDidUpdate");
  }
  componentWillUnmount() {
    console.log(this.props.name + " componentWillUnmount");
  }
  render() {
    console.log(this.props.name + " Child render");
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Count: {this.state.count} </h1>
        <h1>
          <img src={avatar_url} alt="avtar" />{" "}
        </h1>
        <h2> Name: {name}</h2>
        <h3> Location: {location} </h3>
        <h4> Contact: 99</h4>
        <button onClick={this.updateCounter.bind(this)}>Update Counter</button>
      </div>
    );
  }

  updateCounter() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}

export default UserClass;
