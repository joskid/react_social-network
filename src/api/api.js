import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': '1485309f-39bf-4f40-bd50-88a179c90f9c'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.');
        return profileAPI.getProfile(userId); // обратная совместимость на другую АПИ.
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data);
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}); // или просто , {status}
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },

};

