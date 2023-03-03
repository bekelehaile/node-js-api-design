import merge from "lodash.merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const stage = process.env.STAGE || "local";

let envConfig;

if (stage === "production") {
  envConfig = require("./prod").default;
} else if (stage === "testing") {
  envConfig = require("./stage").default;
} else {
  envConfig = require("./local").default;
}

const defaultConfig = {
  stage,
  env: process.env.NODE_ENV,
  port: 3001,
  secrets: {
    jwt: process.env.JTW_SECRET,
    dbURL: process.env.DATABASE_URL,
  },
  logging: false,
};

export default merge(defaultConfig, envConfig);
