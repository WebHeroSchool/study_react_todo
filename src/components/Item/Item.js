import React from 'react';
import classnames from 'classnames';
import styles from'./Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const Item = ({ value, isDone, onClickDone }) => (
<span>
  <Grid container direction="row" justify="space-between" alignItems="center">
    <Grid item>
      <span className={
  classnames({
        [styles.item]: true,
        [styles.done]: isDone
    })}>
        <FormControlLabel control={ <Checkbox checked={isDone} onClick={() => onClickDone(isDone)} /> } label={value} />
      </span>
    </Grid>
    {/* <Grid item>
    </Grid> */}
    <Grid item>
      <Button variant="outlined" size="small" color="primary">Удалить</Button>
    </Grid>
  </Grid>
</span>);
                    
export default Item;