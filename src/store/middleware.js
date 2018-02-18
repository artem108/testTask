export const loggerData = (state) => (next) => (action) => {
  console.log('Logged action: ', action.type);
  console.log('Data in action is: ', action.data);
  next(action)
}
