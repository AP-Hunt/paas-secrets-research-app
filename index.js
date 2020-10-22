const Vault = require("node-vault");
const express = require("express");

// const VCAP_APPLICATION = process.env["VCAP_APPLICATION"]
// const vcapplicationJson = JSON.parse(VCAP_APPLICATION);
// const APP_ID = vcapplicationJson["application_id"];
// const APP_INSTANCE = process.env["CF_INSTANCE_INDEX"];

try
{
    // var vaultClient = Vault({
    //     endpoint: 'http://localhost:9999'
    // });

    const app = express();
    const port = process.env["PORT"];

    app.get("/", async (req, res) => {
        res.send(JSON.stringify(process.env))
    })

    app.listen(port, () => {
        console.info(`Listening on localhost:${port}`);
    })
} catch(ex) {
    console.log(ex)
}
