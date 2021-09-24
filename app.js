const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

let FruitBox = [];

//Static content ie images
app.use('/complete-javascript-course/01-Fundamentals-Part-1/views', express.static('views'))

router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.text({ type: 'text/html' }))
router.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/complete-javascript-course/01Fundamentals-Part-1/views/'));

router.get('/', function(req, res) {
    res.render('index', { fruitBox: FruitBox })
})

router.get('/complete-javascript-course/01-Fundamentals-Part-1/starter/index', function(req, res, next) {
    res.render('index', { fruitBox: FruitBox })
})

router.get("/complete-javascript-course/01-Fundamentals-Part-1/starter/ping", async (req, res) => {
    const result = { incomming : 'ping ', response : 'pong '}
    res.send(JSON.stringify(result))
});

router.get("/complete-javascript-course/01-Fundamentals-Part-1/starter/fruitbox", async (req, res, next) => {
    res.send(JSON.stringify(FruitBox))
});

router.get("/complete-javascript-course/01-Fundamentals-Part-1/starter/fruitbox/:item", async (req, res, next) => {
    const item = parseInt(req.params.item)
    res.send(JSON.stringify(FruitBox[item]))
});

router.post('/complete-javascript-course/01-Fundamentals-Part-1/starter/fruitbox', async (req, res, next) => {
    let result
    try{
        const fruitName = req.body.fruitName;
        const qty = req.body.qty;
        const item = { fruit: fruitName, qty : qty}
        FruitBox.push(item)
        result = FruitBox
        res.status(200)
    }catch(e){
        console.log(e)
        result = { errorMessage : 'Ensure your POST body conatains both a fruitName and a qty and content type is application/json '}
        res.status(500);
    }

    res.send(result)

})

app.use('/complete-javascript-course/01-Fundamentals-Part-1/starter/', router)

module.exports = app;
