class USMap {
    constructor() {
        this.image = loadImage("empty map.jpg")
        this.input = createInput("Enter")
        this.person1 = loadImage("person1.png")
        this.person2 = loadImage("person2.png")
        this.person3 = loadImage("person3.png")
        this.timer=20
        
    }

    display() {

        push()
        image(this.image, 0, 0, windowWidth,windowHeight)
        pop()

        if(frameCount%30 === 0 && Qtime === 1) {
            this.timer=this.timer-1

        }

        if(this.timer < 0) {
            Qtime=0
        }
        textSize(20)
        text(this.timer + "s",1320,40)


    }

    coordinate() {
        randLocation = Math.round(random(1,50))

        switch(randLocation) {
            case 1: x = 600; y=300; state = "wyoming"
            break
            case 2:
        }
    }

    avatarSelect() {
        randAvatar = Math.round(random(1,3))
         switch(randAvatar) {
             case 1: image(this.person1, x,y)
             break
             case 2: image(this.person2, x,y)
             break
             case 3: image(this.person3, x,y)
             
         }
    }

    displayQuiz() {

    }

}