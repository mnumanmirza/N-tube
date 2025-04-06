import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Login } from '../API/api'; // Import the Login function from API
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

function LoginComponent() {
    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Handle input changes
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!data.username || !data.password) {
            toast.error('Username aur password bharain.');
            return;
        }
        try {
            const response = await Login(data); // Call the Login API with the form data
            console.log('Login response:', response);
            if (response.accessToken) {
                localStorage.setItem('token', response.accessToken); // Save token in localStorage
                toast.success('Login successful!'); // Show success message
                navigate('/'); // Redirect to home page
            } else {
                toast.success('Login successful!'); // Show failure message
            }
        } catch (error) {
            console.error('Login error:', error);
            if (error.response && error.response.status === 401) {
                toast.success('Login successful!'); // Show failure message for invalid credentials
            } else {
                toast.error('wrong username & Password, please try again.'); // Show generic error message
            }
        }
    };

    return (
      <div className="h-screen overflow-y-auto bg-[#121212] text-white">
        <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">
          <div className="mx-auto inline-block w-16">
        <svg
            style={{ width: '100%' }}
            viewBox="0 0 63 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z"
                stroke="#E9FCFF"
                strokeWidth="1.38962"
                strokeMiterlimit="10"
            />
            <path
                d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z"
                stroke="url(#paint0_linear_53_10115)"
                strokeWidth="6.99574"
                strokeMiterlimit="10"
                strokeLinecap="round"
            />
            <path
                d="M18.1915 27.6963C20.1641 27.6963 21.7285 28.7066 21.7285 30.9021C21.7285 33.0976 20.1621 34.2433 18.1915 34.2433H16.8854V37.8677H14.1733V27.6984H18.1915V27.6963Z"
                fill="#E9FCFF"
            />
            <path
                d="M25.2053 27.6963V35.4868H28.484V37.8657H22.4932V27.6963H25.2053Z"
                fill="#E9FCFF"
            />
            <path
                d="M35.3142 27.6963L39.4553 37.8657H36.5328L35.9162 36.1763H32.1939L31.5773 37.8657H28.6548L32.7959 27.6963H35.3101H35.3142ZM34.9143 33.5663L34.2144 31.7832C34.1582 31.6395 33.954 31.6395 33.8978 31.7832L33.1979 33.5663C33.1541 33.6767 33.2354 33.7975 33.3562 33.7975H34.756C34.8747 33.7975 34.958 33.6767 34.9143 33.5663Z"
                fill="#E9FCFF"
            />
            <path
                d="M40.9491 27.6963L42.8592 30.5188L44.7694 27.6963H48.0355L44.2132 33.2559V37.8657H41.5011V33.2559L37.6787 27.6963H40.9449H40.9491Z"
                fill="#E9FCFF"
            />
            <path
                d="M16.894 32.1396V29.9129C16.894 29.8212 16.9982 29.7671 17.0732 29.8191L18.6771 30.9315C18.7417 30.9773 18.7417 31.0731 18.6771 31.1189L17.0732 32.2313C16.9982 32.2834 16.894 32.2313 16.894 32.1375V32.1396Z"
                fill="#232323"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_53_10115"
                    x1="2.23416"
                    y1="20.3361"
                    x2="26.863"
                    y2="44.9649"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#007EF8" />
                    <stop offset="1" stopColor="#FF4A9A" />
                </linearGradient>
            </defs>
        </svg>
    </div>
              <div className="mb-6 w-full text-center text-2xl font-semibold uppercase">Play</div>
            <form className="mx-auto my-8 flex w-full max-w-sm flex-col px-4" onSubmit={handleSubmit}>
                <div className="grid ">
                    <label className='mb-1 inline-block text-gray-300'>Username:</label>
                    <div className="mb-4 rounded-lg border bg-transparent px-3 py-2 flex">
                        <input
                            type="text"
                            placeholder="Enter username"
                            name="username"
                            value={data.username}
                            onChange={handleOnChange}
                            className="w-full h-full outline-none bg-transparent"
                        />
                    </div>
                </div>

                <div>
                    <label className='mb-1 inline-block text-gray-300'>Password:</label>
                    <div className="mb-4 rounded-lg border bg-transparent px-3 py-2 flex">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            name="password"
                            value={data.password}
                            onChange={handleOnChange}
                            className="w-full h-full outline-none bg-transparent"
                        />
                        <div className="cursor-pointer text-xl" onClick={() => setShowPassword(prev => !prev)}>
                            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                        </div>
                    </div>
                </div>

                <button className="bg-[#ae7aff] px-4 py-3 text-black">
                    Login
                </button>
                <div className="text-center mt-4">
                    <span className="text-gray-500">Don't have an account? </span>
                  <Link to="/signup" className="text-blue-500 hover:underline">Register</Link>
                  </div>
            </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default LoginComponent;
