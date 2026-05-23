import axios from "axios"
import { beforeEach, expect, test, vi,describe } from "vitest"
import { getTodo } from ".."

vi.mock('axios');

describe('GET todo', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      params: {
        id: '1'
      }
    }

    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    }
  });

  test("should get the todo",async() => {
    const data = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
            };

    axios.get.mockResolvedValue({data});

    await getTodo(req,res);   

    expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({data,message: "data fetched"});
  })
})
