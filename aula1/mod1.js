const nome = 'Mathues';
const sobrenome = 'Miranda';

const falaNome = () => {
  console.log(nome, sobrenome);
}

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que leu quiser exportar';
