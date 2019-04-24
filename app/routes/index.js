const heroRoutes = require('./hero_routes');

module.exports = (app, db) => {
    heroRoutes(app,db);
}