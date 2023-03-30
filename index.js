

const {Client} = require('pg')

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'orden',
    password: 'AFMR9120.',
    port: 5433,
}


const client = new Client(config);


async function verDatos() {
    const sql2 = 'SELECT * FROM aire.formulario';



    await client.connect()

    const res = await client.query(sql2)
    console.log(res.rows) // Hello world!
    await client.end()

}




function enviarDatos() {



    client.connect();

    // const sql = 'INSERT INTO formulario (fecha, cliente,factura,ciudad,direccion,telefono,cantidad,tipo,marca,modelo,btu,instalador,monto,detalles,orden) VALUES ($1, $2, $3 ,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)';
    const sql = 'INSERT INTO aire.formulario( fecha, cliente, factura, ciudad, direccion, telefono, cantidad, tipo, marca, modelo, btu, instalador, monto, detalles, orden)   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    const values = [fecha.value, cliente.value,factura.value,ciudad.value,direccion.value,telefono.value,cantidad.value,tipo.value,marca.value,modelo.value,btu.value,instalador.value,monto.value,detalles.value,orden.value]

    client.query(sql, values, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Los datos han sido enviados a la base de datos');
    client.end();
});




}

verDatos().then((result) => {
    console.log(result)
})
