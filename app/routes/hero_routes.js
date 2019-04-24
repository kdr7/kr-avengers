module.exports = (app, db) => {
    app.post('/heroes', (req, res) => {
        res.send('Whatever it takes.')
    });
};