import React, { Component } from "react";

export class Profile extends Component {
  state = {
    person: {
      fullName: "Kylian Mbappé Lottin",
      bio: "Kylian Mbappe is a professional footballer that plays as a forward for Paris Saint Germain.",
      imgSrc: "./Mbappe.png",
      profession: "Professional Footballer",
    },
    show: false,
    mountedTime: null,
  };

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.setState({ mountedTime: new Date() });

    // Set up an interval to update the mountedTime every second
    this.interval = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 2000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="profile">
        <button onClick={this.toggleShow}>Toggle Button</button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
