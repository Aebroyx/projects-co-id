export default function Navbar() {
    return(
        <>
            <nav className="bg-white text-secondary px-[122px] py-[24px] flex justify-center items-center gap-[26px]">
                <img src="/logo.svg" alt="logo" />
                <input type="text" placeholder="What service are you looking for....." class="input input-bordered w-full max-w-xs bg-white" />
                <button className="flex gap-2">
                    <h1>Work</h1>
                    <img src="/arrowdown.svg" alt="logo" className="pt-1"/>
                </button>
                <button className="flex gap-2">
                    <h1>Hire</h1>
                    <img src="/arrowdown.svg" alt="logo" className="pt-1"/>
                </button>
                <button className="flex gap-2">
                    <h1>More</h1>
                    <img src="/arrowdown.svg" alt="logo" className="pt-1"/>
                </button>
                <button className="btn btn-ghost">Sign Up</button>
                <button class="btn bg-primary text-white">Sign In</button>
            </nav>
        </>
    )
}