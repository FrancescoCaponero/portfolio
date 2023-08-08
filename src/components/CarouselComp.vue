<template>
    <div class="w-[850px] self-center">
        <div class="flex justify-between">
            <div class="space"></div>
            <div class="font-[200] text-[1.7rem]">SHOW</div>
        </div>
      <Carousel class="text-dark-green w-full" ref="myCarousel">
        <Slide v-for="project in projects" :key="project.id">
          <div class="carousel__item">
            <img :src="project.img">
          </div>
        </Slide>
        <template #addons>
          <div class="carousel-wrapper">
              <button  class="carousel__next-button uppercase" @click="prevSlide">Prev</button>
              <button  class="carousel__next-button uppercase" @click="nextSlide">Next</button>
            </div>
        </template>
      </Carousel>
    </div>
  </template>
  
  <script>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation } from 'vue3-carousel'
  import data from '../data.json'
  import { ref } from 'vue'

  
  export default {
    name: 'CarouselComp',
    data() {
      return {
        projects: data,
      }
    },
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    setup() {
      const myCarousel = ref(null);
  
      const nextSlide = () => {
        myCarousel.value.next();
      };

      const prevSlide = () => {
        myCarousel.value.prev();
      };
  
     
      return {
        myCarousel,
        nextSlide,
        prevSlide
      };
    },
  };
  </script>
  
  <style>

  .carousel-wrapper{
    display: flex;
    justify-content: space-between;
    line-height: 1.5rem;
    
  }

  .carousel__item {
    font-size: 20px;
    border-radius: 8px;
  }
  
  
  
  .carousel__next-button,
  .carousel__prev-button {
    background-color: transparent;
    border: none;
    font-size: 1.7rem;
    font-weight: 200;
    cursor: pointer;
  }
  </style>
  