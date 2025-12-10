import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
     e.preventDefault();
    console.log('Login submitted:', formData);
    navigate('/items');
  };


  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email / Username</label>
            <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email or username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password" id="password" name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p className="form-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <Link to="/" className="back-link">Back to Home</Link>

      </div>
    </div>
  );
}

export default Login;
