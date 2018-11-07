import DOMComponent from "../lib/node_modules/nss-domcomponent/index"


class H1 extends DOMComponent {
  constructor(attributes, ...children){
    super("h1", attributes, ...children)
  }
}

class Div extends DOMComponent {
  constructor(attributes, ...children){
    super("div", attributes, ...children)
  }
}

let Heading = new H1({className: "heading", id: "main--heading", textContent:"I love extending classes"} )

let MainDiv = new Div({className: "intro", id: "intro", textContent:"creating new subclasses"}, Heading )

MainDiv.render(".output")

