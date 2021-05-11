const { Router } = require("express");
const postgresql = Router();
const pg = require("pg");
const { PostgreSql } = require("../../models");

postgresql.get("/", (req, res, next) => {
  console.log("Request received...");
  PostgreSql.getRequest(res);
});

postgresql.get("/:id", (req, res, next) => {
  PostgreSql.findById(res, req.params.id);
});

postgresql.post("/", (req, res, next) => {
  PostgreSql.create(res, req.body);
});

postgresql.put("/person/update/:id", (req, res, next) => {
  PostgreSql.updateById(res, req.body, req.params.id);
});

postgresql.delete("/person/delete/:id", (req, res, next) => {
  PostgreSql.delete(res, req.params.id);
});

postgresql.delete("/person/clearAll", (req, res, next) => {
  PostgreSql.clearAll(res);
});

module.exports = postgresql;
