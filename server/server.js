import express from 'express';


const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to internet-billing-system-admin server');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;