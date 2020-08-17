import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://localhost:44341/api/blogs';
class BlogService {
    getBlogs(){
        return axios.get(API_URL, { headers: authHeader() });
    }
}
export default new BlogService();