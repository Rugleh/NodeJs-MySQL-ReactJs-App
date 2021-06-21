import React, { useEffect, useState } from 'react';
import './App.css';
import { getList } from '../src/services/list';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <div className="wrapper">
      <h1>Books</h1>
      <ul>
        {list.map(item => <li key={item.id}>{item.titulo}</li>)}
      </ul>
    </div>
  )
}

export default App;