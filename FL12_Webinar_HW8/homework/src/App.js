import React from 'react';
import './App.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchInput from './components/searchInput/searchInput';
import CourseList from './components/courseList/courseList';
import NewCourseItem from './components/newCourseItem/newCourseItem';



class App extends React.Component {
  
  state = {
    items: [
      
    ]
  }
  // del
  delCourse = (id) => {    
    this.setState({ items:[...this.state.items.filter(item => item.id !== id)] })
  }
  //add
  addCourse = (title, description, duration, authors, date) => {    
    const newCourse = {
      id: Date.now(),
      title: title,
      description: description,
      duration: duration,
      authors:authors,
      date: date
    };

    this.setState({items:[...this.state.items, newCourse]});
    
  }
  //edit 
  editCourse = (id) => {
    console.log(id);
    const selectedItem = this.state.items.find(item => item.id = id);
    console.log("item",selectedItem)
  }
  render() {
    
    return (
      // <Router>
      //   <div className="App">
      //     <Route exact path="/" render={props =>(
      //       <React.Fragment>
      //         <SearchInput/>
      //         <CourseList items = {this.state.items} delCourse={this.delCourse}/>
      //       </React.Fragment>
      //     )}/>    
      //     <Route path="/new-course" render={props => (
      //       <React.Fragment>
      //         <NewCourseItem addCourse = {this.addCourse}/>
      //       </React.Fragment>
      //     )}/>          
      //     <NewCourseItem addCourse = {this.addCourse}/>
      //   </div>
      // </Router>
      
        <div className="App">          
        <SearchInput/>
        <CourseList items = {this.state.items} delCourse={this.delCourse} editCourse={this.editCourse}/>      
        <NewCourseItem addCourse = {this.addCourse}/>        
        </div>
    );
  }
  }

export default App;
