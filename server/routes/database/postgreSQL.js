const { Router } = require("express");
const postgresql = Router();
const pg = require("pg");
const { PostgreSql } = require("../../models");

postgresql.get("/", (req, res, next) => {
  console.log("Request received...");
  PostgreSql.getRequest(res);
});

postgresql.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  PostgreSql.findById(res, req.params.id);
});

// TODO
postgresql.post("/fields", (req, res, next) => {
  console.log("ERROR");
  PostgreSql.create(res);
});

postgresql.put("/", (req, res, next) => {});

postgresql.delete("/", (req, res, next) => {});

module.exports = postgresql;
