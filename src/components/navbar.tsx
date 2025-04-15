import Link from "next/link";
const Navbar = () => {
    return <>
            <div>
                <Link href="/">Home</Link>
                <ul>
                    <li><Link href="#">Nav 1</Link></li>
                    <li><Link href="#">Nav 2</Link></li>
                    <li><Link href="#">Nav 3</Link></li>
                </ul>
            </div>
           </>
}

export default Navbar;