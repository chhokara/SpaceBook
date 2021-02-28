// export const changeBookingInfo = (bookingInfo) => ({
//   //   type: type,
//   type: "CHANGE_BOOKING_INFO",
//   payload: bookingInfo,
// });

// we want to dispatch the data to the reducer
export const changeBookingInfo = (bookingInfo) => {
  console.log("im inside changeBookingInfo");
  return {
    type: "CHANGE_BOOKING_INFO",
    payload: bookingInfo,
  };
};
