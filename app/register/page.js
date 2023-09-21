import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

export default function Register() {
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row h-screen">
                <div className="grid flex-grow h-full w-full bg-neutral place-items-center">
                    <div className="place-self-start m-3">
                        <Link href={`/`}>
                            <button className="btn btn-circle btn-outline text-neutral-content">
                                <FontAwesomeIcon icon={faHouse} beat size="xl" />
                            </button>
                        </Link>
                    </div>
                    <div className="px-5 mb-10">
                        <h5 className="text-5xl font-bold mb-5">"The first rule of management is delegation. Don't try and do everything
                            yourself because you can't."
                        </h5>
                        <p>- Anthea Turner</p>
                    </div>
                </div>
                <div className="grid flex-grow h-full w-full bg-white place-items-center">
                    <div className="justify-self-end place-self-start m-3">
                        <Link href={`/login`}>
                            <button className="btn btn-outline text-neutral">
                                Login
                            </button>
                        </Link>
                    </div>
                    <div>
                        <div className="text-neutral font-bold text-lg mb-3">Start your progress with new account.</div>
                        <div className="form-control w-full max-w-xs">
                            <div className="mb-3">
                                <label className="label">
                                    <span className="label-text">What is your name?</span>
                                </label>
                                <input type="text" placeholder="Type your name" className="input input-bordered border-neutral w-full max-w-xs text-neutral" />

                            </div>
                            <div className="mb-3">
                                <label className="label">
                                    <span className="label-text">Please, write down your email</span>
                                </label>
                                <input type="email" placeholder="Type your email" className="input input-bordered border-neutral w-full max-w-xs text-neutral" />

                            </div>
                            <div className="mb-3">
                                <label className="label">
                                    <span className="label-text">Set your password safely</span>
                                </label>
                                <input type="password" placeholder="Type your password" className="input input-bordered border-neutral w-full max-w-xs text-neutral" />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-neutral">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col xl:flex-row-reverse">
                    <div className="text-center xl:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="flex-shrink-0 w-full max-w-xl min-h-screen bg-base-100">
                        <div className="container mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}