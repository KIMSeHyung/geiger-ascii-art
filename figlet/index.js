const bodyParser = require("body-parser");
const express = require("express");
const utill = require("util");
const exec = utill.promisify(require("child_process").exec);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get("/geiger/:str", async (req, res) => {
  try {
    const str = req.params.str;
    const { stdout } = await exec(`echo ${str} | figlet`);
    res.send(stdout);
  } catch (e) {
    res.send("Error! Please retry again");
  }
});

app.listen(PORT, () => {
  console.log(`listening on port : ${PORT}`);
});
