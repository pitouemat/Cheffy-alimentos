# Validação do formulário de cadastro

A página local respondeu com HTTP 200 para `index.html`, `styles.css` e `script.js`.

O clique no botão principal `Comece Agora` abriu o modal com os campos Nome, E-mail e WhatsApp. O preenchimento de `11999998888` foi formatado visualmente como `(11) 99999-8888`, confirmando a máscara de telefone. O modal também apresentou o checkbox de consentimento e o botão `Quero começar meu teste`.

A página carregou os demais conteúdos existentes e os cinco gatilhos `data-open-signup` foram identificados: cabeçalho, hero, dois planos e CTA final.

A submissão com dados de teste válidos exibiu a tela de sucesso “Cadastro recebido!” com o nome informado. O botão “Fechar” encerrou o modal e devolveu o foco ao botão que havia aberto o formulário.

A submissão sem preenchimento exibiu mensagens específicas para nome, e-mail e WhatsApp, marcou os campos inválidos e manteve o modal aberto, sem registrar o lead.
