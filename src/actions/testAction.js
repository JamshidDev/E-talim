import {
    TEST_LIST_REAQUEST,
    TEST_LIST_SUCCESS,
    TEST_LIST_FAIL,

} from "../constans/testConstant";
import axios from "axios";

// export const listTest = () => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: TEST_LIST_REAQUEST,
//         });
//         const { userLogin: { userInfo }, } = getState();
//         console.log(typeof userInfo);
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${userInfo.token}`,
//             },
//         };

//         const { data } = await axios.get(`http://localhost:5000/api/test`, config);

//         dispatch({
//             type: TEST_LIST_SUCCESS,
//             payload: data,
//         });

//     }
//     catch (error) {
//         const message =
//             error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message;
//         dispatch({
//             type: TEST_LIST_FAIL,
//             payload: message,
//         });
//     }

// }


export const listTest = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: TEST_LIST_REAQUEST,
      });
  
      const {userLogin: { userInfo },} = getState();
      let{ token} = JSON.parse(userInfo);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.get(`http://localhost:5000/api/test`, config);
      dispatch({
        type: TEST_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: TEST_LIST_FAIL,
        payload: message,
      });
    }
  };