import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

     interface IRowProps {
        title: string;
        fetchURL: string;
        rowID: string;
     }


const Row = ({title, fetchURL, rowID}: IRowProps) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchURL])
   
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        console.log(slider);
        if(slider) {
        slider.scrollLeft = slider.scrollLeft - 500;
            
        }

      };
      const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        if(slider) {
        slider.scrollLeft = slider.scrollLeft + 500;

        }
      };

  return (
    <div>
        <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relativ flex items-center group'>
            <MdChevronLeft
            onClick={slideLeft}
            className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block' size={40} />
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => ( 
            <Movie key={id} item={item} />       
            ))}
            </div>
            <MdChevronRight
            onClick={slideRight}
            className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block' size={40} />
        </div>
        </>
    </div>
  )
}

export default Row