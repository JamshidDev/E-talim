import {
    TEST_LIST_REAQUEST, 
    TEST_LIST_SUCCESS,
    TEST_LIST_FAIL,
} from "../constans/testConstant";

// export const testListReducer = (state = { tests: [] }, action) => {

//     switch (action.type) {
//         case TEST_LIST_REAQUEST:
//             return { loading: true };
//         case TEST_LIST_SUCCESS:
//             return { loading: false, tests: action.payload };
//         case TEST_LIST_FAIL:
//             return { loading: false, error: action.payload };
//         default:
//             return state;
//     }
// }

export const testListReducer = (state = { tests: [] }, action) => {
    switch (action.type) {
      case TEST_LIST_REAQUEST:
        return { loading: true };
      case TEST_LIST_SUCCESS:
        return { loading: false, tests: action.payload };
      case TEST_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };