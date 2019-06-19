require('dotenv').config();
const express = require('express'),
  cookieSession = require('cookie-session'),
  bdParser = require('body-parser');
  //expressGraphQl = require('express-graphql'),
  //schema = require('./schemaG');

  const app = express();

  // graphql setup - using graphiql
  // app.use('/graphql', expressGraphQl({
  //   schema,
  //   graphiql: true
  // }));

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


  const PORT = process.env.PORT || 8118;
  app.listen(PORT,()=>{
    console.log(`Server listen at door:${PORT}`);
  });