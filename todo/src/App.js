import React from 'react';

                   
const ItemList= () => (<ol>
                        <li>First task</li>
                       <li>Second task</li>
                       <li>Last task</li>
                       </ol>);
                       
const App = () => (<div>
                   <h1>This is my item list:</h1>
                   <ItemList />
                   </div>);

export default App;