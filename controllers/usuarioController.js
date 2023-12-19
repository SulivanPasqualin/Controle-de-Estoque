const Usuario = require('../models/usuario');
const Usuario_PJ = require('../models/usuario_PJ');
const Usuario_PF = require('../models/usuario_PF');

// Método para lidar com o cadastro de usuários
exports.cadastrarUsuario = async (req, res) => {
  const { tipo_usuario } = req.body; // Verifique o tipo de usuário (PF ou PJ)

  try {
    let novoUsuario;

    // Criação do usuário comum
    const { email, senha, tipo_usuario } = req.body;
    console.log('Dados recebidos:', email, senha, tipo_usuario);
    novoUsuario = await Usuario.create({ email, senha, tipo_usuario });
    console.log('Novo usuário criado:', novoUsuario);

    // Verificação do tipo de usuário e criação do registro específico com base nisso
    if (tipo_usuario === 'pf') {
      const { nome, cpf } = req.body;
      console.log('Dados PF:', nome, cpf);
      await Usuario_PF.create({ nome, cpf, UsuarioId: novoUsuario.id }); // Associando ao usuário comum
    } else if (tipo_usuario === 'pj') {
      const { nomeFantasia, razaoSocial, cnpj } = req.body;
      console.log('Dados PJ:', nomeFantasia, razaoSocial, cnpj);
      await Usuario_PJ.create({ nomeFantasia, razaoSocial, cnpj, UsuarioId: novoUsuario.id }); // Associando ao usuário comum
    }

    // Envio de resposta de sucesso
    return res.status(201).json({ message: 'Usuário cadastrado com sucesso!', novoUsuario });
  } catch (error) {
    // Envio de mensagem de erro
    console.error('Erro ao cadastrar usuário:', error);
    return res.status(500).json({ error: 'Erro ao cadastrar usuário', details: error.message });
  }
};