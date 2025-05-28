import QuizLogo from "@/assets/image/MSJA-Quiz.jpg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>    <hr /><section className="py-10">
  
    <div className="container">
      <footer>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2 mb-12 lg:mb-0 flex justify-center items-center">
            <div className="flex items-center gap-2 lg:justify-start">
              <Link href="/">
                <img
                  src={QuizLogo}
                  alt="Quiz Web Logo"
                  title="Quiz Web"
                  className="h-10"
                />
              </Link>
              <p className="text-xl font-semibold">Quiz Web</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Product</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a href="/quiz">Quiz</a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="/leaderboard">Leaderboard</a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="/pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Company</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a href="/about-us">About Us</a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="/blog">Blog</a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Resources</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a href="/help">Help Center</a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="/faq">FAQ</a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="/community">Community</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Social</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </section></>
    
  );
};

export default Footer;