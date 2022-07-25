
const 
express = require('express'),
cors = require('cors'),
appRoute = require('./routes/app-route'),
apartmentRouter = require('./routes/apartments-route'),
usersRoute = require('./routes/users-route'),
server = express(),
port = process.env.PORT || 4488,
config = require('./config/config');



// server.use(express.static("public"));
// server.use("/css", express.static(__dirname + "/public/css"));
// server.use("/js", express.static(__dirname + "/public/js"));

server.use(cors({ origin : '*'}));

server.use(express.json());

server.use('/api', appRoute);
server.use('/apartments', apartmentRouter);
server.use("/users", usersRoute)

// server.
server.listen(port, () => console.log('Server is running at port ' + port));
