import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      ourList: []
    };
  }

  // save the in state in a list
  formClick = e => {
    e.preventDefault();
    let ourList = [...this.state.ourList];
    ourList.push(this.state.text);
    this.setState({
      ourList: ourList
    });
    console.log(this.state.ourList);
  };

  // save the users input in state as text
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // create a list of items to do
  // check for the item with which the delete button was pressed
  // remove that item from the list
  // set state ourList with the modified list
  DeleteClick = e => {
    let ourList = this.state.ourList.map(item => {
      console.log(item);
      if (item !== e) {
        return item;
      }
    });
    console.log(ourList);
    this.setState({
      ourList: ourList
    });
  };
  render() {
    return (
      <div className="App">
        <h1>To-Do app</h1>
        <form id="our-form" onSubmit={this.formClick}>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>Create item</button>
        </form>

        <h3>Need To Do</h3>
        <ul>
          {/*
        loop throgh this.state.ourlist
        create a list div for every true item in state
      */}
          {this.state.ourList.map(e =>
            e ? (
              <li>
                {e}
                <button
                  onClick={() => {
                    this.DeleteClick(e);
                  }}
                >
                  Delete
                </button>
              </li>
            ) : (
              <></>
            )
          )}
        </ul>
      </div>
    );
  }
}

export default App;
