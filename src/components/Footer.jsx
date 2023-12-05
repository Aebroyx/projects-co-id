import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";




export default function Footer(){
    return(
        <footer className="footer p-10 bg-base-200">
            <nav className="gap-3 text-secondary">
                <header className="footer-title ">
                    <img src="logo.svg" alt="gambar"/>
                    </header> 
                <a className="link link-hover ">Buana Hilltop View Residence C2-6 Bandung 40618</a>
                <span className="link link-hover flex">
                    <IoCallOutline className="text-lg" />
                (022) 6902 1117
                </span>
                <span className="link link-hover flex">
                <MdMailOutline className="text-lg" />contact@projects.co.id
                </span>
            </nav> 
            <nav className="text-secondary">
                <header className="font-black text-projectblack">About Us</header> 
                <a className="link link-hover">Our Company</a>
                <a className="link link-hover">Manager</a>
                <a className="link link-hover">Privaci & Policy</a>
            </nav> 
            <nav className="text-secondary">
                <header className="text-projectblack font-black">Support</header> 
                <a className="link link-hover">Live Chat</a>
                <a className="link link-hover">WhatsApp</a>
                <a className="link link-hover">FAQ</a>
            </nav> 
            <form>
                <header className="text-projectblack font-black">Keep In Touch</header> 
                <fieldset className="form-control w-80">
                <label className="label">
                </label> 
                <div className="join">
                    <input type="text" placeholder="Your Email Addres" className="input text-secondary input-bordered join-item" /> 
                    <button className="btn text-white font-white join-item bg-primary w-[103px]">Send</button>
                </div>
                </fieldset>
            </form>
        </footer>
    )
}