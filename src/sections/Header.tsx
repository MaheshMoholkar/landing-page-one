import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Logo from "@/assets/logosaas.png";

export const Header = () => {
  return (
    <header id="header" className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#testimonials">Customers</a>
              <a href="#cta">Updates</a>
              <a href="#cta">Help</a>
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
