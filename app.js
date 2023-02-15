const express = require('express');

const app = express();
const users = [
    { name: 'Rini', age: 16 },
    { name: 'Kais', age: 16 },
    { name: 'Pinky', age: 18 },
    { name: 'Rohit', age: 18 },
    { name: 'polaroid', age: 19 },
    { name: 'Imran', age: 21 }


];

app.get('/', (req, res) => {
    res.send({
        msg: 'Rini is here',
    user: {}
    });
    ///200 -> ok
    //404 -> not found~
    //403 -> forbidden

});
app.get('/users', (req, res) => {
    res.send(users);
});
app.get('/users/:name', (req, res) => {
    // console.log(req.params);
    const { name } = req.params;
    // console.log(name);
    const user = users.find((user) => user.name === name);
    if (user) res.status(200).send(user);
    else res.status(404).send('Not found');


});

app.listen(4300, () => {
    console.log("System is running at 4300")
});