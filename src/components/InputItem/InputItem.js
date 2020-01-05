import React from 'react';
import TextField from '@material-ui/core/TextField';


const InputItem = () => (<div>
      <TextField
        id="standard-with-placeholder"
        label="Добавьте задание"
        placeholder="Ваше задание"
        margin="normal"
        fullWidth="true"
      />                                    
</div>);
                         
export default InputItem;