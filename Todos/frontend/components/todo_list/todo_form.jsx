import React from 'react';

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    // initialize with expected keys in state, and empty strings/false
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateTitle(e) {
    this.setState({
      title: e.currentTarget.value
    });
  }

  updateBody(e) {
    this.setState({
      body: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state)
  }

  render() {
    return(
    <div className='todos-form'>
      <label>Title:
        <input type="text" onChange={this.updateTitle} value={this.state.title}/>
      </label>
      <label>Body:
        <input type="text" onChange={this.updateBody} value={this.state.body}/>
      </label>

      <input type="submit" value="AddItem" />

    </div>
    );
  }
}

export default TodoForm;