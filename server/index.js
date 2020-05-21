const express = require('express')
const app = express()
const wildCtrl = require('./controllers/wildPokemonController.js')
const caughtCtrl = require('./controllers/caughtPokemonController.js')
const SERVER_PORT = 4232

app.use(express.json())


//Wild pokemon endpoints
app.get('./api/wild-pokemon', wildCtrl.getThreeRandPkmn)

//Caught pokemon endpoints
app.get('./api/caught-pokemon', caughtCtrl.getCaughtPkmn)
app.post('./api/caught-pokemon', caughtCtrl.catchPkmn)
app.put('./api/caught-pokemon:pkmn_id', caughtCtrl.editPkmnName)
app.get('./api/caught-pokemon:pkmn_id', caughtCtrl.deletePkmn)

app.listen(SERVER_PORT, () => console.log(`Catching em all on port ${SERVER_PORT}`))

