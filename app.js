new Vue({
    el:"#app",
    data:{
        title:"Rafee",
        isItTrue:true,
        cars:['Ford','Toyota'],
        robot:{
            name:"Franky"
        },
        greeting: ()=>{
            return "Hello World";

        }
    },
    methods: {
        apm(){
            return "A plus m";
        },
        rubel(){
            return "akhi loves rubel";
        }
    },
});

new Vue({
    el:"#images",
    data:{
        src:"",
        alt:"this is a dog",
        link:"http://google.com"
    },
  
});
