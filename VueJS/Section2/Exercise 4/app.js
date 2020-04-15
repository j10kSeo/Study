new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: true,
      shrink: false,
    },
    float: 'float',
    inputClass: "",
    inputToggleClass: "",
    addsAnotherClass: false,
    myStyle: {
      backgroundColor: 'green',
      height: '200px',
    },
    color: 'black',
    progressBar: {
      height: '100px',
      width: '10px !important',
    },
  },
  methods: {
    startEffect() {
      setInterval(() => {
        this.effectClasses.highlight = !this.effectClasses.highlight;
        this.effectClasses.shrink = !this.effectClasses.shrink;
      }, 1000);
    },
    startProgress() {
      let width = 0;
      setInterval(() => {
        width = width + 10;
        this.progressBar.width = width + 'px !important';
      }, 1000);
    }
  },
});
