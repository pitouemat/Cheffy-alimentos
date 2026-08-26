# Configuração do recebimento de leads

## Como o fluxo funcionará

Quando o cliente preencher o formulário, a página enviará nome, e-mail, WhatsApp, data e página de origem para um Web App do Google Apps Script. O script registrará uma nova linha na aba `Leads` da planilha e enviará um aviso para o e-mail configurado.

> O navegador do cliente não terá acesso à planilha nem às credenciais. A página conhecerá apenas a URL pública de recebimento do formulário.

## 1. Criar a planilha

Crie ou abra uma planilha no Google Sheets que será usada para armazenar os leads. O nome da primeira aba pode ser qualquer um; o script criará automaticamente uma aba chamada `Leads` se ela ainda não existir.

## 2. Criar o script

Na planilha, abra **Extensões → Apps Script**. Apague o conteúdo do editor, copie todo o conteúdo do arquivo `google-apps-script.gs` e cole no editor.

Altere esta linha para o endereço que receberá as notificações:

```javascript
const NOTIFY_EMAIL = 'SEU_EMAIL_AQUI@exemplo.com';
```

É possível usar mais de um endereço separado por vírgula, se necessário.

Salve o projeto.

## 3. Publicar como Web App

No editor do Apps Script, selecione **Implantar → Nova implantação**. Escolha o tipo **Aplicativo da Web**, configure **Executar como: Eu** e, em **Quem pode acessar**, selecione **Qualquer pessoa**. Clique em **Implantar**, autorize o acesso solicitado pelo Google e copie a URL que termina em `/exec`.

A opção “Qualquer pessoa” é necessária porque o formulário é público e precisa aceitar envios de visitantes que não estão logados na conta Google.

## 4. Colar a URL no site

Abra o arquivo `script.js` e localize:

```javascript
const CHEFFY_LEAD_ENDPOINT = '';
```

Cole a URL do Web App entre as aspas:

```javascript
const CHEFFY_LEAD_ENDPOINT = 'https://script.google.com/macros/s/SEU_ID/exec';
```

Depois, publique novamente o `index.html`, `styles.css`, `script.js` e os assets da landing page no servidor do site.

## 5. Fazer um teste

Abra o site publicado, preencha o formulário com um nome, e-mail e WhatsApp de teste e envie. O resultado esperado é uma nova linha na aba `Leads` e uma mensagem no e-mail definido em `NOTIFY_EMAIL`.

Se a URL ainda estiver vazia, o site permanecerá em modo de demonstração e continuará salvando o cadastro apenas no navegador. Depois que a URL `/exec` for configurada, o sucesso exibido pelo formulário mudará para “Cadastro enviado!”.

## Colunas criadas

| Coluna | Conteúdo |
| --- | --- |
| Data e hora | Momento em que o cadastro foi recebido |
| Nome | Nome informado pelo cliente |
| E-mail | E-mail informado pelo cliente |
| WhatsApp | Telefone formatado informado pelo cliente |
| Página de origem | URL da página que recebeu o lead |

## Observações importantes

A planilha deve ser compartilhada apenas com as pessoas da equipe que precisam consultar os leads. O script também protege células contra fórmulas iniciadas por `=`, `+`, `-` ou `@` e valida os campos básicos antes de salvar.

Como o formulário coleta dados de contato, mantenha uma política de privacidade compatível com o uso dos dados e deixe claro para o cliente que ele receberá contato pelos canais informados.
