const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "authors";

require("./config/mongoose.config")(db_name);

const app = express();
app.use(cors());

app.use(express.json());

require("./routes/author.routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
