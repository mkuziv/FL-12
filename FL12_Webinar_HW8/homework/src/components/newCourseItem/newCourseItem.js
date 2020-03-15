import React, { Component } from 'react';
import './newCourseItem.css';
// import { Link } from 'react-router-dom';

export default class NewCourseItem extends Component {
  state = {
    title: '',
    date: '',
    description: '',
    duration: '',
    authors: ''
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value});

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addCourse(this.state.title, this.state.description, 
      this.state.duration, this.state.authors, this.state.date);
    this.setState({title: '', description:'', duration:'', authors: '', date: ''});
  }

// <Link to="/">
//   <input type="submit" className="btn-save btn" value='Submit'/>
// </Link>
// <Link>
//   <button className="btn-cancel btn">Cancel</button>
// </Link>
  render() {
    return (
      
        <form onSubmit={this.onSubmit} className="new-course">
      <h2>New Course</h2>
      <div className="new-course-item">
        <div>
        <label for="title">Title:</label><br/>
        <input id="title" type="text" name="title" 
        value={this.state.title} onChange={this.onChange}/><br/>
        </div>
        <div className="new-course-item">
        <label for="description">Description:</label><br/>
        <textarea id="description" name="description" 
        value={this.state.description} onChange={this.onChange}></textarea>
        </div>
      </div>
      <div className="time">
        <div>
          <div className="time-item">
          <label for="duration">Duration:</label><br/>
          <input id="duration" type="text" name="duration"
          value={this.state.duration} onChange={this.onChange}/><br/>
          </div>
          <div className="time-item"><label for="authors">Authors:</label><br/>
          <input id="authors" type="text" name="authors"
          value={this.state.authors} onChange={this.onChange}/><br/></div>
        </div>
        <div className="time-item">
          <label for="date">Date:</label><br/>
          <input type="date" id="date" name="date"
          value={this.state.date} onChange={this.onChange}/>
        </div>
      </div>
      <div>
      <input type="submit" className="btn-save btn" value='Submit'/>
      <button className="btn-cancel btn">Cancel</button>

      </div>
    </form>
      
    )    
  }
}