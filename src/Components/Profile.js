import React, { Component } from 'react'
import './Profile.css'

export default class Profile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count : "Yassin Dridi",
            job :"Web Devoleper",
            img:"https://www.webskittersacademy.in/wp-content/uploads/2015/08/Web-Developer-skill.jpg",
            show: false
        };
      }
      toggle=() =>{
        this.setState({show : !this.state.show})
      }
  render() {
    return (
    <div className='container'>
    {/* Button */}
        <button onClick={this.toggle}>Show/Hide</button>
        {/* Button */}
        {/* My Name */}
        <h1>{this.state.count}</h1>
        {/* My Name */}
        {/* My Job */}
        <h2>{this.state.job}</h2>
        {/* My Job */}
        {/* My Image */}
        <img src={this.state.img} alt='aa' className='image'/>
        {/* My Image */}
        
    </div>
    )
  }
}
