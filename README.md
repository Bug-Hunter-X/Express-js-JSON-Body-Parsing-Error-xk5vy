# Express.js JSON Body Parsing Error

This repository demonstrates a common error in Express.js applications where JSON data in POST request bodies is not parsed correctly, resulting in `req.body` being empty.

## Bug
The `bug.js` file contains an Express.js server that attempts to handle JSON data in a POST request. However, it lacks the necessary middleware to parse the incoming JSON data.  This leads to `req.body` remaining empty, even if a valid JSON payload is sent.

## Solution
The `bugSolution.js` file shows the corrected version.  The `express.json()` middleware is added before the POST route handler.  This middleware parses the incoming JSON data and populates `req.body` with the parsed object.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run `node bug.js`.
4. Send a POST request to `http://localhost:3000/data` with a JSON payload (e.g., using curl or Postman).
5. Observe that `req.body` is empty in the server console log.
6. Repeat steps 2-5 with `bugSolution.js` to see the corrected behavior.