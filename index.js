const Vault = require("node-vault");
const express = require("express");
const axios = require("axios")

const API_KEY = process.env["API_KEY"] || undefined;

try
{
    const app = express();
    const port = process.env["PORT"];

    app.get("/", async (req, res) => {
        if(API_KEY === undefined) {
            res.send(JSON.stringify(
                {"error": "API_KEY environment variable is not set"},
                null,
                "\n"
            ));
            return;
        }

        axios.get(
            "https://secrets-research-api.andyhunt.dev.cloudpipelineapps.digital",
            {
                auth: {
                    username: "api_key",
                    password: API_KEY
                }
            }
        ).then(result => {
            res.send(result.data);
        }).catch(err => {
            res.send(err);
        })
    })

    app.listen(port, () => {
        console.info(`Listening on localhost:${port}`);
    })
} catch(ex) {
    console.log(ex)
}
