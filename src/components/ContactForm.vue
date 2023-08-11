<template>
  
  <div>
    <div class="p-4 font-[100] text-3xl flex flex-col gap-4 ">
      <div class="flex flex-col border-l-[.1rem] border-dark-green pl-4">
        <input type="text" v-model="firstName" class="styled-input" placeholder="First Name" />
        <input type="text" v-model="lastName" class="styled-input" placeholder="Last Name" />
        <input type="email" v-model="email" class="styled-input" placeholder="Email*" required />
        <textarea v-model="comment" class="styled-input" placeholder="Comment"></textarea>
      </div>
      <button @click="sendEmail" class="styled-button" :disabled="isLoading">
        {{ isLoading ? 'Sending...' : 'Send' }}
      </button>
      </div>
    </div>
  <div v-if="isSuccess" class="success-message text-4xl font-[100]">Success, email sent!</div>
  <div v-if="isLoading" class="loading-message text-4xl font-[100]">
          Loading . . .
  </div>
  </template>

<script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        comment: '',
        isLoading: false,
        isSuccess: false,
      };
    },
    methods: {
        sendEmail() {
      this.isLoading = true;
      const templateParams = {
        to_name: 'Francesco Caponero', 
        user_name: `${this.firstName} ${this.lastName}`,
        user_email: `${this.email}`,
        message: this.comment,
      };

      window.emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(() => {
          this.firstName = '';
          this.lastName = '';
          this.email = '';
          this.comment = '';
          this.isLoading = false;
          this.isSuccess = true; 
          setTimeout(() => {
            this.isSuccess = false; 
          }, 2000); 
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          this.isLoading = false; 
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  }
  };
  </script>

<style scoped>

textarea {
  resize: none;
}


.success-message {
  color: rgb(27, 101, 59);
  font-size: 2.5rem;
  text-align: center;
  margin-top: 1rem;
  animation: fadeOut 3s ease-in-out; /* You can define the animation */
}
.loading-message {
  font-size: 2.5rem;
  text-align: center;
  margin-top: 1rem;
  animation: fadeOut 3s ease-in-out; /* You can define the animation */
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
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
