const createTitle = (param: string | number) => (Number.isInteger(param) ? `Round ${param}` : param);

export default createTitle;
