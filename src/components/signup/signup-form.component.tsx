import Swal from "sweetalert2"
import { useForm, SubmitHandler } from "react-hook-form"

import { AppleIcon } from "../icons/apple-icon.component"
import { FacebookIcon } from "../icons/facebook-icon.component"
import { GoogleIcon } from "../icons/google-icon.component"
import { FormInput } from "../input/form-input.component"
import { SocialButton } from "../social/social-button.component"

type TInputs = {
  name: string
  email: string
  password: string
  confirm: string
}

export const SignupForm = () => {
  const { register, handleSubmit, reset } = useForm<TInputs>()

  const handleSocial = (e: Event, by: string) => {
    e.preventDefault()
    Swal.fire({
      icon: "info",
      title: "Signed-up",
      text: `with "${by}"`,
      confirmButtonText: "Ok!",
      footer:
        '<a href="https://www.rudral.com" target="_blank">👋Hey! Dont forget to visit my site👉 www.rudral.com</a>',
    })
  }

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    Swal.fire({
      icon: "success",
      title: "Signed-up",
      text: `Dear "${data.name}", welcome! Please check the console.log.`,
      confirmButtonText: "Ok!",
      footer:
        '<a href="https://www.rudral.com" target="_blank">👋Hey! Dont forget to visit my site👉 www.rudral.com</a>',
    })
    reset()
    console.log(data)
  }

  return (
    <div
      className="bg-white w-full px-5 py-10 shadow-none rounded-2xl my-10 mx-5
    md:shadow-lg md:w-auto md:px-24 md:py-20 md:mx-0"
    >
      <div className="flex flex-col items-center justify-start">
        <h2
          className="font-lato text-4xl whitespace-nowrap
        md:text-5xl"
        >
          Best Sign-up Form
        </h2>
        <div className="font-poppins font-normal text-sm text-gray-500 mt-2 mb-8">
          Super company caption here.
        </div>
        <div className="flex items-center justify-center gap-5">
          <SocialButton
            title="Sign up with Google"
            IconNode={GoogleIcon}
            onClick={(e: Event) => handleSocial(e, "Google")}
          />
          <SocialButton
            title="Sign up with Apple"
            IconNode={AppleIcon}
            onClick={(e: Event) => handleSocial(e, "Apple")}
          />
          <SocialButton
            title="Sign up with Facebook"
            IconNode={FacebookIcon}
            onClick={(e: Event) => handleSocial(e, "Facebook")}
          />
        </div>
      </div>
      <div className="relative w-full flex items-center justify-center my-5 text-xs font-poppins text-gray-500 font-medium">
        <div className="w-full absolute left-0 top-1/2 bg-gray-200 h-[1px] z-0 -translate-y-[1px]"></div>
        <div className="bg-white px-4 py-1 z-20">OR</div>
      </div>
      <form
        className="flex flex-col items-center justify-center gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          register={register}
          id="name"
          type="text"
          placeholder="Full Name"
        />
        <FormInput
          register={register}
          id="email"
          type="email"
          placeholder="Email"
        />
        <FormInput
          register={register}
          id="password"
          type="password"
          placeholder="Password"
        />
        <FormInput
          register={register}
          id="confirm"
          type="password"
          placeholder="Confirm Password"
        />
        <button
          className="bg-primary text-white px-4 py-4 w-full text-center rounded-md text-xl font-poppins font-semibold mt-4 duration-100 ease-linear
          hover:bg-secondary hover:shadow-lg hover:scale-105
          active:shadow-inner active:bg-primary active:scale-95
          focus:shadow-inner focus:bg-primary focus:scale-95"
        >
          Sign Up!
        </button>
      </form>
    </div>
  )
}
