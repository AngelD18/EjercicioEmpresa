import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {

    return(
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/images/starwars.png'} width='400' alt='starwars' />         
          <Link className="text-warning"  style={{ textDecoration: 'none' }} to='/starwars'>Descubre el poder de la fuerza</Link>
        </header>
      </div>
    );
}

export default Home;