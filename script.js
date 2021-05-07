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

  // Nella funzione removeToDo devo inserire l'index perchè ho bisogno di andare ad eliminare con lo splice l'indice
  methods:{
    removeToDo(index){
      this.toDoList.splice(index,1);
    },

  // Nella funzione addToDo inserisco le condizioni per le quali se la mia stringa è maggiore di 2 allora vado a pushare il valore dentro al mio array di oggetti, altrimenti faccio comprarire il mio h4

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

