import React, { Component } from 'react'
import { UserClass } from './components/Classify/userClass'

export class Profile extends Component{
  constructor(props){
    super(props)
    console.log("Profile" , "contructor");
  }

  componentDidMount(){
    console.log("Profile" , "compoenent did mount");
  }

  render (){
    console.log("Profile" , "render");
    return (
        <div>
            <UserClass name="prasanth" location="kumbakonam"></UserClass>
            <UserClass name="priya" location="thanjayur"></UserClass>
        </div>
    )
  }
}
