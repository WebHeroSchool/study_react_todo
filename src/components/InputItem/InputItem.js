import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';
import styles from'./InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });

    this.props.onClickAdd(this.state.inputValue);
  }

  render() {
    const { onClickAdd } = this.props;

    const condition = this.props.hasError;
		let formHelperText;
		if (condition) {
			formHelperText = 'Поле ввода не может быть пустым'
		} else {
			formHelperText = ''
    }	
    
    return (<Grid>
      <div>
        <TextField
          id="standard-with-placeholder"
          label="Добавьте задание"
          placeholder="Ваше задание"
          margin="normal"
          fullWidth="true"
          value={this.state.inputValue}
          onChange={event => this.setState({ inputValue:event.target.value })}
        />

        <div className={styles.warning}>
          {formHelperText}
        </div>
			</div>


      <Button style={{margin: '10px auto'}} 
        variant="outlined"
        color="secondary"
        margin="normal"
        fullWidth="true"
        onClick={this.onButtonClick}
      >
        Добавить задание
      </Button>                                    
    </Grid>);
  }
}
                       
export default InputItem;