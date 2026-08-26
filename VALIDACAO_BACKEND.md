# Validação da integração de leads

O frontend foi atualizado para usar `CHEFFY_LEAD_ENDPOINT`. Quando a constante recebe uma URL de implantação, o formulário envia os campos por `POST` para o Web App do Google Apps Script. Quando a constante permanece vazia, o modo de demonstração continua ativo e usa o `localStorage`.

Foi criado o arquivo `google-apps-script.gs`, que valida os dados, cria ou reutiliza a aba `Leads`, registra data, nome, e-mail, WhatsApp e origem, e envia notificação por e-mail usando `NOTIFY_EMAIL`.

A sintaxe do `script.js` e do `google-apps-script.gs` foi validada. O envio real ainda depende de publicar o Apps Script em uma conta Google, configurar o e-mail destinatário e colar a URL `/exec` na constante `CHEFFY_LEAD_ENDPOINT`.
