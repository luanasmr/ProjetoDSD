const { Pool} = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    password: '12345',
    database: 'SAA',
    port: '5432'
})


const getUsers = async (req, res) => {
    const resposta = await pool.query('SELECT * FROM usuario ORDER BY idusu ASC');
    res.status(200).json(resposta.rows);
};

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const resposta = await pool.query('SELECT * FROM usuario WHERE idusu = $1;', [id]);
   res.json(resposta.rows);
   
};
const createUser = async (req, res) => {
    const { id } = req.body;
    const resposta = await pool.query('INSERT INTO usuario (idusu) VALUES ($1);', [id]);
    return res.json({
        message: 'Usuário adicionado com sucesso!',
        body: {
            user: {id} // aqui deveria ser id
        }
    })
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    
    const { id_novo } = req.body;

    const resposta =await pool.query('UPDATE usuario SET idusu = $1 WHERE idusu = $2', [
        id,
        id_novo
    ]);
    res.json('Usuário atualizado com sucesso!');
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM usuario where idusu = $1', [
        id
    ]);
    res.json(`Usuario ${id} deletado com sucesso!`);
};


const getHist = async (req, res) => {
    const resposta = await pool.query('SELECT * FROM historico ORDER BY idhist ASC');
    res.status(200).json(resposta.rows);
};

const getHistById = async (req, res) => {
    const idhist = parseInt(req.params.idhist);
    const resposta = await pool.query('SELECT * FROM historico WHERE idhist = $1', [idhist]);
    res.json(resposta.rows);
};


const createHist = async (req, res) => {
    const {  idusu, longitude, latitude } = req.body;
    // a data e hora a própria função nativa do banco now() já pega
    const resposta = await pool.query('INSERT INTO historico ( idusu, data_hora,longitude, latitude) VALUES ($1,  now(), $2, $3)', [ idusu, longitude, latitude]);
    res.json({
        message: 'Histórico adicionado com sucesso!',
        body: {
            historico: { idusu, longitude, latitude}
        }
    })
};

const updateHist = async (req, res) => {
    const idhist = parseInt(req.params.idhist);

    // aqui precisa pegar no corpo a latitude e longitude
    const { latitude, longitude } = req.body;

    const resposta =await pool.query('UPDATE historico SET latitude = $1, longitude = $2 WHERE idhist = $3', [
        latitude, 
        longitude,
        idhist
    ]);
    res.json('Histórico  atualizado com sucesso!');
};
const deleteHist = async (req, res) => {
    const idhist = parseInt(req.params.idhist);
    await pool.query('DELETE FROM historico where idhist = $1', [
        idhist
    ]);
    res.json(`Histórico ${idhist} deletado com sucesso`);
};



module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getHist,
    getHistById,
    createHist,
    updateHist,
    deleteHist
    
};