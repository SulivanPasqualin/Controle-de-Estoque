const Usuario = require('../models/usuario');
const Usuario_PJ = require('../models/usuario_PJ');
const Usuario_PF = require('../models/usuario_PF');

// Método para lidar com o cadastro de usuários
exports.cadastrarUsuario = async (req, res) => {
  const { tipo_usuario } = req.body; // Verifique o tipo de usuário (PF ou PJ)

  try {
    let novoUsuario;

    // Verifique o tipo de usuário e crie um novo registro com base nisso
    if (tipo_usuario === 'pf') {
      const { nome, cpf, email, senha } = req.body;
      novoUsuario = await Usuario.create({ email, senha, tipo_usuario})
      novoUsuario = await Usuario_PF.create({ nome, cpf });
    } else if (tipo_usuario === 'pj') {
      const { nomeFantasia, razaoSocial, cnpj, email, senha } = req.body;
      novoUsuario = await Usuario.create({ email, senha, tipo_usuario})
      novoUsuario = await Usuario_PJ.create({ nomeFantasia, razaoSocial, cnpj });
    }

    // Envie uma resposta de sucesso
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!', novoUsuario });
  } catch (error) {
    // Em caso de erro, envie uma mensagem de erro
    return res.status(500).json({ error: 'Erro ao cadastrar usuário', details: error.message });
  }
};