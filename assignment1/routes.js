const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Main Page</title></head>");
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>User Page</title></head>");
    res.write(
      "<body><ul><li>User1</li><li>User2</li><li>User3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
    });
    res.statusCode = 302;

    //this header redirect the page to the preffered location
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports = requestHandler;
