import React from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";

const SignUp = () => {
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        role: yup.string().oneOf(["client"], "Invalid role").required("Role is required"),
        name: yup.string().required("Must enter a name"),
        email: yup.string().email("Invalid email").required("Must enter email"),
        password: yup.string().required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    });

    const formik = useFormik({
        initialValues: {
            role: "client", // default role
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: formSchema,
        onSubmit: () => navigate('/login'),
    });

    return (
        <div className="container mx-auto flex justify-center items-center h-screen border-t-2">
            <form className="max-w-md w-full" onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-black dark:text-white text-sm font-bold mb-2">Role</label>
                    <input
                        id="role"
                        name="role"
                        type="text"
                        value={formik.values.role}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p className="text-red-500 text-xs italic">{formik.errors.role}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-black dark:text-white text-sm font-bold mb-2">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p className="text-red-500 text-xs italic">{formik.errors.name}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-black dark:text-white text-sm font-bold mb-2">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-black dark:text-white text-sm font-bold mb-2">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-black dark:text-white text-sm font-bold mb-2">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p className="text-red-500 text-xs italic">{formik.errors.confirmPassword}</p>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
