"use client";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm, Resolver } from "react-hook-form";
import { FieldErrors } from "react-hook-form";

type formValues = {
  name: string;
  email: string;
  message: string;
};

const resolver: Resolver<formValues> = async (values) => {
  const errors: FieldErrors<formValues> = {};

  if (!values.name) {
    errors.name = { type: "required", message: "Name is required" };
  }
  if (!values.email) {
    errors.email = { type: "required", message: "Email is required" };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = { type: "pattern", message: "Invalid email address" };
  }
  if (!values.message) {
    errors.message = { type: "required", message: "Message is required" };
  }

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};

const ContactComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>({ resolver });
  const onsubmit = handleSubmit((data) => console.log(data));

  return (
    <section className="bg-gray-950 p-6 md:px-20">
      <h2 className="text-4xl font-bold my-10">CONTACT ME</h2>
      <div className="grid  md:grid-cols-[1fr_3fr] gap-10 max-w-6xl mx-auto">
        <div className=" p-6 bg-gray-900 rounded-lg">
          <div className="flex gap-6 mb-6">
            <FaMapMarkerAlt size={24} />
            <div>
              <h3 className="font-semibold">Address :</h3>
              <p> Kolkata,West bengal,India</p>
            </div>
          </div>
          <div className="flex gap-6 mb-6">
            <FaPhone size={24} />
            <div>
              <h3 className="font-semibold">CONTACT NUMBER:</h3>
              <p>+1234321321</p>
            </div>
          </div>
          <div className="flex items-start gap-6 mb-8">
            <FaEnvelope size={24} />
            <div>
              <h3 className="font-semibold">EMAIL US:</h3>
              <p>websitename@mail.com</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <FaFacebook
              size={28}
              className="cursor-pointer hover:text-blue-600"
            />
            <FaXTwitter
              size={28}
              className="cursor-pointer hover:text-gray-500"
            />
            <FaLinkedin
              size={28}
              className="cursor-pointer hover:text-blue-500"
            />
            <FaGithub
              size={28}
              className="cursor-pointer hover:text-gray-500"
            />
          </div>
        </div>
        <div>
          <form onSubmit={onsubmit}>
            <div className="mt-4">
              <label className="block font-medium">Full Name</label>
              <input
                {...register("name")}
                placeholder="Your Name"
                className="p-2 border rounded w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div className="mt-4">
              <label className="block font-medium">Email</label>
              <input
                {...register("email")}
                placeholder="Your Email"
                className="p-2 border rounded w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="mt-4">
              <label className="block font-medium">Your Message</label>
              <textarea
                {...register("message")}
                placeholder="Write Your Message"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-6 py-2 mt-4 rounded-md hover:bg-blue-600"
            >
              Send Me Message ✉️
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComp;
