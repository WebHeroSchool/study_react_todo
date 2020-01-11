import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from'./App.module.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { render } from 'react-dom';


// const todoItem = 'Почитать книгу';

class App extends React.Component {
  render() {
    const items = [
      {
        value: 'Почитать книгу',
        isDone: true
      },
      {
        value: 'Приготовить обед',
        isDone: false
      },
      {
        value: 'Помыть пол',
        isDone: false
      }
    ];
    
    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="s">
        <Typography component="div" style={{ backgroundColor: '#f7edf7', height: '500px', maxWidth: '600px', margin: '20px auto', padding: '20px'}} >
        <Grid container direction="column" justify="center" alignItems="space-around">
        <Grid item xs>
          <h1 className={styles.title}>Важные дела:</h1>
        </Grid>
        <Grid item s>
          <InputItem />
        </Grid>
        <Grid item xs>
          <ItemList items={items}/>
        </Grid>
        <Grid item xs>
          <Footer count={3} />
        </Grid>
        </Grid>

        </Typography>
      </Container>
    </React.Fragment>
    );
  }
}

export default App;