import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { PageInfo } from "@/typings";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  pageInfo: PageInfo;
};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const id = toast.loading("Sending...");

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          toast.update(id, {
            render: "Sent!",
            type: "success",
            isLoading: false,
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.update(id, {
            render: "Sent!",
            type: "error",
            isLoading: false,
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );
  };

  return (
    <>
      <div
        className="h-screen relative flex flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center font-ptsans"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl font-ubuntu">
          Contact
        </h3>
        <div className="flex flex-col space-y-10">
          <h4 className="text-4xl font-semibold text-center">
            I&apos;ve got just what you need.&nbsp;
            <span className="decoration-[#D90724]/50 underline underline-offset-8">
              Let&apos;s Talk.
            </span>
          </h4>
          <div className="space-y-10">
            {/* <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#D90724] h-7 w-7 animate-pulse" />
              <p className="text-2xl">{pageInfo.phoneNumber}</p>
            </div> */}
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#D90724] h-7 w-7 animate-pulse" />
              <p className="text-2xl">{pageInfo.email}</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#D90724] h-7 w-7 animate-pulse" />
              <p className="text-2xl">{pageInfo.address}</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#D90724] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
