import app from "../server";
import supertest from "supertest";

describe("user handler", () => {
  it("should do something something happens.", () => {
    expect(1).toBe(1);
  });
});

describe("GET /", () => {
  it("should send back some data", async () => {
    const res = await supertest(app).get("/");
    expect(res.body.message).toBe("hello");
  });
});
