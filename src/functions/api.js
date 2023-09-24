function result(message) {
  return {
    status: "ok",
    message,
    type: "success",
  };
}

function error(message) {
  return {
    status: "fail",
    message,
    type: "error",
  };
}

export { error, result };
