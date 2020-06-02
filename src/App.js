import React, { Component } from "react";
import "./App.css";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { text: "Buy Vegetables", key: 1 },
        { text: "Prepare Presentation", key: 2 },
      ],
      currentItem: {
        text: "",
        key: "",
      },
    };
    // this.addItem = this.addItem.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
    // this.setUpdate = this.setUpdate.bind(this);
  }
  componentDidMount() {
    console.log("Component Mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Components Updated");
    console.log(prevProps, prevState);
  }
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };
  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  };
  setUpdate = (text, key) => {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        console.log(item.key + "    " + key);
        item.text = text;
      }
      return null;
    });
    this.setState({
      items: items,
    });
  };
  render() {
    return (
      <div className="Complete">
        <h1 className="TodoName">^_^ ToDo List </h1>
        <div className="App">
          <header>
            <form id="to-do-form" onSubmit={this.addItem}>
              <input
                type="text"
                placeholder="Add Todo Item..."
                value={this.state.currentItem.text}
                onChange={this.handleInput}
              ></input>
              <button type="submit">+</button>
            </form>
            <p>{this.state.items.text}</p>

            <ListItems
              items={this.state.items}
              deleteItem={this.deleteItem}
              setUpdate={this.setUpdate}
            />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
