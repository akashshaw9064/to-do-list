import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import { useState,useEffect } from 'react';

function App() {
  let init;
  if(localStorage.getItem("todos")===null){
    init=[];
  }
  else{
    init=JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, settodos] = useState(init);
  const onDelete = (todo)=>{
    console.log("I am onDelete of",todo);
    settodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const addTodo =(title,desc) => {
    const myTodo = {
      sno: todos.length===0?1:todos[todos.length-1].sno+1,
      title: title,
      desc: desc
    };
    settodos([...todos,myTodo])
    console.log(myTodo);
  }
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },
    [todos]
  );
  const showAbout = ()=>{   
    console.log("About page triggered");
  }
  return (
    <div>
      <Navbar title="ToDo List" searchBar ={true} showAbout={showAbout}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
