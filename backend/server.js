require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDb = require("./utils/db.js");
const authRoute = require("./router/auth-router.js");
const contactRoute = require('./router/contact-router.js')
const errorMiddleware = require('./middlewares/error-middleware.js')
const adminRoute = require('./router/admin-route.js')
const PORT = process.env.PORT || 5000;

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
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  });
}).catch((err)=>{
  console.log("server is not connect");
})


