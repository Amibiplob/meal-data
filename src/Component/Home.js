import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const randomMeal = useLoaderData([])
    // console.log(randomMeal.meals[0].strMeal)
    const { strMeal, strInstructions, strCategory, strMealThumb } = randomMeal.meals[0];
    return (
        <div>
            <div>
                <img src="../../img/4762-food-carousel.gif" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 mx-auto my-10 md:h-96">
                <figure><img src={strMealThumb} alt="Album" /></figure>
                <div className="card-body bg-neutral text-neutral-content overflow-auto">
                    <h2 className="card-title"><span className='text-2xl font-bold'>Meal Name: </span>{strMeal}</h2>
                    <h2><span className='text-2xl font-bold'>Category : </span> {strCategory}</h2>
                    <p><span className='text-2xl font-bold'>Instructions :</span> {strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default Home;