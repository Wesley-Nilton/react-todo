import {useState, useEffect} from 'react';
import {BsTrash, BsBookmarkChek, BsBookMarkChekFill} from 'react-icons/bs';
import './App.css';

const API = 'https://my-json-server.typicode.com/Wesley-Nilton/react-todo/db';

function App() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <h1>Todo</h1>
    </div>
  )
}

export default App;