type TProps = {
  id: string
  type?: string
  register: any
  placeholder: string
  [x: string]: any
}

export const FormInput = ({
  id,
  type,
  placeholder,
  register,
  ...otherProps
}: TProps) => {
  return (
    <input
      {...register(id, { required: true })}
      required
      type={type || "text"}
      placeholder={placeholder}
      className="bg-transparent font-poppins font-normal outline-none py-2 px-5 w-full text-lg text-gray-600 border-2 rounded-md border-gray-300
              placeholder:text-gray-400  placeholder:text-base
              focus:border-primary"
      {...otherProps}
    />
  )
}
