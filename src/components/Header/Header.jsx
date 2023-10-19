import logo from '../../images/proyectos_molones.png';



const Header = () => {

    return (
    <div>
        <header className="header">
            <img className="logo" src={logo} alt="logo detective" />
            <button className="btn-Return">Regresar</button>
        </header>
        <section className="subHeader">
                <h2 className="subHeader__h2">Proyecto Desarrolladoras Web</h2>
                <p className="subHeader__h2-p">
                    En esta agencia, ningún proyecto podrá esconderse. El talento quedará al descubierto.
                </p>
                <button className="btn-projects">VER PROYECTOS</button>
            </section>
    </div>
    );
};

export default Header;