require('dotenv').config();
const express = require('express'),
  mongoose = require('mongoose'),
  cookieSession = require('cookie-session'),
  cors = require('cors'),
  bdParser = require('body-parser'),
  expressGraphQl = require('express-graphql'),
  schema = require('./schemaG');

  require('./models/Members');
  require('./models/Mem_leaders');

   //connect to mongoose
   mongoose.Promise = global.Promise;
   mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});
   const db_obj = mongoose.connection;
   db_obj.once('open', function() {
     console.log('MongoDB Connected...');
   });
   db_obj.on('error', console.error.bind(console, 'connection error:'));

  const app = express();
  
  app.use(cors());
  //graphql setup
  app.use('/graphql', expressGraphQl({
    schema,
    graphiql: true
  }));

  //body parser middleware - settings
  app.use(
    bdParser.urlencoded({extended: false})
  );
  app.use(bdParser.json());

app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys:[process.env.COOKIE_KEY]
  })
);

  //going production
  if(['production'].includes(process.env.NODE_ENV))
  {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve('client', 'build', 'index.html'));
    });
  }

  //test input
  app.get('/',(req,res)=>{
    res.send("home page")
  })


  const PORT = process.env.PORT || 3000;
  app.listen(PORT,()=>{
    console.log(`Server listen at door:${PORT}`);
  });