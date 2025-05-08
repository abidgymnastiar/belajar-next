import Image from "next/image";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="">
      <nav className="flex items-center justify-between p-4 text-white">
        <div>
          <Image src="/Logo.svg" alt="Logo" width={92} height={24} />
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-grayscale-950">
              About
            </a>
          </li>
          <li>
            <a href="/about" className="text-grayscale-950 ">
              Pricing
            </a>
          </li>
          <li>
            <a href="/contact" className="text-grayscale-950">
              Blog
            </a>
          </li>
        </ul>
        <div className="">
          <Button variant="primary" size="base">Button</Button>
          <Button variant="primary" size="small">Button</Button>
          <Button variant="Secondary" size="small">Button</Button>
          <Button variant="primary" size="small">Button</Button>
        </div>
      </nav>
    </div>
  );
}
