import Mail from '../../lib/Mail';

class EmailController {
  async store(req, res) {
    const { nome, sobrenome, email, telefone, mensagem } = req.body;

    try {
      Mail.sendMail({
        to: `${nome} <${email}>`,
        subject: `Novo aluno ${nome} -  ${telefone} `,
        template: 'contato',
        context: {
          nome,
          sobrenome,
          telefone,
          email,
          mensagem,
        },
      });

      return res.json({ status: 'enviado', ...req.body });
    } catch (error) {
      return res.status(570).json(error);
    }
  }
}

export default new EmailController();
