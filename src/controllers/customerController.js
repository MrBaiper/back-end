const controller ={};

controller.list = (req, res) =>{
    req.getConnection((err,conn) => {
        conn.query('select * from persona', (err, datos) =>{
            if (err){
                res.json(err);
            }
            res.json(datos);
        });
    });
};

controller.save = (req, res) =>{
    const data = req.body;
    req.getConnection((err,conn) => {
        console.log(data);
            conn.query('insert IGNORE into persona (nombre, fecha) VALUES (?, ?)', [data.nombre, data.fecha],(err, datos) =>{
                if (err){
                    res.json(err);
                }
                res.json(datos);   
            }); 
    });
};

module.exports = controller;