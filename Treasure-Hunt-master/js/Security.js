class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("p");
        this.access1.position(100,90);
        this.access1.style('background','white')

        this.button1 = createButton('check');
        this.button1.position(100,120);
        this.button1.style('background','lightgrey')

        this.access2 = createInput("n");
        this.access2.position(700,190);
        this.access2.style('background','white')

        this.button2 = createButton('check');
        this.button2.position(700,220);
        this.button2.style('background','lightgrey')

        this.access3 = createInput("o");
        this.access3.position(100,350);
        this.access3.style('background','white')

         this.button3 = createButton('check');
        this.button3.position(100,380);
        this.button3.style('background','lightgrey')


    }

    display(){

       this.button1.mousePressed(() => {
     if(system.authenticate(acessCode1,this.acess1.value())){
       this.button1.hide();
       this.acess1.hide();
        score++;
     }
    });
    this.button2.mousePressed(() => {
        if(system.authenticate(acessCode1,this.acess1.value())){
          this.button2.hide();
          this.acess2.hide();
           score++;
        }
       });
       this.button3.mousePressed(() => {
        if(system.authenticate(acessCode1,this.acess1.value())){
          this.button3.hide();
          this.acess3.hide();
           score++;
        }
  });
    }
}

