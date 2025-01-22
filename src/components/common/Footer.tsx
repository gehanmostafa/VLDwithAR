"use client"
import { Input } from "../ui/input";
export default function Footer() {
    return (
        <footer className="bg-[#fff] py-6   " >
        <div className="container mx-auto text-black flex flex-wrap justify-between">
          <div>
            <h3 className="font-bold text-lg">Wardiere Inc.</h3>
            <p>Stay in the loop and sign up for the Wardiere newsletter:</p>
            <Input
              type="email"
              placeholder="Enter your email"
              className="mt-2 p-2 rounded-lg text-blue-500"
            />
          </div>
          <div>
            <h4 className="font-bold text-lg">Company</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Solutions</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg">Documentation</h4>
            <ul>
              <li>FAQ</li>
              <li>API</li>
              <li>Guides</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg">Social</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm mt-6 ">
          © Wardiere Inc. All Rights Reserved 2023 | Terms & Conditions
        </div>
      </footer>
       );
    }