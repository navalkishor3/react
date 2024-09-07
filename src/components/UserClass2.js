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

class UserClass2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(props.name + " Child contructor");
  }
  componentDidMount() {
    console.log(this.props.name + " Child componentDidMount");
  }
  render() {
    console.log(this.props.name + " Child render");
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>Count: {this.state.count} </h1>
        <h1>Count: {this.state.count2} </h1>
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

export default UserClass2;
