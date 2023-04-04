const express = require ('express')

const app = express();

app.get('/', (req,res) => res.send("GET request"));

const PORT = process.env.PORT || 50001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
