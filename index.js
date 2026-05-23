import axios from "axios";
import express from "express"
import { pool } from "./db";

const app = express();
// performing crud operations on todos and testing them

export const getTodo = async(req,res) => {
  try {
  const {id} = req.params;
  if(!id) throw new Error("id is required");
  
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  res.status(200).json({message: "data fetched",data: response.data});
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
  
}

app.get('/api/v1/todo/:id',getTodo);

app.post('/api/v1/todo/createTodo', async(req,res) => {
  try {
    const { title,description} = req.body;

    if(!title || !description) throw new Error("title and description are required");
      
    const res = await pool.query('INSERT INTO todo (title,description) VALUES($1,$2) RETURNING *',[title,description]);

    res.status(201).json({message: "new todo created succesfully",data: res.data});

  } catch (error) {
    res.status(500).json({error: error.message});
  }
})

app.listen(8000,() => {
  console.log("app listening on port 8000");
})

export {app};
