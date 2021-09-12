const { Pool} = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    password: '12345',
    database: 'SAA',
    port: '5432'
})


const getUsers = async (req, res) => {
    
    const response = await pool.query('SELECT * FROM usuario');
    res.status(200).json(response.rows);
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO usuario (idusu) VALUES (7)', [idusu]);
    res.json({
        message: 'Usuário adicionado com sucesso!',
        body: {
            user: {idusu}
        }
    })
};



module.exports = {
    getUsers,
    createUser
    
};