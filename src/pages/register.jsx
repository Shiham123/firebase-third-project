import { useContext } from 'react';
import { AppContext } from '../context/useContext';

const RegisterPage = () => {
  const context = useContext(AppContext);
  const { createUserEmailPassword, emailVerification } = context;

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailValue = event.target.email.value;
    const passwordValue = event.target.password.value;

    createUserEmailPassword(emailValue, passwordValue)
      .then((result) => {
        console.log(result);
        emailVerification()
          .then(() => alert('email verification send'))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
