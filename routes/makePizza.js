//import react?

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Your Pizza")
})

router.get("/toppings", (req,res) => {
    res.send("Toppings on your pizza:")
})

router.post('/', (req, res) => {
    res.send("New pizza");
})

// router
//     .route("/:id")
//     .get((req, res) => {
//         res.send(`get pizza with ID ${req.params.id}`);
//     })
//     .put((req,res) => {
//         res.send(`Update pizza with ID ${req.params.id}`);
//     })
//     .delete((req,res) => {
//         res.send(`DELETE pizza with ID ${req.params.id}`);
//     })

// router.get('/:id', (req, res) => {
//     req.params.id
//     res.send("Pizza Made");
    // res.send("get pizza with ID ${req.params.id}")
// })
// router.put('/:id', (req, res) => {

//     res.send("Update pizza with ID ${req.params.id}")
// })
// router.put('/:id', (req, res) => {

//     res.send("DELETE pizza with ID ${req.params.id}")
// })



module.exports = router;