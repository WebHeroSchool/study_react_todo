import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });

    if (this.state.inputValue != '') {
      this.props.onClickAdd(this.state.inputValue);
    }

    else {
      window.confirm('Вы не внесли название задания. Поле добавления задания не может быть пустым');
    }
  }

  render() {
    const { onClickAdd } = this.props;

    return (<Grid>
      <TextField
        id="standard-with-placeholder"
        label="Добавьте задание"
        placeholder="Ваше задание"
        margin="normal"
        fullWidth="true"
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue:event.target.value })}
      />
    
      <Button style={{margin: '20px auto'}} 
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