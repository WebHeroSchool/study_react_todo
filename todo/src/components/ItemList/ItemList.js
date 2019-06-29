import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'Приготовить обед'} /></li>
    <li><Item todoItem={'Помыть пол'} /></li>
</ul>);
                        
export default ItemList;