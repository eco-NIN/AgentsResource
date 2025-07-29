const API_BASE_URL = 'http://localhost:8000/api/v1';

class AuthService {
  constructor() {
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user') || 'null');
  }

  // 设置认证头部
  getAuthHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    
    return headers;
  }

  // 处理API响应
  async handleResponse(response) {
    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: '网络错误' }));
      throw new Error(error.detail || '请求失败');
    }
    return response.json();
  }

  // 用户注册
  async register(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(userData),
      });

      const data = await this.handleResponse(response);
      
      // 保存令牌和用户信息
      this.token = data.access_token;
      this.user = data.user;
      localStorage.setItem('token', this.token);
      localStorage.setItem('user', JSON.stringify(this.user));
      
      return data;
    } catch (error) {
      console.error('注册失败:', error);
      throw error;
    }
  }

  // 用户登录
  async login(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(credentials),
      });

      const data = await this.handleResponse(response);
      
      // 保存令牌和用户信息
      this.token = data.access_token;
      this.user = data.user;
      localStorage.setItem('token', this.token);
      localStorage.setItem('user', JSON.stringify(this.user));
      
      return data;
    } catch (error) {
      console.error('登录失败:', error);
      throw error;
    }
  }

  // 用户登出
  logout() {
    this.token = null;
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // 获取当前用户信息
  async getCurrentUser() {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        headers: this.getAuthHeaders(),
      });

      const data = await this.handleResponse(response);
      this.user = data;
      localStorage.setItem('user', JSON.stringify(this.user));
      
      return data;
    } catch (error) {
      console.error('获取用户信息失败:', error);
      this.logout(); // 如果获取失败，清除本地存储
      throw error;
    }
  }

  // 检查是否已登录
  isAuthenticated() {
    return !!this.token && !!this.user;
  }

  // 获取当前用户
  getUser() {
    return this.user;
  }

  // 获取令牌
  getToken() {
    return this.token;
  }

  // 更新用户头像
  async updateAvatar(avatarData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/avatar`, {
        method: 'PUT',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(avatarData),
      });

      const data = await this.handleResponse(response);
      
      // 更新本地用户信息
      this.user = data;
      localStorage.setItem('user', JSON.stringify(this.user));
      
      return data;
    } catch (error) {
      console.error('更新头像失败:', error);
      throw error;
    }
  }
}

// 创建单例实例
const authService = new AuthService();
export default authService; 