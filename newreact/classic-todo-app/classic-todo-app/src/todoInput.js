import React from "react";

class TodoInput extends React.Component {
  state = {
    title: "",
    date: "",
    isCompleted: false
  };

  inputTitleOnchange = event => {
    this.setState({
      title: event.target.value
    });
  };

  inputDateOnChange = event => {
    this.setState({
      date: event.target.value
    });
  };

  buttonAddOnClick() {
    if(!this.state.title){alert("Sorry , can't add/update Todo if title is Empty , Please provide a Todo title")}
    else if (!this.props.editTodoData) {
      this.props.getNewTodoFromChild(this.state);
    } else {
      this.props.updateTodo(this.state);
    }
    this.setState({ title: "", date: "", isCompleted: false });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.editTodoData &&
      this.props.editTodoData !== prevProps.editTodoData
    ) {
      var input = this.props.editTodoData.date;
      var output = input.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
      this.setState({
        title: this.props.editTodoData.title,
        date: output,
        isCompleted: this.props.editTodoData.isCompleted
      });
    }
  }

  render() {
    return (
      <div className="text-center ">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={event => this.inputTitleOnchange(event)}
            placeholder="Enter todo title here..."
            value={this.state.title}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="date"
            onChange={event => this.inputDateOnChange(event)}
            value={this.state.date}
          />
        </div>
        <div className="form-group">
          <button
            className={
              (!this.props.editTodoData && "btn btn-info") || "btn btn-warning"
            }
            onClick={() => this.buttonAddOnClick()}
          >
            {(!this.props.editTodoData && "ADD") || "UPDATE"}{" "}
          </button>
        </div>
      </div>
    );
  }
}
export default TodoInput;
