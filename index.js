const v = new Vue({
  el: '#app',
  data: {
    entropy: 0,
  },
  mounted() {
    this.styleDivs();
    console.log('%c Hex Color Entropy', 'color:#1cf46b');
  },
  methods: {
    updateEntropy() {
      this.styleDivs(this.entropy);
    },
    randomHexColor(entropy = this.entropy) {
      return `#${`000000${Math.floor(Math.random() * entropy).toString(
        16
      )}`.slice(-6)}`;
    },
    styleDivs(entropy = 7777777) {
      document.querySelectorAll('div').forEach(el => {
        el.style.background = this.randomHexColor(entropy);
      });
    },
  },
});
