import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header(){
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://github.com/T-G0nc4lv3s"> Thiago Gonçalves</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header