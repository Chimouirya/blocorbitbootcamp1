import Link from "next/link"
import { useForm } from "react-hook-form";
export default function LForm(){
  const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
  return(
    <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username"
          {...register("username", { required: true })}></input>
        </div>
        {errors.username && <span>This field is required</span>}
        <div className="mb-6">
          <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="Enter The Password🤦"
          {...register("password", { required: true })}></input>
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        {errors.username && <span>This field is required</span>}
        <div className="flex items-center justify-between">
          < button defaultValue="test" {...register("example")}	className="w-full px-4 py-2 font-bold text-green "
									type="submit" >
            SIGNIN </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
            Forgot Password?
          </a>
        </div>
        <div className="text-center">
								<Link href="/re">
								<a>
									Register Here!
								</a></Link>
							</div>
    </div>
    </form>
  );

}