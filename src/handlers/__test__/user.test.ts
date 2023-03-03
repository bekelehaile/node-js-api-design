import * as user from "../user";

describe("user handler", () => {
  it("should create a new user", async () => {
    const req = { body: { username: "sunny", password: "password" } };
    const res = {
      json({ token }) {
        console.log(token);
        expect(token).toBeTruthy();
      },
    };
    await user.createUser(req, res, () => {});
  }, 10000);
});
