import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import { Breadcrumb } from '@shopify/components';
import { storefront } from '@shopify/utilities';
import { getUserByHandleQuery, loginQuery } from '@shopify/graphql-queries';
import { LoginResponseModel, UserResponseModel } from '@shopify/models';

const breadcrumbList = [
  { name: 'Account', href: '/account', current: false },
  { name: 'Login', href: '/account/login', current: true },
];

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const loginResponse = await storefront<LoginResponseModel>(loginQuery, {
      input: {
        email: event.target.email.value,
        password: event.target.password.value,
      },
    });
    const token =
      loginResponse?.data?.customerAccessTokenCreate?.customerAccessToken
        ?.accessToken;
    if (token) {
      toast.success('You have been logged in successfully!');
      localStorage.setItem('token', JSON.stringify(token));
      router.push('/account');
    } else {
      toast.error('Something goes wrong!');
    }

    setLoading(false);
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));

    console.log(token);

    const getUser = async () => {
      const userResponse = await storefront<UserResponseModel>(
        getUserByHandleQuery(token)
      );
      console.log('userResponse', userResponse);
    };
    getUser();
  }, []);

  return (
    <div className="min-h-full flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Login
        </h2>
        <div className="flex justify-center">
          <Breadcrumb list={breadcrumbList} />
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
                <span className="text-red-700 ml-1">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
                <span className="text-red-700 ml-1">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:invalid:border-red-500 focus:invalid:ring-red-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-indigo-300"
              >
                Login
              </button>
            </div>

            <div className="font-medium text-sm">
              <span>{`Don't have an account?`}</span>
              <Link href="/account/register">
                <a className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
                  Register
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
