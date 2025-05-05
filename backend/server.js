require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDb = require("./utils/db.js");
const authRoute = require("./router/auth-router.js");
const contactRoute = require('./router/contact-router.js')
const errorMiddleware = require('./middlewares/error-middleware.js')
const adminRoute = require('./router/admin-route.js')
const PORT = process.env.PORT || 10000;

// app.use(cors());
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", // Your frontend URL
  credentials: true, // Allow cookies to be sent with the request
}));

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute)

// addmin routes
app.use('/api/admin/',adminRoute)

app.use(errorMiddleware)

connectDb().then(()=>{
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}).catch((err)=>{
  console.log("server is not connect");
})


