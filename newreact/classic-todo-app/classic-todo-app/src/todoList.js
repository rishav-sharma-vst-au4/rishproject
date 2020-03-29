import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div className="active">
      <ul className="list-group ">
        {this.props.todoArray.map((todo, index) => {
          if (
            this.props.menu === null ||
            this.props.menu === todo.isCompleted
          ) {
            return (
              <li
                key={index}
                className={
                  (todo.isCompleted &&
                    "list-group-item mb-2 border border-success") ||
                  "list-group-item mb-2 border border-danger"
                }
              >
                <input
                  onChange={() => this.props.checkboxChanged(index)}
                  checked={(todo.isCompleted && true) || false}
                  type="checkbox"
                ></input>
                <span className=" ml-3 font-weight-bold">
                  {todo.title}
                  <span className="ml-3 bg-warning">{todo.date}</span>
                </span>
                <span className=" float-right badge pl-3 pr-3 badge-dark  badge-pill">
                  <span>
                    <button
                      className="btn btn-danger btn-sm "
                      onClick={() => this.props.sendDeleteIndex(index)}
                    >
                      delete
                    </button>
                  </span>
                  <span className="ml-3">
                    <button
                      className="btn btn-info btn-sm "
                      onClick={() => this.props.sendEditIndex(index)}
                    >
                      edit
                    </button>
                  </span>
                </span>
              </li>
            );
          }
        })}
      </ul></div>
    )
   }
  }

export default TodoList;
