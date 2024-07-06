import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import './index.css'
import React, { useEffect, useState } from 'react';
import SearchItem from './SearchItem';

function App() {
  
  // used for input field useState
  const [newItem, setNewItem] = useState("");

  // const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list")));
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list")) || []);

  const [search, setSearch] = useState('');

  const storedTheme=localStorage.getItem('theme') || 'light'
  const [theme,setTheme]=useState(storedTheme)

  const [showCongrats, setShowCongrats] = useState(false);

  const toggleTheme = () =>{
    // setTheme((prevTheme)=>(prevTheme==='light'? 'dark':'light'));
    const newTheme=theme==='light'? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme',newTheme);
  }

  useEffect(()=> {document.body.className=theme;},[theme]);

  //used to update our list items
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const listitem = [...items, addNewItem]
    setItems(listitem)
    localStorage.setItem("todo_list", JSON.stringify(listitem))
  }

  const hanldleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem("");
  }

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(updatedItems);
    localStorage.setItem("todo_list", JSON.stringify(updatedItems));

    // Check if all items are checked
    if (updatedItems.every(item => item.checked)) {
      setShowCongrats(true);
      // Reset the congratulatory message after a delay (e.g., 5 seconds)
      setTimeout(() => setShowCongrats(false), 5000);
    }
  }

  const handleDelete = (id) => {
    const listitem = items.filter((item) =>
      item.id !== id)
    setItems(listitem)
    localStorage.setItem("todo_list", JSON.stringify(listitem))
  }


  return (
    <div className='App'>
      <Header title="TO DO LIST" theme={theme} toggleTheme={toggleTheme}/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        hanldleSubmit={hanldleSubmit} />
      <SearchItem
        search={search}
        setSearch={setSearch} />
      <Content items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
      <Footer length={items.length} />
      {showCongrats && (
        <div className="congrats-message">
          <p>Wonderful 🌟 Successfully completed today's tasks 🎉</p>
        </div>
      )}
    </div>
  );
}

export default App;
