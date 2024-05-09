import { usersApi } from "../API/api";


const ACCEPT_FOLLOW = 'ACCEPT_FOLLOW';
const ACCEPT_UNFOLLOW = 'ACCEPT_UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = ' SER_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = ' SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRES = 'TOOGLE_IS_FOLLOWING_PROGRES';


const initialState = {
   users: [],
   pageSize: 5,
   totalUserCount: 10,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
}


const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case ACCEPT_FOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: true };
               }
               return user;
            })
         };
      case ACCEPT_UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: false };
               }
               return user;
            })
         }
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage }
      }
      case SET_TOTAL_USERS_COUNT: {
         return { ...state, totalUserCount: action.count }
      }

      case SET_USERS: {
         return { ...state, users: [...action.users] }
      }
      case TOOGLE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching }
      }
      case TOOGLE_IS_FOLLOWING_PROGRES: {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(Id => Id !== action.userId)

         }
      }
      default:
         return state;
   }
}


export const acceptFollow = (userId) => ({ type: ACCEPT_FOLLOW, userId })
export const acceptUnfollow = (userId) => ({ type: ACCEPT_UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgres = (isFetching, userId) => ({ type: TOOGLE_IS_FOLLOWING_PROGRES, isFetching, userId })


export const getUsers = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(toogleIsFetching(true));
      dispatch(setCurrentPage(currentPage))
      usersApi.getUsers(currentPage, pageSize)
         .then(data => {
            dispatch(toogleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
         })
   }
}

export const follow = (usersId) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgres(true, usersId))
      usersApi.follow(usersId)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(acceptFollow(usersId))
            }
            dispatch(toggleFollowingProgres(false, usersId))
         })
   }
}

export const unfollow = (usersId) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgres(true, usersId))
      usersApi.unfollow(usersId)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(acceptUnfollow(usersId))
            }
            dispatch(toggleFollowingProgres(false, usersId))
         })
   }
}





export default usersReducer;



