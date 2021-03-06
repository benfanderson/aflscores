function createTitle(param) {
  if (Number.isInteger(param)) {
    const title = ` Round ${param}`;
    return title;
  }
  const title = param;
  return title;
}

export default createTitle;
