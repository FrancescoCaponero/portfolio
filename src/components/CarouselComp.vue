<template>
  <div class="md:w-[850px] w-full px-4 flex-1 md:flex-initial self-center">
    <div class="justify-between md:flex hidden">
      <div class="space"></div>
      <div v-on:click="handleShow()" class="font-[200] text-[1.7rem] cursor-pointer uppercase">{{ isShowed ? 'close' : 'show' }}</div>
    </div>
    <Carousel class="text-dark-green w-full mt-[4rem] md:mt-0" ref="myCarousel">
      <Slide v-for="project in projects" :key="project.id">
        <Transition>
        <div v-if="isShowed" 
        :class="'absolute inset-0 w-full ' + (project.id === (projects.length) ? 'overflow-y-scroll ' : '') + 'bg-white/[1] z-20'">            <div class="p-[1rem] w-[calc(100%-5rem)] w-full text-left font-[100] text-2xl">
              <div class="flex flex-col gap-4 justify-left items-left w-full text-left font-[100] text-2xl">
                <h1>{{ project.name }}</h1>
                <p>{{ project.excerpt }}</p>
                <div v-for="other in project.others" class="h-fit">
                  <div>
                    <h1 class="mb-[1rem]">{{ other.name }}</h1>
                    <p >{{ other.description }}</p>
                    <a :href="other.link" class="underline text-xl cursor-pointer  hover:opacity-[.65] transition-all" target="_blank" rel="noopener noreferrer">{{ other.link }}</a>
                  </div>
                </div>
                <a :href="project.link" class="underline text-xl cursor-pointer  hover:opacity-[.65] transition-all" target="_blank" rel="noopener noreferrer">{{ project.link }}</a>
              </div>
            </div>
        </div>
        </Transition>
        <div class="max-w-full">
          <div class="carousel__item w-full overflow-hidden">
            <img :src="project.img" class="object-cover w-full">
            </div>
            <div>
              <h1 class="md:hidden max-w-full text-xl font-[300] text-left"> {{ project.name }}</h1>
              <p class="md:hidden max-w-full text-xl font-[300]  leading-5 mt-[1rem] text-left">
                {{ project.excerpt }}
              </p>
              <div v-for="other in project.others" class="h-fit">
                <div class="flex flex-col justify-start mb-[.5rem]">
                  <h1 class="md:hidden max-w-full text-xl font-[300] text-left">{{ other.name }}</h1>
                  <a :href="other.link" class="md:hidden max-w-full text-xl font-[300] text-left underline leading-5 text-left" target="_blank" rel="noopener noreferrer">{{ other.link }}</a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons="{currentSlide}">
          <Pagination class="md:hidden"></Pagination>
          <div class="carousel-wrapper">
            <button
              :class="['hidden md:block carousel__next-button uppercase', { invisible: currentSlide === 0 }]"
              @click="prevSlide"
            >
              Prev
            </button>
            <button
              :class="['hidden md:block carousel__next-button uppercase', { invisible: currentSlide >= projects.length - 1 }]"
              @click="nextSlide"
            >
              Next
            </button>
            </div>
        </template>
      </Carousel>
    </div>
  </template>
  
  <script>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
  import data from '../data.json'
  import { ref } from 'vue'

  
  export default {
    name: 'CarouselComp',
    data() {
      return {
        projects: data,
        isShowed: false,
      }
    },
    methods:{
      handleShow() {
        this.isShowed = !this.isShowed
      }
    },
    components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
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

  
.carousel__pagination-item{
  margin-top: 1rem;
  @media (min-width: 768px) {
    display: none;
  }

}

a {
  text-decoration: underline;
  text-decoration-thickness: 1px;
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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
  