import axios from "axios";

const intstance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: { "API-KEY": "a9cf1604-ec96-406a-9f8c-365df646aeaf" }
})


export const usersApi = {
   getUsers(currentPage = 1, pageSize = 10) {
      return intstance.get(`users?page=${currentPage}& count=${pageSize}`)
         .then(response => {
            return response.data
         });
   },

   follow(usersId) {
      return intstance.post(`follow/${usersId}`)
   },

   unfollow(usersId) {
      return intstance.delete(`follow/${usersId}`)
   },

   getProfile(userId) {
      console.log('не пользуйся этим методом')
      return profileApi.getProfile(userId);
   }
}



export const profileApi = {
   getProfile(userId) {
      return intstance.get(`profile/` + userId)
   },
   getStatus(userId) {
      return intstance.get('profile/status/' + userId)
   },
   updateStatus(status) {
      return intstance.put('profile/status', { status: status })
   },
}

export const autApi = {
   me() {
      return intstance.get(`auth/me/`)
   },
   login(email, password, rememberMe = false) {
      return intstance.post(`auth/login`, { email, password, rememberMe })
   },
   logout() {
      return intstance.delete(`auth/login`)
   }

}