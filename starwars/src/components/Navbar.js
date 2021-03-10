import React from 'react';


function Navbar() {
    return (
        <div className="Navbar fixed-top">
            <img src={process.env.PUBLIC_URL + '/images/starwars.png'} width='100' alt='starwars' />
            <audio controls="controls" loop autoPlay style={{ display: 'none' }} >
                <source src={process.env.PUBLIC_URL + '/images/ringtones-star-wars-metal.mp3'} type="audio/mp3" />

                   Your browser does not support the audio element.
</audio>
        </div>
    );
}

export default Navbar;