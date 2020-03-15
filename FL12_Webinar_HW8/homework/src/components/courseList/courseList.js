import React, {Component} from 'react';
import CourseItem from '../courseItem/courseItem';

export default class CourseList extends Component {
  render() {
    // console.log(this.props.items)
    return this.props.items.map((item) => (
      <CourseItem key={item.id} item={item} 
      delCourse={this.props.delCourse} 
      editCourse={this.props.editCourse}/>
    ))  
  }
}