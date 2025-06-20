import '../styles/header.css';

const Header: React.FC = () => {
    return (
        <div className='principal' id="section1">
            <img src="ankabotlogo.png" width={90} height={90} alt="A" />
            <div className="ligne-subtile"></div>
        </div>
    );
};

export default Header;