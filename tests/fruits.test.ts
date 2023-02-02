import app from "index";
import supertest from "supertest";

const server = supertest(app);

describe("GET / fruits", () => {
  it("it should return a list of fruits", async () => {
    const response = await server.get("/fruits")
    
    expect(response.body).toEqual([{
      id: expect.any(Number),
      name: expect.any(String),
      price: expect.any(Number)
    }])
  })
})

describe("get / fruits:id", () => {
  
  it("it should return the corresponding fruit of the id asked ", async () => {
    const response = await server.get("/fruits/1");

    expect(response.body).toMatchObject(
      {
        id:1,
        name: "abacate",
        price: 3
      })
  })
})
