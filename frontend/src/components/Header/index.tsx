import "./styles.css"
import Logo from "../../assets/logo.svg"

export default function Header(){
    return(
        <header>
            <div className="dsmeta-logo-container">
                <img src={Logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                Desenvolvido por
                <a href="https://www.instagram.com/diogosarti_">@diogosarti_</a>
                </p>
            </div>
    </header>
    )
}