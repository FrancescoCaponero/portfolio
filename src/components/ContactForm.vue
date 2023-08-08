<template>
    <h2 class="text-3xl font-[100] mb-[5rem]">Contacts</h2>
    <div class="p-4 font-[100] text-3xl flex flex-col gap-4 border-l-[.1rem] border-dark-green">
        <input type="text" v-model="firstName" class="styled-input" placeholder="First Name" />
        <input type="text" v-model="lastName" class="styled-input" placeholder="Last Name" />
        <input type="email" v-model="email" class="styled-input" placeholder="Email*" required />
        <textarea v-model="comment" class="styled-input" placeholder="Comment"></textarea>
        <button @click="sendForm" class="styled-button">Send</button>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            comment: '',
        };
    },
    methods: {
        sendForm() {
            console.log('Form data:', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                comment: this.comment,
            });
        }
    }
}
</script>

<style scoped>
.styled-input {
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    color: #2F3E46;
}

.styled-input::placeholder {
    color: #2F3E46;
}

.styled-button {
    background-color: transparent;
    border: 2px solid #2F3E46;
    color: #2F3E46;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    max-width: 200px;
}

.styled-button:hover {
    background-color: #2F3E46;
    color: #fff;
}
</style>
