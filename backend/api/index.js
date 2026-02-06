module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ message: 'Welcome to yscode API', status: 'running' });
};
