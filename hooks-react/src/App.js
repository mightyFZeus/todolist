
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import AddTodo from './ComponentsTodo/AddTodo'
import Layout from './ComponentsTodo/Layout'
import Todos from './ComponentsTodo/Todos'
import About from './ComponentsTodo/Pages/About'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Go to the office',
        completed: false
      }

    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  //. delete Todo

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  // add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {

    return (
      <Router>
        <div className='container'>
          <Layout />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos}
                markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path='/about' component={About} />

        </div>
      </Router>
    )
  }
}

export default App
