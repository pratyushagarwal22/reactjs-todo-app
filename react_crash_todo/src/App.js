import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
 
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'react-uuid';
import axios from 'axios';

// To make HTTP Requests you can use the Fetch API which is regular JavaScript or you can use Axios(HTTP Library)

class App extends Component {
  
  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )] }));


    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )] });
  }

  // Add Todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid(),
    //   title,
    //   completed: false
    // }
    // We will create an actual POST request to jsonplaceholder.typicode - to understand how the backend works
    axios.post('http://jsonplaceholder.typicode.com/todos', { title, completed: false })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }));


    // this.setState({ todos: [...this.state.todos, newTodo]});
  }

  state = {
    todos: [ // We're going to fetch values using HTTP Requests
      // {
      //   id: uuid(),
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: uuid(),
      //   title: 'Clean Refrigerator',
      //   completed: true
      // },
      // {
      //   id: uuid(),
      //   title: 'Clean house',
      //   completed: false
      // },
      // {
      //   id: uuid(),
      //   title: 'Complete college work',
      //   completed: true
      // }
    ]
  }

  // To make initial requests we need to use a lifecycle method(like render() )
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }))
  }

  render() { // To use Router you have to wrap everything in Router
    return ( // Adding route that is a single component is easy you can use Component Props, but in this case we need to use Render Props
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} /> 
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
