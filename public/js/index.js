var hello = new Vue({
  el: '#hello',
  data: {
    msg: "hello VueJS!",
    frameworks: [
      {name: "Ruby on Rails"},
      {name: "Slim"},
      {name: "Codeigniter"},
      {name: "VueJS"},
      {name: "AngularJS"},
      {name: "React"},
      {name: "BackboneJS"},
      {name: "MeteorJS"},
      {name: "Zend Framework"},
    ],
    newElement: '',
    elements: []
  },
  methods:{
    addElement: function (event) {
      var title = this.newElement.trim();
      if (title){
        this.elements.push({title:title});
        this.newElement = "";       
      }
    },
    removeElement: function name(event, index) {
      event.preventDefault();
      this.elements.splice(index, 1);
    }
  }
});