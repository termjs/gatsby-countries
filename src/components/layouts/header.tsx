import * as React from 'react';
import { Link } from 'gatsby';

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Where in the world?</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;