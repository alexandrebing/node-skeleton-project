
module.exports = {
    get(req, res) {
        res.status(200).send({message: "pong"});
    }
}