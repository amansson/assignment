import express from 'express';
import path from 'path';

const app = express();
const PORT = 4000;

app.use('/api', express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
