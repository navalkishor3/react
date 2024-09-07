import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent cosntructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is react about page</h2>
        <UserClass
          name={"First Naval Kisor(class)"}
          location={"Delhi (class)"}
        />
        {/* <UserClass2
          name={"Second Naval Kisor(class)"}
          location={"Delhi (class)"}
        /> */}
      </div>
    );
  }
}
/*
About function component
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is react about page</h2>
       <User name={"Naval Kisor(function)"} location={"Delhi (function)"} /> 

      <UserClass name={"Naval Kisor(class)"} location={"Delhi (class)"} />
    </div>
  );
};
*/

export default About;
