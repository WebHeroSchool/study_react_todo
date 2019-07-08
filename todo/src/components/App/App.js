import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = 'Почитать книгу';
                       
const App = () => {
    const items = [
      {
        value: 'Почитать книгу'
      },
      {
        value: 'Приготовить обед'
      },
      {
        value: 'Помыть пол'
      }
    ];
    return (
    <div>
      <h1>Важные дела:</h1>
      <InputItem />
      <ItemList items={items}/>
      <Footer count={3} />
    </div>);
}

export default App;