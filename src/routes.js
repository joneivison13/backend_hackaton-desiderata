const route = require("express").Router();
const axios = require("axios");

const database = require("./database");

route.get("/principais-tipos-cancer", async (req, res) => {
  return res.json({
    leucemias: {
      sudeste: 35.3,
      brasil: 38.6,
    },
    tumores: {
      sudeste: 12,
      brasil: 12.4,
    },
    outros_tumores: {
      sudeste: 42.4,
      brasil: 40.9,
    },
    neoplesias: {
      sudeste: 10.3,
      brasil: 8.1,
    },
  });
});

route.get('/tempo-espera', (req, res) => {
    return res.json({
        leucemias: {
          semdiag:0,
          comdiag:38,
          diagprimeiracons:1
        },
        tumores: {
          semdiag:1,
          comdiag:45,
          diagprimeiracons:19
        },
        outros_tumores: {
          semdiag:13,
          comdiag:14,
          diagprimeiracons:14
        },
      });
})

route.get('/casos', (req, res) => {
    return res.json({
        2009:3002,
        2010:311,
        2011:324,
        2012:349,
        2013:306,
        2014:76,
        2015:40
    })
})

module.exports = route;
