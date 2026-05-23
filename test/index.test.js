import { test,describe,expect } from "vitest";
import request from "supertest";
import { app } from "..";

describe('Tests the get todos api', () => {
  test('should get the todo',async() => {
    //Arrange
    const id = 1;
    const enpoint = `/api/v1/todo/${id}`;

    //Act
    const res = await request(app).get(`${enpoint}`);

    //Assert
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      data: {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
            }
    });

  });

  test('should give an error',async() => {
    //Arrange
    const enpoint = '/api/v1/todo/createTodo'; 
    const userPayload = {
      tile: "clean dishes", //using tile instead of title
      description: "clean the dishes before mom comes back"
    }

    //Act
    const res = await request(app).post(`${enpoint}`).send(userPayload);
    console.log("error is:",res.text);
 
    expect(res.status).toBe(500);
  })

})


