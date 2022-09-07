import { Link } from 'react-router-dom';

const WelcomeToDemo = () => {
    return (
        <div className="welcome">
            <h2>Welcome to the ZeroDue Business WebApp Demo!</h2>
            <p>To login use "guest" as username and "1234" as password. Enjoy the tour!</p>
            <Link to="/home">
                <button>Proceed</button>
            </Link>
        </div>
    )
}

export default WelcomeToDemo;