import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  Container,
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
  Typography
} from '@mui/material';

function App() {
  const [text, setText] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const addToDo = () => {
    if (text) {
      setToDoList((prevState) => [
        ...prevState,
        { text, id: crypto.randomUUID(), checked: false }
      ]);
      setText('');
    }
  };

  const getHandleOnChange = (id) => {
    setToDoList((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: !item.checked
          };
        }
        return item;
      })
    );
  };
  return (
    <>
      <CssBaseline />
      <Container sx={{ textAlign: 'center' }}>
        <Typography marginTop={4} variant="h4" gutterBottom align="center">
          To Do List
        </Typography>
        <Box flexDirection="column" display="flex" alignItems="center">
          {toDoList.map((toDo) => (
            <FormControlLabel
              sx={{
                width: '100px',
                textDecoration: toDo.checked ? 'line-through' : 'none'
              }}
              control={<Checkbox />}
              label={toDo.text}
              key={toDo.id}
              checked={toDo.checked}
              disabled={toDo.checked}
              onChange={() => getHandleOnChange(toDo.id)}
            />
          ))}
        </Box>

        <Box marginTop={3}>
          <TextField
            id="outlined-basic"
            label="To Do"
            variant="outlined"
            value={text}
            onChange={handleOnChange}
          />
          <Button
            sx={{ height: '56px', marginLeft: '16px' }}
            variant="outlined"
            onClick={addToDo}
          >
            Add
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
