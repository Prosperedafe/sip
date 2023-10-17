import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const NotFound: React.FC = () => {
    const colors = ['#FE678E', '#66B447', '#D48C57', '#C9CC3F'];
    const [randomItem, setRandomItem] = useState<string>("");
    const navigate = useNavigate();

    const getRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const selectedRandomItem = colors[randomIndex];
        setRandomItem(selectedRandomItem);
    };
    useEffect(() => {
        getRandomItem()
    }, [])

    return (
        <section className='not-found-page' style={{ background: randomItem }}>
            <h1>Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <button className="not-found-btn" onClick={() => navigate(-1)}>back to previous page</button>
        </section>
    );
};

export default NotFound;
