# Cheffy Alimentos - Landing Page

Landing page profissional para o Cheffy Alimentos em HTML, CSS e JavaScript puro.

## 📋 Conteúdo

- **index.html** - Página HTML principal com toda a estrutura
- **styles.css** - Estilos CSS com design responsivo
- **script.js** - Lógica JavaScript interativa
- **README.md** - Este arquivo

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
Simplesmente abra o arquivo `index.html` no seu navegador.

### Opção 2: Usar um Servidor Local
Para melhor experiência e evitar problemas de CORS:

```bash
# Com Python 3
python -m http.server 8000

# Com Python 2
python -m SimpleHTTPServer 8000

# Com Node.js (http-server)
npx http-server

# Com Node.js (live-server)
npx live-server
```

Depois acesse: `http://localhost:8000`

## 🎨 Design

- **Tipografia**: Fraunces (serifada elegante) para títulos + Inter para corpo
- **Cores Principais**: Verde escuro (#2C462E), Branco, Roxo suave
- **Layout**: Responsivo e otimizado para mobile, tablet e desktop
- **Animações**: Transições suaves e efeitos ao scroll

## 📱 Seções

1. **Header** - Navegação fixa com logo e menu
2. **Hero** - Headline impactante com CTA
3. **Problema & Solução** - Comparação visual
4. **Funcionalidades** - Grid de 12 funcionalidades principais
5. **Benefícios** - Seção com fundo verde
6. **Preços** - Plano de assinatura destacado
7. **FAQ** - Perguntas frequentes com accordion
8. **CTA Final** - Última oportunidade de conversão
9. **Footer** - Links e informações

## ⚙️ Personalização

### Adicionar Imagens
Substitua as URLs de placeholder no `index.html`:
```html
<img src="https://via.placeholder.com/600x400" alt="...">
```

Por suas próprias imagens:
```html
<img src="seu-caminho/imagem.jpg" alt="...">
```

### Modificar Cores
Edite as cores no `styles.css`:
```css
--primary: #2C462E;  /* Verde escuro */
--white: #FFFFFF;
--gray: #F9FAFB;
```

### Adicionar Funcionalidades
Edite o array `features` no `script.js`:
```javascript
const features = [
    { 
        icon: 'fas fa-icon-name', 
        title: 'Título', 
        description: 'Descrição' 
    },
    // ... mais funcionalidades
];
```

### Modificar FAQ
Edite o array `faqs` no `script.js`:
```javascript
const faqs = [
    {
        question: 'Sua pergunta?',
        answer: 'Sua resposta aqui.'
    },
    // ... mais perguntas
];
```

## 🔗 Links Úteis

- [Font Awesome Icons](https://fontawesome.com/icons) - Para adicionar novos ícones
- [Google Fonts](https://fonts.google.com) - Para mudar fontes
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors) - Para referência de cores

## 📝 Notas

- Todos os dados (funcionalidades, benefícios, FAQ) estão no `script.js` para fácil edição
- As imagens usam placeholders - substitua pelos seus próprios arquivos
- O design é totalmente responsivo
- Não requer nenhuma dependência externa (exceto Font Awesome via CDN)

## 🎯 Próximas Melhorias

1. Adicionar formulário de contato funcional
2. Integrar com WhatsApp API
3. Adicionar depoimentos de clientes
4. Implementar dark mode
5. Adicionar mais animações

## 📊 Nova experiência de Relatórios

A seção **Relatórios** ganhou um showcase interativo inspirado no painel de gestão do Cheffy. Além da captura visual de referência, a página apresenta cinco visões demonstrativas — Vendas, Financeiro, Estoque, Clientes e Produtos — com indicadores, rankings, alertas e insights de decisão.

Os dados exibidos nesta landing page são demonstrativos e foram organizados para comunicar a experiência do produto. Eles não substituem a integração com os dados da aplicação autenticada. A imagem `relatorios-referencia.png` é usada como referência visual local dentro do preview responsivo.

### Interações disponíveis

As abas da demonstração podem ser acionadas por mouse ou teclado. As setas direcionais, `Home` e `End` navegam entre as visões, enquanto o botão **Exportar visão** apresenta um estado de confirmação demonstrativo. A barra de controle permite alternar entre últimos 7 dias, últimos 30 dias e este mês. O bloco de recomendações conecta rentabilidade, estoque e recorrência de clientes a ações de navegação dentro do próprio relatório. O layout se adapta a telas pequenas, tablets e desktops.

## 🖼️ Carrossel do hero

A imagem estática do hero foi substituída por um carrossel automático com quatro telas reais do Cheffy: `hero-painel.png`, `hero-relatorios.png`, `hero-precificacao.png` e `hero-encomendas.png`. Os slides alternam a cada 3 segundos, pausam ao passar o mouse ou ao receber foco e podem ser controlados pelas setas, pelos indicadores ou pelas teclas `ArrowLeft` e `ArrowRight`. O carrossel também respeita a preferência de redução de movimento do sistema.

## 📝 Formulário de cadastro

Os botões **Comece Agora** e **Comece Seu Teste Agora** abrem um formulário responsivo com os campos obrigatórios **nome**, **e-mail** e **WhatsApp**. O formulário inclui máscara para telefone brasileiro, validação de preenchimento, validação de e-mail, aceite de contato, fechamento por botão, clique fora ou tecla `Esc`, foco inicial e navegação por teclado.

O arquivo `script.js` já está preparado para enviar os cadastros a um Web App do Google Apps Script. Quando a constante `CHEFFY_LEAD_ENDPOINT` recebe a URL de implantação, cada cadastro é registrado na aba `Leads` de uma planilha Google e uma notificação é enviada para o endereço configurado. Enquanto a URL estiver vazia, o site permanece em modo de demonstração e usa o `localStorage` do navegador. Consulte `CONFIGURACAO-GOOGLE-SHEETS.md` para ativar o recebimento real.

## 📄 Licença

Projeto criado para Cheffy Alimentos - 2026
