class Intro {
    constructor(){
        this.image= loadImage("filled in map.jpg")
        this.image2 = loadImage("next.png")
        this.input = createInput("Name")
        this.next = createSprite(830,400,100,40)
        this.next.addImage(this.image2)
        this.next.scale = 0.3
        

    }

    display() {

        push()
        tint(255,90)
        image(this.image, 0, 0, windowWidth,windowHeight)
        pop()

        fill(180,0,140)
        textSize(50)
        text("Map Game!", windowWidth/2 - 30, 100)
        textSize(25)
        text("In this game you will be asked to fill in maps for various places around the world", windowWidth/2-400, 165)
        text("Enter your name and click next to move on to the first map!", windowWidth/2-250,225)

        this.input.position(750,300)


        if(mousePressedOver(this.next)) {
            username=this.input.value()
            this.input.hide()
            gameState = 1
        }

        drawSprites()
    }
}