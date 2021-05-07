const app = new Vue({

  el: '#app',
  data: {
      toDoList: [
        {
          todo: "Far Entrare Artù!",
          checked: false
        },
        {
          todo: "Far uscire Artù!",
          checked: false
        },
        {
          todo: "Ascoltare l'ultimo album di Stefano",
          checked: false
        },
        {
          todo: "Odiare Vue",
          checked: true
        },
        {
          todo: "Odiarlo di più",
          checked: false
        },
      ],
      strToDo: "",
      alertActive: false
    
  },
  methods:{
    removeToDo(index){
      this.toDoList.splice(index,1);
    },

    addToDo(){
     if(this.strToDo.length > 2){
      this.toDoList.push({
        todo: this.strToDo, checked: false
      })
      this.strToDo ="";
     }else{
       this.alertActive = true;
       setTimeout(() => {
          this.alertActive = false;
       }, 2000);
       
     }
    }
  }

})

