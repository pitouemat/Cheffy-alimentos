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

## 📄 Licença

Projeto criado para Cheffy Alimentos - 2026
