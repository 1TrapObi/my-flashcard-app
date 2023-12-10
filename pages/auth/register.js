// pages/auth/register.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  // useRouter hook to navigate after successful registration
  const router = useRouter();

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would usually call an API to register the user
    // For now, we'll just log to the console and redirect
    console.log(formData);
    // Redirect to the login page or dashboard after registration
    router.push('/auth/login');
  };

  // JSX for the form, using Tailwind CSS for styling
  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="max-w-md w-full">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* ...other form inputs... */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* Include inputs for 'name' and 'password' similarly */}
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
            </button>
          </div>
          {/* ...other parts of the form... */}
        </form>
      </div>
    </div>
  );
}

  