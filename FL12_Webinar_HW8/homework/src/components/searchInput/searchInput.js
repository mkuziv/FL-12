import React, { Component } from 'react';
import './searchInput.css';
// import { Link } from 'react-router-dom';

export default class SearchInput extends Component {
  // <Link to="/new-course">
  //     <button className="add-btn">Add courses</button>
  //   </Link>
  render() {
    return <div className="search">
    <input className="search-input" type="text" placeholder="Search"/> 
    <button className="add-btn">Add courses</button>
  </div> 
    
  }
}