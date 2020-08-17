import axios from 'axios';

const API_URL = 'https://localhost:44341/api/accounts/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', 
      {
        userName: user.userName,
        password: user.password
      },
    //   {
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //         "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    //       }
    //   }
      )
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      userName: user.userName,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();