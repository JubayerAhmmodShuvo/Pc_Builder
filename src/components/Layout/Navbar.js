import Link from "next/link";
import { useSession, signOut } from "next-auth/react";


const Navbar = () => {
   const { data: session } = useSession();
  return (
    <>
      <div
        className="navbar bg-base-100 z-20  "
        style={{ color: "black", padding: "0" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-bold font-serif shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  href="/featured"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <items>Featured</items>
                </Link>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2 z-20 bg-slate-600">
                  <li>
                    <Link
                      href="/featured/cpuprocessor "
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <items>CPU / Processor</items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/motherboard "
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <items>MotherBoard</items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/ram "
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <items>RAM</items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/powersupplyunit "
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <items>Power Supply Unit</items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/storagedevice "
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <items>Storage Device</items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/monitor "
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <items>Monitor </items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/others "
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <items>Others</items>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <p className="  text-2xl font-serif font-bold no-underline">
              Pc-Builder
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold font-serif ">
            <li>
              <Link
                href="/featured"
                style={{ textDecoration: "none", color: "black" }}
              >
                <items>Featured</items>
              </Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary
                  style={{
                    textDecoration: "none",
                    color: "black",
                    backgroundColor: "",
                  }}
                >
                  Categories
                </summary>
                <ul className="p-2 z-20 bg-slate-600 ">
                  <li>
                    <Link
                      href="/featured/cpuprocessor "
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <items>CPU / Processor</items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/motherboard "
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <items>MotherBoard</items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/ram "
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <items>RAM</items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/powersupplyunit "
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <items>Power Supply Unit</items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/storagedevice "
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <items>Storage Device</items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/monitor "
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <items>Monitor </items>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/featured/others "
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <items>Others</items>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/pc-builder "
            style={{ textDecoration: "none", marginRight: "5px" }}
          >
            <items className="btn btn-info   font-serif  ">PC-Builder</items>
          </Link>
        </div>
        {session?.user ? (
          <items>
            <button
              className=" btn btn-error   font-serif "
              onClick={() => signOut()}
            >
              Logout
            </button>
          </items>
        ) : (
          <Link href="/login" style={{ textDecoration: "none" }}>
            <items className=" btn btn-info   font-serif text-black">
              Login
            </items>
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;