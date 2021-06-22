import navStyles from "../styles/Nav.module.css"
import Link from "next/link"

const Nav = () => {
    return (
        <div className={navStyles.nav}>
            <ul>
                <li>
                    <link href="/">Home</link>
                </li>
                <li>
                    <link href="/about">About</link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
