import Image from "next/image";
import logo from "@/assets/logosaas.png";
import SocialInstagram from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPinterest from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialX from "@/assets/social-x.svg";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black text-[#BCBCBC] text-sm py-10 text-center"
    >
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-1 before:bottom-0 before:blur before:absolute before:w-full before:h-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F081,#F2D8FE)]">
          <Image src={logo} alt="Logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Customers</a>
          <a href="#pricing">Pricing</a>
          <a href="#cta">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialInstagram />
          <SocialLinkedin />
          <SocialPinterest />
          <SocialYoutube />
          <SocialX />
        </div>
        <p className="mt-6">
          &copy; 2025 Productivity App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
