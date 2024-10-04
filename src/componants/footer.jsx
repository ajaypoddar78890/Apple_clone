import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Brand icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop and Learn</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mac
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  iPad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  iPhone
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Watch
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  AirPods
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Apple Music
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple TV+
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  iCloud
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple Pay
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple Store
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Apple Store</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Find a Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Genius Bar
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Today at Apple
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple Camp
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple Store App
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For Business</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Apple and Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop for Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Business Financing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-zinc-700 my-6" />

        {/* Legal section */}
        <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-zinc-500">
            <p>
              &copy; 2024 Apple Inc. All rights reserved.
              <a href="#" className="hover:underline ml-2">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="hover:underline ml-2">
                Terms of Use
              </a>{" "}
              |
              <a href="#" className="hover:underline ml-2">
                Sales and Refunds
              </a>{" "}
              |
              <a href="#" className="hover:underline ml-2">
                Legal
              </a>
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
