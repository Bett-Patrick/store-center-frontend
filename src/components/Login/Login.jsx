import React from "react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        role: yup.string().oneOf(["client", "admin"], "Invalid role").required("Role is required"),
        email: yup.string().email("Invalid email").required("Must enter email"),
        password: yup.string().required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            role: "client", // default role
            email: "",
            password: "",
        },
        validationSchema: formSchema,
        onSubmit: () => navigate('/'),
    });

    return (
        <div className="container mx-auto flex justify-center items-center h-screen border-t-2">
            <form className="max-w-md w-full" onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-black dark:text-white text-sm font-bold mb-2">Role</label>
                    <select
                        id="role"
                        name="role"
                        onChange={formik.handleChange}
                        value={formik.values.role}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option className="bg-blue-300" value="client">Client</option>
                        <option className="bg-blue-300" value="admin">Admin</option>
                    </select>
                    <p className="text-red-500 text-xs italic">{formik.errors.role}</p>
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
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
            </form>
        </div>
    );
};

export default Login;
