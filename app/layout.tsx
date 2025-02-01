import "./globals.css";
import dashboard from "./assets/Dashboard.svg";
import product from "./assets/Product.svg";
import cart from "./assets/Cart.svg";
import users from "./assets/Users.svg";
import star from "./assets/Empty Star.svg";
import settings from "./assets/Settings.svg";
import add from "./assets/Add.svg";
import NavLink from "next/link";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <section className="flex gap-3 h-[100vh] container">
            <div className="flex flex-col w-[260px] py-4">
              <div className="flex items-center gap-3 mb-14">
                <Image className="" src='' alt="" />
                <h1 className="text-[20px]">Admin</h1>
              </div>

              <div className=" flex flex-col gap-4">
                <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
                  <Image src={dashboard} alt="" />
                  <NavLink href="/">Dashboard</NavLink>
                </div>
                <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
                  <Image src={product} alt="" />
                  <NavLink href="/products">Products</NavLink>
                </div>
                <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
                  <Image src={cart} alt="" />
                  <NavLink href="/orders">Orders</NavLink>
                </div>
                <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
                  <Image src={users} alt="" />
                  <NavLink href="/customers">Customers</NavLink>
                </div>
                <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
                  <Image src={star} alt="" />
                  <NavLink href="/reviews">Reviews</NavLink>
                </div>
                <div className="flex items-center gap-[10px] py-2  hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
                  <Image src={settings} alt="" />
                  <NavLink href="/settings">Settings</NavLink>
                </div>
                <div className="flex items-center gap-[10px] py-2  mt-20 hover:bg-neutral-200 cursor-pointer transition-all duration-300 rounded-md">
                  <Image src={add} alt="" />
                  <p>Extras</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-200 px-10 w-full">{children}</div>
          </section>
      </body>
    </html>
  );
}
