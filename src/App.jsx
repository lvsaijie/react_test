import React, { Component } from 'react'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
  state = {
    todoList: [
      { id: "001", content: "抽烟", isChecked: false },
      { id: "002", content: "喝酒", isChecked: true },
      { id: "003", content: "烫头", isChecked: false }
    ]
  }
  addTodo = (todoObj) => {
    const { todoList } = this.state
    this.setState({ todoList: [todoObj, ...todoList] })
  }
  render() {
    const todoList = this.state.todoList
    return (
      <div className="app">
        <Add addTodo = {this.addTodo} />
        <List todoList={todoList} />
        <Footer />
      </div>
    )
  }
}
