const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("get /", () => {
  it("should return http 200", async () => {
    const res = await request(server).get("/");

    expect(res.status).toBe(200);
  });
  it("should return JSON", async () => {
    const res = await request(server).get("/");

    expect(res.type).toBe("application/json");
  });
  it("should return server is working", async () => {
    const res = await request(server).get("/");

    expect(res.body).toEqual({ message: "Server is working." });
  });
});
