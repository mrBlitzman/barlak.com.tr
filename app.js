const express = require('express');
const app = express();
const session = require('express-session');
const { MongoClient, ServerApiVersion } = require('mongodb');
const bcrypt = require('bcrypt');
const xss = require('xss');
const mongoose = require('mongoose');
const { title } = require('process');
const path = require('path');
const Schema = mongoose.Schema;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/statics', express.static(__dirname + '/views/partials/statics', {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

async function dbConnection() {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "mrBlitzman"
  });
}

dbConnection()
.then(console.log('MongoDB connection successful.'))
.catch((e) => {
  console.log('MongoDB connection is failed');
  console.error(e);
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

const postSchema = new Schema({
  title: String,
  content: String,
  date: String,
  time: String
});

const userSchema = new Schema({
  username: String,
  password: String
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

const Post = mongoose.model('Post', postSchema);
const User = mongoose.model('User', userSchema);



app.post('/loginrequest', async (req, res) => {
  const { username, password } = req.body;
  try {
    const cleanPassword = xss(password);

    const user = await User.findOne({ username });

    if (user) {
      const isMatch = await bcrypt.compare(cleanPassword, user.password);

      if (isMatch) {
        console.log('[User Entry Attempt]: Login successful');
        req.session.isLogged = true;
        res.redirect('/createpost');
      } else {
        console.log(`[User Entry Attempt]: Invalid username or password from IP ${req.ip}`);
        res.redirect('/login?error=invalid');
      }
    } else {
      console.log(`[User Entry Attempt]: Invalid username or password from IP ${req.ip}`);
      res.redirect('/login?error=invalid');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.post('/logout', (req, res) => {
  if (req.session.isLogged) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send('Failed to log out');
      }
      res.send('<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Logging Out</title> <style> body { background-color: #333; /* Dark tema arka plan rengi */ color: white; /* Metin rengi */ font-family: Arial, sans-serif; /* Font ailesi */ display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; } .loader { border: 4px solid rgba(255, 255, 255, 0.3); /* Yükleme simgesi rengi ve kalınlığı */ border-radius: 50%; border-top: 4px solid white; /* Yükleme simgesi üst kenar rengi */ width: 50px; height: 50px; animation: spin 1s linear infinite; /* Yükleme simgesi dönme animasyonu */ margin-right: 10px; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } #mydiv{ display: flex; justify-content: center; flex-direction: column; align-items: center; } </style> </head> <body> <div id="mydiv"> <h2 style="text-align: center;">Logging out...</h2> <div class="loader"></div> </div> </body> <script>setTimeout(() => {window.location.href = "/";}, 1000);</script> </html>');
    });
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { header: "portfolio"})
})

app.get('/bulletin', async (req, res) => {
  try {
    const posts = await Post.find();
    res.render('bulletin', { header: "Official Bulletin", posts: posts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.get('/contact', (req, res) => {
  res.render('contact', {header: "Contact"})
})

// Home route
app.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.render('index', { header: "Home", posts: posts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});


app.get('/createpost', (req, res) => {
  if (req.session.isLogged) {
    res.render('postshare', { header: "Create Post" });
  } else {
    res.send('Unauthorized');
  }
});

app.post('/posting', async (req, res) => {
  const { title, content } = req.body;
  try {
    const currentDate = new Date();
    const date = currentDate.toISOString().split('T')[0];
    const time = currentDate.toTimeString().split(' ')[0];

    const post = new Post({ title, content, date, time });
    const result = await post.save();
    console.log(`new post created, ID: ${result.insertedId}`);
    res.send(`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Posting...</title> <style> body { background-color: #333; color: white; font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; } .loader { width: 50px; height: 50px; border-radius: 50%; margin-right: 10px; display: inline-block; border: 4px solid transparent; border-top-color: #00ff00; animation: spin 1s linear infinite; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } #mydiv { display: flex; justify-content: center; flex-direction: column; align-items: center; } </style> </head> <body> <div id="mydiv"> <h2 class="posting" style="text-align: center;">Posting...</h2> <div class="loader"></div> <div class="completed"></div> </div> <script> setTimeout(() => { document.querySelector('.loader').style.animation = 'none'; document.querySelector('.loader').style.display = 'none'; document.querySelector('.posting').innerHTML = 'Successfully Posted!'; document.querySelector('.completed').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#00ff00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'; setTimeout(() => { window.location.href = "/"; }, 1000); }, 1000); </script> </body> </html>`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.get('/login', (req, res) => {
  let errorMessage = '';
  if (req.query.error === 'invalid') {
    errorMessage = 'Invalid username or password'; 
  }
  res.render('login', { errorMessage, header: "Log in"}); 
});


app.use((req, res) => {
  res.status(404).render('404', { url: req.originalUrl, header: "404" });
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
