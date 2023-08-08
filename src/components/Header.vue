<template>
    <div class="flex font-light items-center justify-between text-lg font-thin ">
        <h1 >projects</h1>
        <h1 v-on:click="handleActive" class="cursor-pointer">contacts</h1>
    </div>
    <Transition>
    <div v-if="isActive" class="fixed inset-0 w-screen h-screen bg-white/[.98] z-20">
        <div class="w-[800px] h-[300px]  absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div  v-on:click="handleActive" class="w-50 h-50 absolute top-1 -right-10 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#354F52" height="15px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 460.775 460.775" xml:space="preserve">
    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                    </svg>
                </div>
                <ContactForm>

                </ContactForm>
            </div>
        </div>
    </Transition>
</template>
<script>
import ContactForm from './ContactForm.vue'
export default {
    name: 'Header',
    data() {
        return {
            isActive: false
        }
    },
    components: {
        ContactForm,
    },
    methods: {
        handleActive() {
            this.isActive = !this.isActive
        }
    }
}
</script>

<style >

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

