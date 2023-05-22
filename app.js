const { createApp } = Vue;

createApp({
  data() {
    return {
      contador: 0,
      errorNegativo: false 
    }
  },
  created() {

  },
  methods: {
    ascendente() {
      this.errorNegativo = false
      return this.contador++
    },
    descendente() {
      if (this.contador === 0) {
        this.errorNegativo = true
        return
      }
      this.errorNegativo = false
      return this.contador--
    }
  },
  computed: {
  }
}).mount("#app")