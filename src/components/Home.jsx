


import { Link } from 'react-router-dom';
import manHello from '../assets/guy-hello.png';


function Home() {
    return (
        <>
            <div className='home__container'>
                <img className="home__img" src={manHello} alt="Guy Icon hello" />
                <h1 className='home__h1'>👋Hello There!</h1>
            </div>
            <hr />
            <p>Welcome to my technical assessment for GPRX! In this single-page application (SPA), you can perform all CRUD (Create, Read, Update, Delete) operations related to posts.</p>
            <div className='explore_posts__container'>
                <h3>Let's explore the Posts Section! 👉</h3>
                <Link to="/posts"
                style={{
                    backgroundColor: '#3498db', 
                    border: '2px solid #2980b9', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '5px', 
                    fontSize: '16px', 
                    cursor: 'pointer', 
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
                    transition: 'background-color 0.3s ease',
                    textDecoration: 'none'
                }}>
                    Posts
                </Link>
            </div>
        </>
    );
}

export { Home };