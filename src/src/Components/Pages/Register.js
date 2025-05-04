import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    prenom: '',
    email: '',
    password: '',
    acceptPromotions: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'First name is required';
    if (!formData.prenom.trim()) newErrors.prenom = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      const { confirmPassword, acceptPromotions, ...userData } = formData;
      
      const response = await axios.post('/api/users', userData);
      
      if (response.data.status) {
        // Registration successful
        // You might want to automatically log the user in here
        navigate('/login'); // Redirect to login page
      } else {
        setApiError(response.data.message || 'Registration failed');
      }
    } catch (err) {
      if (err.response) {
        if (err.response.data.error) {
          // Handle field-specific errors from backend
          setErrors(err.response.data.error);
        } else {
          setApiError(err.response.data.message || 'Registration failed');
        }
      } else if (err.request) {
        setApiError('No response from server');
      } else {
        setApiError('Error setting up registration request');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <form onSubmit={handleSubmit}>
                  <div className="row y-gap-20">
                    <div className="col-12">
                      <h1 className="text-22 fw-500">Sign in or create an account</h1>
                      <p className="mt-10">Already have an account? <a href="/login" className="text-blue-1">Log in</a></p>
                    </div>

                    {apiError && (
                      <div className="col-12">
                        <div className="text-red-1">{apiError}</div>
                      </div>
                    )}

                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={errors.name ? 'error' : ''}
                        />
                        <label className="lh-1 text-14 text-light-1">First Name</label>
                        {errors.name && <span className="text-red-1 text-12">{errors.name}</span>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="text"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          required
                          className={errors.prenom ? 'error' : ''}
                        />
                        <label className="lh-1 text-14 text-light-1">Last Name</label>
                        {errors.prenom && <span className="text-red-1 text-12">{errors.prenom}</span>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={errors.email ? 'error' : ''}
                        />
                        <label className="lh-1 text-14 text-light-1">Email</label>
                        {errors.email && <span className="text-red-1 text-12">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-input">
                        <input
                          type="text"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className={errors.password ? 'error' : ''}
                        />
                        <label className="lh-1 text-14 text-light-1">CIN</label>
                        {errors.password && <span className="text-red-1 text-12">{errors.password}</span>}
                      </div>
                    </div>

                    

                    <div className="col-12">
                      <div className="d-flex">
                        <div className="form-checkbox mt-5">
                          <input
                            type="checkbox"
                            name="acceptPromotions"
                            checked={formData.acceptPromotions}
                            onChange={handleChange}
                          />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>
                        <div className="text-15 lh-15 text-light-1 ml-10">
                          Email me exclusive Agoda promotions. I can opt out later as stated in the Privacy Policy.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="button py-20 -dark-1 bg-blue-1 text-white w-full"
                        disabled={loading}
                      >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                        {!loading && <div className="icon-arrow-top-right ml-15"></div>}
                      </button>
                    </div>
                  </div>
                </form>

                <div className="row y-gap-20 pt-30">
                  <div className="col-12">
                    <div className="text-center">or sign in with</div>

                    <button className="button col-12 -outline-blue-1 text-blue-1 py-15 rounded-8 mt-10">
                      <i className="icon-apple text-15 mr-10"></i>
                      Facebook
                    </button>

                    <button className="button col-12 -outline-red-1 text-red-1 py-15 rounded-8 mt-15">
                      <i className="icon-apple text-15 mr-10"></i>
                      Google
                    </button>

                    <button className="button col-12 -outline-dark-2 text-dark-2 py-15 rounded-8 mt-15">
                      <i className="icon-apple text-15 mr-10"></i>
                      Apple
                    </button>
                  </div>

                  <div className="col-12">
                    <div className="text-center px-30">
                      By signing in, I agree to GoTrip Terms of Use and Privacy Policy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md bg-dark-2">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-auto">
              <div className="row y-gap-20 flex-wrap items-center">
                <div className="col-auto">
                  <div className="icon-newsletter text-60 sm:text-40 text-white"></div>
                </div>
                <div className="col-auto">
                  <h4 className="text-26 text-white fw-600">Your Travel Journey Starts Here</h4>
                  <div className="text-white">Sign up and we'll send the best deals to you</div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
                <div>
                  <input className="bg-white h-60" type="text" placeholder="Your Email"/>
                </div>
                <div>
                  <button className="button -md h-60 bg-blue-1 text-white">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;