exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    Outro campo: <input type="text" name="aquiOutroCampo">
    <button>Enviar</button>
    </from>
  `);
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de post')
};