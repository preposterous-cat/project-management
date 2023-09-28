import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

export default function Login() {
    return (
        <div>
            <div className="flex flex-col-reverse w-full lg:flex-row h-screen">
                <div className="grid flex-grow h-full w-full bg-white place-items-center">
                    <div className="justify-self-start place-self-start m-3">
                        <Link href={`/register`}>
                            <button className="btn btn-outline text-neutral">
                                Register
                            </button>
                        </Link>
                    </div>
                    <div>
                        <div className="text-neutral font-bold text-lg mb-3">Carry on with your progress.</div>
                        <div className="form-control w-full max-w-xs">
                            <div className="mb-3">
                                <label className="label">
                                    <span className="label-text">Please, write down your email</span>
                                </label>
                                <input type="email" placeholder="Type your email" className="input input-bordered border-neutral w-full max-w-xs text-neutral" />

                            </div>
                            <div className="mb-3">
                                <label className="label">
                                    <span className="label-text">Type your password safely</span>
                                </label>
                                <input type="password" placeholder="Type your password" className="input input-bordered border-neutral w-full max-w-xs text-neutral" />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-neutral">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid flex-grow h-full w-full bg-neutral place-items-center">
                    <div className="place-self-start justify-self-end m-3">
                        <Link href={`/`}>
                            <button className="btn btn-circle btn-outline text-neutral-content">
                                <FontAwesomeIcon icon={faHouse} beat size="xl" />
                            </button>
                        </Link>
                    </div>
                    <div className="px-5 mb-10">
                        <h5 className="text-5xl font-bold mb-5">
                            "Success is not final, failure is not fatal: It is the courage to continue that counts."
                        </h5>
                        <p>- Winston S. Churchill</p>
                    </div>
                </div>
            </div>
        </div>
    )
}