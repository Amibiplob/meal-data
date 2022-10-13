import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Result = () => {
    const result = useLoaderData([]).meals
   // console.log(result)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 my-10 mx-auto'>
            {
                result.map(data => (
                    <div key={data.idMeal} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={data.strMealThumb} alt="meal" /></figure>
                        <div className="card-body h-96 overflow-auto">
                            <h2 className="card-title"><span className='text-2xl font-bold'>Meal Name: </span>{data.strMeal}</h2>
                            <h2><span className='text-2xl font-bold'>Category : </span> {data.strCategory}</h2>
                            <p><span className='text-2xl font-bold'>Instructions :</span> {data.strInstructions}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Result;