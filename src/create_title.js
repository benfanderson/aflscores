const createTitle = (param) => (Number.isInteger(param) ? `Round ${param}` : param);

export default createTitle;
