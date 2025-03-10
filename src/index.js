
const express= require('express');
const {serverPort} = require('./config/index.js');
const apiRoutes = require('./routes/index.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api', apiRoutes);

app.listen(serverPort.PORT , async()=>{
    console.log(`Server is listening on port : ${serverPort.PORT}`);
    const {City, Airport} = require("./models/index.js");
    // const kan = await City.create({name:'kanpur'});
    // const var = await City.create({name:'Varanasi'});
    const kan = await City.findByPk(12);
    // const hb = await varanasi.createAirport({name:'huballi', code:'HBL'});
    // const ary = await kan.createAirport({name:'airy', code:'ARY'});
    // const allAirports = await varanasi.getAirports();
    // await City.destroy({
    //     where:{
    //         id:10
    //     }
    // })
    // console.log(allAirports);


    
})



