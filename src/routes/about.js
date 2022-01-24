import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className='content'>
        <h1 className='title'>About</h1>
        <p className="subtitle">All about me</p>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
        <NavLink to='/'>back</NavLink>
      </div>
    );
  }
}

export default About;
