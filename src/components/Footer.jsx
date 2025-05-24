import { FaInstagram, FaTelegram } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 px-16 flex justify-between">
            <div className="">
                <h3 className="text-lg font-semibold mb-2">© Copyright www.albarka.net.ng. All Rights Reserved</h3>
                <span>Developed by <a href="https://www.ngit.com.ng/" target="_blank" className="text-green-500"> NGIT Software Solutions</a></span>
            </div>

            {/* Icons Section */}
            <div className="flex justify-between gap-10">
                <Link to={'/'}>
                    <FaFacebook size={40} className="bg-gray-900 hover:bg-green-600 p-2 rounded-md" />
                </Link>
                <Link to={'/'}>
                    <FaInstagram size={40} className="bg-gray-900 hover:bg-green-600 p-2 rounded-md" />
                </Link>
                <Link to={'/'}>
                    <FaXTwitter size={40} className="bg-gray-900 hover:bg-green-600 p-2 rounded-md" />
                </Link>
                <Link to={'/'}>
                    <FaTelegram size={40} className="bg-gray-900 hover:bg-green-600 p-2 rounded-md" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;