import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Validation schema
const validationSchema = Yup.object({
  imgUrl: Yup.string().url('Invalid URL').required('Image URL is required'),
  size: Yup.string().oneOf(['small', 'medium', 'large'], 'Invalid size').required('Size is required'),
  sizeInSqFt: Yup.string().required('Size in sq ft is required'),
  numUnits: Yup.number().min(1, 'Must be at least 1 unit').required('Number of units is required'),
  pricePerDay: Yup.number().min(0, 'Price must be positive').required('Price per day is required'),
  description: Yup.string().required('Description is required'),
  whatCanFit: Yup.string().required('This field is required'),
});

const AddNewUnit = () => {
  const [units, setUnits] = useState([]);

  const formik = useFormik({
    initialValues: {
      imgUrl: '',
      size: '',
      sizeInSqFt: '',
      numUnits: '',
      pricePerDay: '',
      description: '',
      whatCanFit: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      
      // Handle form submission
      fetch("units", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUnits([...units, data.unit]);
          resetForm();
        } else {
          alert("Failed to add unit");
        }
      })
      .catch(() => alert("Failed to add unit"));
    },
  });

  return (
    <div className="container mx-auto p-4 flex flex-col items-center border-t-2">
      <h1 className="text-2xl font-bold mb-4">Add New Unit</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4 w-1/2 m-auto dark:text-black">
        <div>
          <label htmlFor="imgUrl" className="block text-sm font-medium dark:text-white text-gray-700">Image URL</label>
          <input
            id="imgUrl"
            name="imgUrl"
            type="text"
            className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.imgUrl}
          />
          <p className="text-red-500 text-sm">{formik.errors.imgUrl}</p>
        </div>

        <div>
          <label htmlFor="size" className="block text-sm font-medium dark:text-white text-gray-700">Size</label>
          <select
            id="size"
            name="size"
            className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.size}
          >
            <option value="" label="Select size" />
            <option value="small" label="Small" />
            <option value="medium" label="Medium" />
            <option value="large" label="Large" />
          </select>
          <p className="text-red-500 text-sm">{formik.errors.size}</p>
        </div>

        <div>
          <label htmlFor="sizeInSqFt" className="block text-sm font-medium dark:text-white text-gray-700">Size in Sq Ft</label>
          <input
            id="sizeInSqFt"
            name="sizeInSqFt"
            type="text"
            className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.sizeInSqFt}
          />
          <p className="text-red-500 text-sm">{formik.errors.sizeInSqFt}</p>
        </div>

        <div>
          <label htmlFor="numUnits" className="block text-sm font-medium dark:text-white text-gray-700">Number of Units</label>
          <input
            id="numUnits"
            name="numUnits"
            type="number"
            className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.numUnits}
          />
          <p className="text-red-500 text-sm">{formik.errors.numUnits}</p>
        </div>

        <div>
          <label htmlFor="pricePerDay" className="block text-sm font-medium dark:text-white text-gray-700">Price per Day</label>
          <input
            id="pricePerDay"
            name="pricePerDay"
            type="number"
            className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.pricePerDay}
          />
          <p className="text-red-500 text-sm">{formik.errors.pricePerDay}</p>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium dark:text-white text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <p className="text-red-500 text-sm">{formik.errors.description}</p>
        </div>

        <div>
          <label htmlFor="whatCanFit" className="block text-sm font-medium dark:text-white text-gray-700">What can fit</label>
          <textarea
            id="whatCanFit"
            name="whatCanFit"
            className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={formik.handleChange}
            value={formik.values.whatCanFit}
          />
          <p className="text-red-500 text-sm">{formik.errors.whatCanFit}</p>
        </div>

        <button
          type="submit"
          className="flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewUnit;
