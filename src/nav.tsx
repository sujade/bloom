import "./nav.css"
import Logo from "./assets/logo.svg"

function Nav() {

  return (
    <>
        <nav>
            <img src={Logo} alt="Bloom Logo" />
            <span>Home</span>
            <span>Search</span>
            <span>Activities</span>
            <span>Community</span>
            <span className="material-symbols-outlined unselectable" id="accountIcon">account_circle</span>
        </nav>
    </>
  )
}

export default Nav
