import express from 'express';

const app = express();

app.get('/', (req,res) => res.send("GET request"));

//Defining Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
