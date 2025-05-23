const express = require('express');
const cors = require('cors');
const app = express();
const connectDb = require("./utils/db.js");
const authRoute = require("./router/auth-router.js");
const contactRoute = require('./router/contact-router.js')
const errorMiddleware = require('./middlewares/error-middleware.js')
const adminRoute = require('./router/admin-route.js')
const path = require("path");   
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// app.use(cors());
app.use(express.json());

app.use(cors({
  origin: ["https://dilipsingh-dev-1.onrender.com", "https://dilipsingh-dev.onrender.com"], // Your frontend URL
  credentials: true, // Allow cookies to be sent with the request
}));

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute)

// addmin routes
app.use('/api/admin/',adminRoute)

// app.use(express.static(path.join(__dirname, 'frontend/dist')));
// app.get('/{*any}', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
// });
app.use(errorMiddleware)


connectDb().then(()=>{
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://:${PORT}`);
  });
}).catch((err)=>{
  console.log("server is not connect");
})


