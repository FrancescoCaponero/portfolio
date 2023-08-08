<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import CarouselComp from './CarouselComp.vue'

export default {
  name: 'MainContainer',
  components: {
    Header,
    Footer,
    CarouselComp
  }
}
</script>

<template>
  <div class="min-w-screen min-w-screen flex justify-center items-center h-screen">
    <div class="w-[calc(100%-10rem)] max-w-[1400px] p-[2rem] h-full text-dark-green flex flex-col justify-between">
      <Header></Header>
      <CarouselComp></CarouselComp>
      <Footer></Footer>
    </div>
  </div>

</template>

