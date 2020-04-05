import React from 'react';
import classnames from 'classnames';
import styles from'./Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';


class Item extends React.Component {
  componentDidMount () {
    this.timerID = setInterval(() => console.log('утечка памяти'), 1000);
  }

  // componentDidUpdate () {
  //   console.log('componentDidUpdate');
  // }

  componentWillUnmount () {
    clearInterval(this.timerID);
  }

  render() {
    const { value, isDone, onClickDone, onClickDelete, id } = this.props;
    return (
      <span>
        <Grid 
          container direction="row"
          justify="space-between"
          alignItems="center">
        
        <Grid item>
          <span className={
            classnames({
              [styles.item]: true,
              [styles.done]: isDone
            })} 
          >
          <FormControlLabel 
            control={
              <Checkbox 
                checked={isDone}
                onClick={() => onClickDone(id)} />
            } 
            label={value} 
          />
          </span>
        </Grid>
      
          <Grid>
            <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => onClickDelete(id)} >
            Удалить
           </Button>
          </Grid>
        </Grid>
      </span>);
  }
}

export default Item;