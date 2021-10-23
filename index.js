import express from 'express';
import  mongoose  from 'mongoose';
import Post from './Post.js';

const DB_URL = 'mongodb+srv://user:user@cluster0.ic3qw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = 5000;

const app = express();

app.use(express.json())

app.post('/', async (req, res) => {
  const { author, title, content, picture } = req.body;
  const post = await Post.create({author, title, content, picture});
  res.json(post);
})

async function startApp () {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('Server strated on port ' + PORT));
  } catch (err) {
    console.log(err);
  }
}

startApp();
