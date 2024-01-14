import mower from '../imgs/mower.png';
import story from '../imgs/story.png';
import schedule from '../imgs/schedule.png';
import oakpark from '../imgs/oakpark.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className='home'>
          <div className='landing'>
            <div>
              <h2>Raleigh Landscaping Services</h2>
              <p>When you design an attractive landscape, it adds value to your home and increases your home’s curb appeal.</p>
            </div>
            <ul className='main-menu'>
              <Link to='about'>
              <li>
                <img src={story}></img>
                <p>Our Story</p>
              </li>
              </Link>
              <Link to='services'>
              <li>
                <img src={mower}></img>
                <p>Services</p>
              </li>
              </Link>
              <Link to='about'>
              <li>
                <img src={schedule}></img>
                <p>Contact</p>
              </li>
              </Link>
            </ul>
          </div>

          <section className='about'>
            <div className='column'>
              <h3>Reliable Lawn Care based in Oak Park</h3>
              <p>For the last few years, YardLand has been providing reliable lawn care and lanscaping services to clients in the Raleigh area.</p>
              <h3>Our Lawn Care Services Include:</h3>
              <p>Our professional and courteous crew are fully insured and uniformed, they provide mulch install, weeding, mowing, pruning, and planting services. Also clear outs and yard waste hauls are right in our wheelhouse.</p>
              <p>Cal <strong>919-802-6142</strong> now for a free estimate on your lawn maintenance services.</p>
            </div>
            <div className='column c3'>
              <img src={oakpark}></img>
            </div>
          </section>
        </section>
    );
}

export default Home;