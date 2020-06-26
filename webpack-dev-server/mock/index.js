const data = require('./data/list.js');

module.exports = function mock(app) {
    app.get('/person', (req, res) => {
        res.json({ data: data });
    });

    app.post('/person', (req, res) => {
        data[0].name = 'linjian';
        res.json({ data: data });
    })

    app.delete('/person', (req, res) => {
        data.splice(1, 1);
        res.json({ data: data });
    });
};