const request = require("supertest");
const { Users } = require("../../models/usersModel");

describe("auth middleware", () => {
  let server;
  let token;
  beforeEach(() => {
    server = require("../../index");
    token = new Users().generateAuthToken();
  });
  afterEach(async () => {
    await server.close();
  });

  const exec = () => {
    return request(server)
      .post("/api/users")
      .set("x-auth-token", token)
      .send({
        name: "Mis Przytulasek",
        email: "mys@gmail.com",
        password: "lubiejebac69L*",
        isAdmin: "true"
      });
  };

  // it("return 401 if token is no provided", async () => {
  //   token = "";
  //   const res = await exec();
  //   expect(res.status).toBe(401);
  // });

  // it("return 400 if token is invalid", async () => {
  //   token = "a";
  //   const res = await exec();
  //   expect(res.status).toBe(400);
  // });

  it("return 200 if token is valid", async () => {
    const res = await exec();
    expect(res.status).toBe(200);
  });
});
