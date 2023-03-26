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
// directives
new Vue({
    el:"#images",
    data:{
        src:"",
        alt:"this is a dog",
        link:"http://google.com"
    },
  
});

new Vue({
    el:"#conditional",
    data:{
        user:"luffy",
        userAge:45,
        allowedAge:50,
    },
    methods:{
        changeUser(){
            return this.user==="luffy" ? true : false;
        }
    }
});
// v-for
new Vue({
    el:"#v-for",
    data:{
       cars:['toyota','grace','honda'],
       user:{
        name:'luffy',
        age:30,
        country:'japan'
       }
    },
    
});

// v-once
new Vue({
    el:"#v-once",
    data:{
       name:'Aklima'
    },
    methods:{
        update(){
            setTimeout(()=>{
                this.name = 'Saiful'
            },2000)
        }
    },
    
});
// Event Use
new Vue({
    el:"#event-use",
    data:{
       name:'Aklima',
       x:0,
       y:0
    },
    methods:{
        updateName(){
           this.name ='maksuda';

        },
        getCoord(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }

    },
    
});

// Event Use
new Vue({
    el:"#modifier",
    data:{
       name:'Maksuda',
      
    },
    methods:{
        updateValue(newname){
           this.name = newname;

        },
        // handleForm(event){
        //     event.preventDefault();
        //     console.log("submit form");
        // }
        handleForm(){
            // event.preventDefault();
            console.log("submit form");
        }
      

    },
    
});