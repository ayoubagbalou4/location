import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/users/login', {
        email,
        password
      });

      if (response.data.status) {
        navigate('/dashboard');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Login failed');
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
                <form onSubmit={handleLogin}>
                  <div className="row y-gap-20">
                    <div className="col-12">
                      <h1 className="text-22 fw-500">Welcome back</h1>
                      <p className="mt-10">Don't have an account yet? <a href="/register" className="text-blue-1">Sign up for free</a></p>
                    </div>

                    {error && (
                      <div className="col-12">
                        <div className="text-red-1">{error}</div>
                      </div>
                    )}

                    <div className="col-12">
                      <div className="form-input">
                        <input 
                          type="text" 
                          required 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="lh-1 text-14 text-light-1">Email</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-input">
                        <input 
                          type="password" 
                          required 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="lh-1 text-14 text-light-1">CIN</label>
                      </div>
                    </div>

                    {/* <div className="col-12">
                      <a href="#" className="text-14 fw-500 text-blue-1 underline">Forgot your password?</a>
                    </div> */}

                    <div className="col-12">
                      <button 
                        type="submit" 
                        className="button py-20 -dark-1 bg-blue-1 text-white w-full"
                        disabled={loading}
                      >
                        {loading ? 'Signing In...' : 'Sign In'}
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
                    <div className="text-center px-30">By creating an account, you agree to our Terms of Service and Privacy Statement.</div>
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
              <div className="row y-gap-20  flex-wrap items-center">
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

export default Login;