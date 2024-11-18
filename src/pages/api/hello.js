// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });

    //example...
    //form on clien bundle and sve data on the server-side
    const email = req.body.email;
    // Then save email to your database, etc...
}
 //Try accessing it at http://localhost:3000/api/hello
