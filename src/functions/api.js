function result(message) {
  return {
    status: "ok",
    message,
    type: "success",
  };
}

function error(message) {
  return {
    status: "ok",
    message,
    type: "success",
  };
}

export { error, result };
