const initialState = {
  month: "",
  dayOfMonth: 0,
  weekDay: "",
  timeFrom: "",
  timeTo: "",
  space: "",
  roomPicUrl: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case typeName:
    case "CHANGE_BOOKING_INFO":
      console.log("reducerrrrrrrrrrrrrrrrrrrrrr: CHANGE_BOOKING_INFO");
      return { ...state, ...payload };

    default:
      return state;
  }
};

// const bookingInfoReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "CHANGE_BOOKING_INFO":
//       console.log("reducerrrrrrrrrrrrrrrrrrrrrr: CHANGE_BOOKING_INFO");
//       return { ...state, ...payload };

//     default:
//       return state;
//   }
// };

// export default bookingInfoReducer;
