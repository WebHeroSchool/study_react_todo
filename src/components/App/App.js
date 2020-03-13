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


class App extends React.Component {
  state = {
    items: [
      {
        value: 'Почитать книгу',
        isDone: true,
        id: 1
      },
      {
        value: 'Приготовить обед',
        isDone: false, 
        id: 2
      },
      {
        value: 'Помыть пол',
        isDone: false, 
        id: 3
      }
    ],
    count: 3,
    hasError: false
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
          newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ items: newItemList });
  };

  onClickDelete = id => {

    const newItemList = this.state.items;

    const index = newItemList.findIndex(item => item.id === id);
    if (index !== -1) {
      newItemList.splice(index, 1);
      const newCount = this.state.count - 1;
      this.setState({ items: newItemList, count: newCount});
    }
  };

  onClickAdd = value => {
    if (value !== '')
    {
      this.setState(state => 
        ({
          items: [
            ...state.items,
            {
              value,
              isDone: false,
              id: state.count + 1
            }
          ],
          count: state.count + 1,
          hasError: false
        }));
    }

    else
    {
      this.setState(state => 
        ({
          hasError: true
        }));
    }
  }

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="s">
        <Typography component="div" style={{ backgroundColor: '#f7edf7',  maxWidth: '600px', margin: '20px auto', padding: '20px'}} >
        <Grid container direction="column" justify="center" alignItems="space-around">
        <Grid item xs>
          <h1 className={styles.title}>Важные дела:</h1>
        </Grid>
        <Grid item s>
          <InputItem 
            onClickAdd={this.onClickAdd}
            hasError={this.state.hasError}
          />
        </Grid>
        <Grid item xs>
          <ItemList 
            items={this.state.items} 
            onClickDone={this.onClickDone} 
            onClickDelete={this.onClickDelete}
          />
        </Grid>
        <Grid item xs>
          <Footer />
        </Grid>
        </Grid>
        </Typography>
      </Container>
    </React.Fragment>
    );
  }
}

export default App;