import React, { useState } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function BookingPage() {
  const [selectedUnit, setSelectedUnit] = useState({});
  const [unitCount, setUnitCount] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryOptions, setDeliveryOptions] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleDeliveryOptionChange = (method) => {
    setDeliveryOptions(method);
  };

  const { id } = useParams();

  const handleUnitCountChange = (count) => {
    setUnitCount(count);
    const ticketPrice = getTicketPrice(); // Ensure getTicketPrice is defined
    const total = count * ticketPrice;
    setTotalAmount(total);
  };

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces")
      .required("Name is required")
      .max(15),
    email: yup.string().email("Invalid email").required("Your email is required"),
    address: yup.string().required("Your Street Address is required"),
    phone_no: yup
      .string()
      .required("Phone number is required")
      .typeError("Please enter a number")
      .matches(/^\+\d{12}$/, "Phone number must be in the format +254xxxxxxxxx"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_no: "",
      address: "",
      unit_type: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("units", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        if (res.status === 200) {
          formik.resetForm();
        }
      });
    },
  });

  return (
    <div className="flex flex-col justify-start items-center bg-slate-100 rounded-md dark:text-white dark:border-white border mt-10 mb-10 w-1/3 mx-auto p-6">
      <form
        onSubmit={formik.handleSubmit}
        className="bookunit-form text-black text-base"
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="form-control placeholder-gray-400 p-2 ml-2"
            placeholder="John Doe"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <p className="error-msg text-red-500">{formik.errors.name}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            className="form-control placeholder-gray-400 p-2 ml-2"
            placeholder="johndoe@gmail.com"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <p className="error-msg text-red-500">{formik.errors.email}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="phone_no" className="form-label">
            Phone
          </label>
          <input
            id="phone_no"
            name="phone_no"
            className="form-control placeholder-gray-400 p-2 ml-2"
            placeholder="+254700111555"
            onChange={formik.handleChange}
            value={formik.values.phone_no}
          />
          <p className="error-msg text-red-500">{formik.errors.phone_no}</p>
        </div>
        <div className="delivery-options mt-4">
          <label className="text-lime-500 mr-4">
            <input
              type="radio"
              value="with delivery"
              checked={deliveryOptions === "with delivery"}
              onChange={() => handleDeliveryOptionChange("with delivery")}
              className="mr-1"
            />{" "}
            With Delivery
          </label>
          <label className="text-red-500">
            <input
              type="radio"
              value="without delivery"
              checked={deliveryOptions === "without delivery"}
              onChange={() => handleDeliveryOptionChange("without delivery")}
              className="mr-1"
            />{" "}
            Without Delivery
          </label>
        </div>

        {deliveryOptions === "with delivery" && (
          <div className="delivery-address mt-4">
            <p className="text-orange-500
            " > Please enter the delivery address information</p>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Street Address
              </label>
              <input
                id="address"
                name="address"
                className="form-control placeholder-gray-400 p-2 ml-2"
                placeholder="Panya Ln, Kenyatta Avenue, Nairobi, Kenya"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              <p className="error-msg text-red-500">{formik.errors.address}</p>
            </div>
          </div>
        )}

        {deliveryOptions === "without delivery" && (
          <div className="delivery-address mt-4">
            <p>Scroll down to complete your payment.</p>
          </div>
        )}

        <div className="payment-methods mt-4">
          <label className="text-green-500 mr-4">
            <input
              type="radio"
              value="mpesa"
              checked={paymentMethod === "mpesa"}
              onChange={() => handlePaymentMethodChange("mpesa")}
              className="mr-1"
            />{" "}
            M-Pesa
          </label>
          <label className="text-sky-500">
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => handlePaymentMethodChange("paypal")}
              className="mr-1"
            />{" "}
            PayPal
          </label>
        </div>

        {paymentMethod === "mpesa" && (
          <div className="mpesa-instructions mt-4">
            <p>Please follow the M-Pesa payment instructions below.</p>
            <ul className="list-disc list-inside">
              <li>Go to your M-Pesa menu on your phone</li>
              <li>Select 'Lipa na M-Pesa'</li>
              <li>Select 'Paybill'</li>
              <li>Enter business number: 247247</li>
              <li>Enter account number: 0759880788</li>
              <li>Enter amount: {totalAmount}</li>
              <li>Enter your M-Pesa PIN and send</li>
              <li>You will receive a confirmation SMS</li>
            </ul>

            <input
              placeholder="Enter Mpesa message code"
              className="form-control placeholder-gray-400 mt-2"
            />
          </div>
        )}

        {paymentMethod === "paypal" && (
          <div className="mt-4">
            <p>Pay with PayPal</p>
            <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
              {/* PayPal buttons will be rendered here */}
            </PayPalScriptProvider>
          </div>
        )}

        {/* <button type="submit" className="btn btn-primary mt-4">Submit</button> */}
        <button
          type="submit"
          className="btn btn-primary mt-5 bg-orange-500 text-white py-2 px-4 rounded"
        >
          Complete Payment
        </button>
      </form>
    </div>
  );
}
