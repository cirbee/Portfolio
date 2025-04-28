import express from "express";

const PORTNUMBER = 4000;

const app = express();

const handleHome = (req, res) => {
    console.log("Somebody is trying to go home.");
    return res.send();
};

const handleListening = () => console.log(`Server listening on port ${PORTNUMBER}`);

app.get("/", handleHome );

app.listen(PORTNUMBER, handleListening );

