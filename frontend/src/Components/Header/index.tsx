import logo from "../../assets/img/logo.svg";
import './styles.css';


function Header() {

    return (
        <header>
            <div className="LogoContainer">
                <img src={logo} alt="logo DsMeta" />
                    <h1>DsMeta</h1>
                    <p>Desenvolvido por
                        <a href="">@devsuperior.ig</a>
                    </p>
            </div>
        </header>
    )
}

export default Header