import React, {Component} from 'react';
import './courseItem.css';
import edit from '../../edit.svg';
import del from '../../delete.svg';

export default class CourseItem extends Component {
  render() {
    
    const {id, title, description, duration, date} = this.props.item;

    return (
      <li className="item">
        <span className="item-date">{date}</span>
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
        <span className="item-duration">{duration}</span>
        <img src={edit} width="15px" alt="Edit" onClick={this.props.editCourse.bind(this, id)}/>
        <img src={del} width="15px" alt="Delete" onClick={this.props.delCourse.bind(this, id)}/>
      </li>
    )
  }
}