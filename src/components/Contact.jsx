import ContactIcon from '../imgs/contact.jpg';
import location from '../imgs/location.png';

const Contact = () => {
    return (
        <section className='contact'>
            <h1 className='page-header'>Contact Us</h1>
            <div className='container'>
                <div className='column'>
                    <div className='row'>
                        <h5>Phone</h5>
                        <h4>919-802-6142</h4>
                    </div>
                    <div className='row'>
                        <h5>Address</h5>
                        <h4>5009 Weaver Dr, Raleigh, NC 27612</h4>
                    </div>
                    <div className='row'>
                        <h5>Service Areas</h5>
                        <ul>
                            <li>Cary</li>
                            <li>Raleigh</li>
                            <li>Morrisville</li>
                            <li>Durham</li>
                            <li>Apex</li>
                        </ul>
                    </div>
                </div>
                <div className='column'>
                    <img src={ContactIcon} alt="The whole YardLand team posing for a photo" />
                </div>
            </div>
            <div className='img-container'>
                <h2>Located here in Oak Park, Raleigh</h2>
                <img src={location} alt="Map of Oak Park" />
            </div>
        </section>
    );
}

export default Contact;