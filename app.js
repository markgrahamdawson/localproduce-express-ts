"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/locations', (req, res) => {
    const locations = {
        location01: {
            type: 'stall',
            location: '51,-3',
            statuse: 'stocked'
        },
        location02: {
            type: 'shop',
            location: '52,-4',
            statuse: 'notstocked'
        }
    };
    res.type('text/plain');
    res.status(200).send(locations);
});
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('home - check out /locations');
});
// custom 404 page
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});
app.listen(port, () => console.log(`Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`));
