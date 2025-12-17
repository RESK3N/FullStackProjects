const express = require('express');
const PORT = 3000;
const app = express();
const users= require('./MOCK_DATA.json');

//routes
app.get('/api/users', (req, res) => {
    return res.json(users)
})
app.get('/users',(req,res)=> {
    const html =
        `<ul>
        ${users.map((user) => 
        `<li>${user.first_name}</li>`).join('')}
        </ul>`;
res.send(html);
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
