import React, { useContext, Fragment, useEffect } from 'react';
import Navbar from '../components/Navbar';
import StarWarsContext from '../context/StarWarsContext';


const ListContainer = () => {
    // Extrar proyectos de state inicial
    const starWarsContext = useContext(StarWarsContext);
    const { starwars, getInfo } = starWarsContext;

    useEffect(() => {
        getInfo();
        // eslint-disable-next-line
    }, [starwars]);

    return (
        <Fragment>
            <Navbar/>
            <div className="content  ">
                <img src={process.env.PUBLIC_URL + '/images/1540-star-wars-1920x1080-movie-wallpaper.jpg'} alt="imagen" />
            </div>
            <div className="container">

                <div className="row justify-content-center align-items-center  ">
                    {
                        (starwars.results != null && starwars.results.length > 0)
                            ?
                            starwars.results.map((st, index) => (


                                <div className="col-md-4 py-4 text-center" key={index}  >
                                    <div className="card">
                                        <div className="card-body fondo text-white font-weight-bold" >
                                            <h1>{st.name}</h1>
                                            <p>Altura: {st.height}</p>
                                            <p>Color de Pelo: {st.hair_color}</p>
                                            <p>Color de Piel: {st.skin_color}</p>
                                            <p>Color de Ojos: {st.eye_color}</p>
                                            <p>Año de Nacimiento: {st.birth_year}</p>
                                            <p>Genero: {st.gender}</p>

                                        </div>
                                    </div>
                                </div>

                            ))
                            :
                            (<li>No existen datos</li>)
                    }



                </div>
            </div>
        </Fragment>

    );
};

export default ListContainer;
