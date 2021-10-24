const express = require('express');
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
});

require('dotenv').config();

app.use(cors());
app.use(express.static('public'));
app.use(limiter);
app.set('trust proxy', 1);

app.use('/api', require('./routes'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
