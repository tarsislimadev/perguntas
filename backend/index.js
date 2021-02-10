const http = require("http");
const parse = require("parseurl");

const { PORT: port } = require("./config");

const actions = require("./actions");

const default_action = () => ({
  message: "not found",
});

const action = (route) => actions[route.replace(/\//, "")] || default_action;

const onEnd = (text) => {
  let data = null,
    message = null;

  try {
    data = text.length > 0 ? JSON.parse(text) : null;
  } catch (e) {
    message = e.message;
  }

  return [data, message];
};

const server = http.createServer((req, res) => {
  let chunk = "";
  req.on("data", (data) => (chunk += data));

  const end = (json) => res.end(JSON.stringify(json));
  req.on("end", () => {
    const [data, message] = onEnd(chunk);
    const which = message ? "/error" : parse(req).pathname;
    end(action(which)(data || message));
  });

  res.setHeader("Content-Type", "application/json");
});

server.listen({ port }, () => console.log(`Server is on port: ${port}`));
