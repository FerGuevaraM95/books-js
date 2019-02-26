const express =require('express');

// Initializations
const app = express();

// Settings
app.set('port', 3000);

// Start server
app.listen(app.get('port'), () =>(
    console.log('Server on port', app.get('port'))
));
