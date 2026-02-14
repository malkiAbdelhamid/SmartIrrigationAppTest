
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        soilMoisture: "45%",
<<<<<<< HEAD
        temperature: "28°C",  
              status: "Optimal"
=======
        temperature: "28°C",
        humidity: "60%"
>>>>>>> feature-cleanup-v4

    });
});

module.exports = router;
