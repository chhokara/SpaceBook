const initialState = {
  month: "",
  dayOfMonth: 0,
  weekDay: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName:
      return { ...state, ...payload };

    default:
      return state;
  }
};
