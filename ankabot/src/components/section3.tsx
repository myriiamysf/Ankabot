import '../styles/section3.css'

const Section3: React.FC = () => {
    return (
        <div>
            <h1 className='titree' id="section3">Qui sommes nous ?</h1>
            <div className='tout'>
                <div className='personnea'>
                    <img src="mona.jpeg" className='photo' alt=""></img>
                    <h1 className='des'>a</h1>
                </div>

                <div className='personne'>
                    <img src="charlotte.jpg" className='photo' alt=""></img>
                    <h1 className='des'>a</h1>
                </div>

                <div className='personne'>
                    <img src="moi.jpg" className='photo' alt=""></img>
                    <h1 className='des'>a</h1>
                </div>

                <div className='personne'>
                    <img src="beni.jpg" className='photo' alt=""></img>
                    <h1 className='des'>a</h1>
                </div>
            </div>
        </div>
    );
}

export default Section3;