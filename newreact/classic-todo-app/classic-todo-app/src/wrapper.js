import React from "react";

import TodoInput from "./todoInput";
import TodoList from "./todoList";

class Wrapper extends React.Component {
  state = {
    todoArray: [
    ],
    editTodoData: null,
    editTodoIndex: null,
    menu: null
  };
  setNewTodoInParent(newTodo) {
    this.setState({
      todoArray: [newTodo, ...this.state.todoArray]
    });
  }
  deleteTodoFromList(index) {
    let tempArray = [...this.state.todoArray];
    tempArray.splice(index, 1);
    this.setState({
      todoArray: tempArray
    });
  }
  getEditIndex(index) {
    this.setState({
      editTodoData: this.state.todoArray[index],
      editTodoIndex: index
    });
  }
  updateTodo(updateData) {
    let tempArray = [...this.state.todoArray];
    tempArray[this.state.editTodoIndex] = updateData;
    this.setState({
      todoArray: tempArray,
      editTodoData: null,
      editTodoIndex: null
    });
  }
  checkboxChanged(index) {
    let tempArray = [...this.state.todoArray];
    tempArray[index].isCompleted = !tempArray[index].isCompleted;
    this.setState({ todoArray: tempArray });
  }
  setMenuToAll() {
    this.setState({ menu: null });
  }
  setMenuToActive() {
    this.setState({ menu: false });
  }
  setMenuToCompleted() {
    this.setState({ menu: true });
  }
  render() {
    return (
      <div className="w-75">
        <div className="jumbotron jumbotron-fluid p-4  mt-3 mb-4 rounded  border border-dark">
          <TodoInput
            getNewTodoFromChild={newTodo => this.setNewTodoInParent(newTodo)}
            editTodoData={this.state.editTodoData}
            updateTodo={updateData => this.updateTodo(updateData)}
          />
        </div>
        <div className="text-center mb-4">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              menu
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button
                onClick={() => this.setMenuToAll()}
                className="dropdown-item"
                type="button"
              >
                ALL
              </button>
              <button
                onClick={() => this.setMenuToActive()}
                className="dropdown-item"
                type="button"
              >
                ACTIVE
              </button>
              <button
                onClick={() => this.setMenuToCompleted()}
                className="dropdown-item"
                type="button"
              >
                COMPLETED
              </button>
            </div>
          </div>
        </div>
        <div>
          <TodoList
            todoArray={this.state.todoArray}
            sendDeleteIndex={index => this.deleteTodoFromList(index)}
            sendEditIndex={index => this.getEditIndex(index)}
            checkboxChanged={index => this.checkboxChanged(index)}
            menu={this.state.menu}
          />
        </div>
      </div>
    );
  }
}

export default Wrapper;
