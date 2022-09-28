import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStarHalf } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";



const Reviews = () => {
    return (

<section class="body-font reviews bg-first-color text-second-color dark:bg-first-night-color dark:text-second-night-color">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 shadow-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"></img>
          <p class="leading-relaxed">Excelente servicio. El traslado muy seguro, además te pueden orientar en todo momento ante cualquier consulta.</p>
          <ul class="flex justify-center pt-10">
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
            </ul>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">MARIA MARTINEZ</h2>
          <p class="text-gray-500">Pasajera del vuelo PT-101 hacia Brasil.</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 shadow-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"></img>
          <p class="leading-relaxed">Fácil comprar, fácil cancelar, políticas claras y una experiencia de usuario bastante relevante. Lo hacen fácil y simple
Gracias!</p>
          <ul class="flex justify-center pt-10">
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
            </ul>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ROCIO GOMEZ</h2>
          <p class="text-gray-500">Pasajera del vuelo PDM-50 hacia Bora Bora.</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100 shadow-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"></img>
          <p class="leading-relaxed">La mejor agencia de viajes, confiable y segura, en todas mis reservas no he tenido problema alguno.</p>
          <ul class="flex justify-center pt-10">
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
                <FontAwesomeIcon icon={faStar} className="text-second-color"/>
            </ul>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">GABINO SILVA</h2>
          <p class="text-gray-500">Pasajero del vuelo KK-20 hacia Barcelona.</p>
        </div>
      </div>
    </div>
  </div>
</section>
);
}

export default Reviews ;