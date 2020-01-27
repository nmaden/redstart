import { ARCHIEVE_CHANGE } from '../constants';
const initialState = {
archieve: {}
};
const archieveReducer = (state = initialState, action) => {
switch(action.type) {
case ARCHIEVE_CHANGE:
return {
...state,
archieve:action.payload
};
default:
return state;
}
}
export default archieveReducer;