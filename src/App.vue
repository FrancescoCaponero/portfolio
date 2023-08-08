<template>
  <div>
    <div class="custom-cursor" ref="cursor">
    </div>
    <MainContainer></MainContainer>
  </div>
</template>

<script>
import MainContainer from './components/MainContainer.vue';
export default {
    mounted() {
        window.addEventListener('mousemove', this.updateCursorPosition);
    },
    methods: {
        updateCursorPosition(event) {
            const cursor = this.$refs.cursor;
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
        },
    },
    beforeUnmount() {
        window.removeEventListener('mousemove', this.updateCursorPosition);
    },
    components: { MainContainer }
};
</script>


<style>
.custom-cursor {
  position: fixed;
  width: 5px;
  height: 5px;
  background-color: rgb(184, 184, 184);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-out;
  z-index: 9999;
}

.custom-cursor::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: 50%;
  top: 50%;
  transform:translate(-50%, -50%) ;
  border: 2px solid #9e9e9e;
  transition: all .5s ease-in-out;
  z-index: 999;
}

</style>

