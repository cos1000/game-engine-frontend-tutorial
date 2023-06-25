import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

const UserContext = React.createContext();

function TestingRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const initialTodos = [
  {id: 1,title: "Todo 1",complete: false,},
  {id: 2,title: "Todo 2",complete: false,},
];


function ShowCount() {
  const user = React.useContext(UserContext); 
  const count = React.useRef(0)

  React.useEffect(() => {
    count.current += 1;
  });

  return (<label>{`New User (${user}) Counter: ${count.current}`}</label>); 
}

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          console.log("Todo Complete Flag: "+todo.complete); 
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function TestingHook() {
  const [name, setName] = React.useState("Matt");
  const [timer, setTimer] = React.useState(0);
  const [todos, dispatch] = React.useReducer(reducer, initialTodos);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer((count) => count + 1);
    }, 1000);
  });

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <UserContext.Provider value={name}>
      <form onSubmit={handleSubmit} >
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>
        <label>Timer: {timer}</label><br/>
        <ShowCount />
        {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
        <input type="submit" />
      </form>
    </UserContext.Provider>
  );
}

class TestingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: "This is Testing Component.", color: "yellow"};
  }
  componentDidMount() {
    console.log("Component Did Mount"); 
    setInterval(() => {
      let newColor = this.props.updatedColor; 
      if (this.state.color === this.props.updatedColor) {
        newColor = this.props.color;
      }
      this.setState({ color: newColor }); 
    }, 2000)
  }
  static getDerivedStateFromProps(props, state) {
    console.log(state.color);
    return {};
  }
  shouldComponentUpdate() {
    console.log("Checking should component update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get Snapshot Before Update");
    document.getElementById("history").innerHTML = "<h6>Before the update, the component background color should be <span style='color:"+prevState.color+"'>" + prevState.color + "</span></h6>";
  }
  render() {
    const myStyle = { color: this.state.color }; 
    return (
      <div>
        <h1 style={myStyle}>{this.state.content}</h1>
        <div id="history"></div>
        <div id="current"></div>
        <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
  componentDidUpdate() {
    console.log("Component Did update"); 
    document.getElementById("current").innerHTML = "<h6>After updated, teh component background color changed to <span style='color:"+this.state.color+"'>" + this.state.color + "</span></h6>";
  }
  changeColor = () => {
    this.setState({color: "yellow"});
  }
}

export {TestingComponent, TestingHook, TestingRouter}; 

