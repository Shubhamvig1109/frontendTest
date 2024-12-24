
import axiosClient from "./axios"


const routerPrefix = 'auth/'

const AuthenticationApi = {
    userRegistration(data: any) {
        const url = `${routerPrefix}register`
        console.log("url", url);

        return axiosClient.post(url, data)
    },
    login(data: any) {
        const url = `${routerPrefix}login`
        return axiosClient.post(url, data)

    }
}

export default AuthenticationApi