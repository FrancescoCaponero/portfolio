
<template>
  <div class="min-w-screen h-[93vh] md:min-h-screen flex justify-center items-center h-screen">
    <div class="md:w-[calc(100%-10rem)] md:max-w-[1400px] w-full p-[.8rem] md:p-[2rem] h-full text-dark-green flex flex-col justify-between">
        <Header></Header>
        <CarouselComp></CarouselComp>
      <Footer></Footer>
    </div>
  </div>

</template>

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

