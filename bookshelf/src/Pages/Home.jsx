import React, { useEffect, useState } from 'react';
import { fetchHomeData } from '../services/Apis/homeApi';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchHomeData();
            if (Array.isArray(result)) {
                console.log("result -->", result)
                setData(result);
            } else {
                console.log("Data fetching error -->", result)
                setData(result);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center mt-6 p-8'>
            <h1 className='text-2xl font-bold'>Welcome to the Bookshelf</h1>
            <p>Browse the list of bestsellers and click on any book to view more details. You can save favorite books to your virtual bookshelf.</p>
            {data && (
                <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {data.map((book) => (
                        <div key={book.id} className='border p-4'>
                            <h2 className='text-xl font-semibold'>{book.title}</h2>
                            <p>{book.author}</p>
                            <Link to={`/book/${book.id}`} className='text-blue-500'>View Details</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;