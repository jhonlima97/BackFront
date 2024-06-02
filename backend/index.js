const server = require("./server");
const { PORT, MONGO_URI } = require("./config");
const mongoose = require("mongoose");

mongoose
    .connect(MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Code App Back-End Running on port ${PORT}`);
        });
    })
    .catch(console.log);

// Ejecutar en la terminal con: npm start o npm run dev