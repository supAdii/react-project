import React, { useState, useEffect } from 'react';
import "./datafetch.css";

function DataFetchingComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=acc6c22cff4d44b6839ffa5d91b78a0a')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data.articles); // Assuming 'articles' is the array containing news items
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, []); // The empty dependency array means this effect will only run once, after the initial render

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data! {error.message}</p>;

    return (
        <div className='news_box'>
       <span>NEWS</span>
        <div className='news'>
            <h1 className='new_heading'>News Headlines</h1>
            <ul>
                {data.map(item => (
                    <li key={item.title}>{item.title}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default DataFetchingComponent;
