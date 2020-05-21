# Pokemon Catching App

## Application Concept and Wireframe
### Application Concept

-THis will be a pokemon catching app
-Will utilize the pokeAPI for the pokemon data
-Full CRUD
    -GET:   get all pokemon
    -POST:  Caught pokemon will be posted to our array
    -PUT:   Give the pokemon a name
    -Delete: Release our pokemon back into the wild

### Functionality
- We want a header at the top of the page to display the name of our app
- When thee app loads, three images of grass will be loaded on the screen
    - When the grass is clicked, we will reveal a wild pokemon
- Once we select a pokemon, we will push that pokemon to our pokedex
- The pokedex will show the new caught pokemon
- The pokedex will have a button to release the pokemon
    -The pokedex will update when the pokemon is released

### Endpoints
- GET    - fetch 3 random pokemon from pokeAPI (retrieve it on front/back)
- GET    - fetch our pokedex
- POST   - push caught pokemon to our pokedex
- PUT    - change pokemon name
- DELETE - delete pokemon from pokedex

### Component Architecture
- App.js (stateful: hold our wild pokemon info, this.state.caughtPokemon)
    -Header.js (functional)
    -Finder.js (stateful: axios request to fetch the three wild pokemon)
        -Grass.js (stateful: this.state.grassClicked)
    -Pokedex.js (functional)
        -Pokemon.js (stateful: this.state.name, this.state.editing)
    
### Wireframe
<img src="./Captures/Capture.PNG>"/>
<img src="./Captures/Capture2.PNG>"/>
