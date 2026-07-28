// ==================== Dados ====================

const features = [
    {
        icon: 'fas fa-chart-bar',
        title: 'Painel Inteligente',
        description: 'Visão completa do seu negócio com métricas em tempo real de vendas, lucros e despesas'
    },
    {
        icon: 'fas fa-shopping-cart',
        title: 'PDV / Vendas',
        description: 'Sistema de ponto de venda rápido e intuitivo para registrar vendas instantaneamente'
    },
    {
        icon: 'fas fa-box',
        title: 'Gestão de Encomendas',
        description: 'Organize pedidos, prazos de entrega e acompanhe o status de cada encomenda'
    },
    {
        icon: 'fas fa-utensils',
        title: 'Produtos & Receitas',
        description: 'Cadastro detalhado com ficha técnica automática e cálculo de custos por produto'
    },
    {
        icon: 'fas fa-warehouse',
        title: 'Controle de Estoque',
        description: 'Rastreie insumos e produtos prontos com alertas de vencimento e falta'
    },
    {
        icon: 'fas fa-users',
        title: 'Gestão de Clientes',
        description: 'Base centralizada com histórico completo de pedidos e informações de contato'
    },
    {
        icon: 'fas fa-dollar-sign',
        title: 'Financeiro Automático',
        description: 'Fluxo de caixa automático, análise de lucratividade e margem de lucro'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Precificação Inteligente',
        description: 'Sugestões automáticas de preços baseadas em custos e margem desejada'
    },
    {
        icon: 'fas fa-calculator',
        title: 'Calculadora Rápida',
        description: 'Cálculos instantâneos de preços, custos e margens para decisões rápidas'
    },
    {
        icon: 'fas fa-calendar',
        title: 'Calendário de Produção',
        description: 'Organize sua produção por data e visualize a carga de trabalho'
    },
    {
        icon: 'fas fa-exclamation-circle',
        title: 'Gestão de Despesas',
        description: 'Controle detalhado de custos fixos, variáveis e despesas operacionais'
    },
    {
        icon: 'fas fa-file-alt',
        title: 'Relatórios Detalhados',
        description: 'Análise profunda do desempenho com gráficos e métricas personalizadas'
    }
];

const benefits = [
    'Organize sua cozinha em um único lugar',
    'Aumente seus lucros com precificação inteligente',
    'Economize tempo em gestão administrativa',
    'Acesse de qualquer dispositivo (PC, tablet, celular)',
    'Suporte técnico dedicado'
];

const pricingFeatures = [
    'Gestão de Estoque',
    'Gestão de Receitas e Produtos',
    'Gestão de Clientes e Pedidos',
    'Gestão Financeira e Precificação Inteligente',
    'Acesso Multiplataforma',
    'Cancele quando quiser'
];

const pricingFeaturesAnual = [
    'Tudo o que o mensal oferece',
    'Suporte técnico',
    '12 meses de acesso',
    'Economia de R$ 64,90 por ano',
    'Melhor opção para quem deseja economizar'
];

const faqs = [
    {
        question: 'O Cheffy funciona em celular?',
        answer: 'Sim! O Cheffy é um sistema web que funciona perfeitamente em computador, celular ou tablet. Não é necessário baixar aplicativo.'
    },
    {
        question: 'Como funciona a precificação inteligente?',
        answer: 'Com base nas informações fornecidas, o sistema calcula automaticamente o preço sugerido dos seus produtos.'
    },
    {
        question: 'Quais são os canais para suporte?',
        answer: 'Nosso suporte é feito via Whatasapp, das 08h às 17h'
    },
    {
        question: 'Há período de teste gratuito?',
        answer: 'Entre em contato conosco para conhecer as opções de teste e começar sua jornada com o Cheffy.'
    },
    {
        question: 'O Cheffy emite notas fiscais?',
        answer: 'Estamos desenvolvendo essa funcionalidade. Em breve você poderá emitir notas fiscais e enviar recibos pelo WhatsApp.'
    }
];

// ==================== Renderizar funcionalidades ====================

function renderFeatures(featuresGrid) {
    if (!featuresGrid) {
        return;
    }

    const iconColors = [
        'from-purple-500 to-indigo-500',
        'from-violet-500 to-purple-600',
        'from-indigo-500 to-purple-500',
    ];

    featuresGrid.innerHTML = features.map((feature, index) => `
        <div
            class="feature-card"
            style="animation: fadeInUp 0.6s ease-out ${index * 0.08}s both;"
        >
            <div class="feature-card-top-border"></div>
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>

            <h3>${feature.title}</h3>

            <p>${feature.description}</p>
        </div>
    `).join('');
}

// ==================== Renderizar benefícios ====================

function renderBenefits(benefitsList) {
    if (!benefitsList) {
        return;
    }

    benefitsList.innerHTML = benefits.map(benefit => `
        <li>
            <i class="fas fa-check-circle"></i>
            <span>${benefit}</span>
        </li>
    `).join('');
}

// ==================== Criar lista dos planos ====================

function createPricingList(pricingItems) {
    return pricingItems.map(feature => `
        <li>
            <i class="fas fa-check-circle"></i>
            <span>${feature}</span>
        </li>
    `).join('');
}

// ==================== Renderizar os dois planos ====================

function renderPricingFeatures(
    pricingFeaturesEl,
    pricingFeaturesAnualEl
) {
    if (pricingFeaturesEl) {
        pricingFeaturesEl.innerHTML = createPricingList(
            pricingFeatures
        );
    }

    if (pricingFeaturesAnualEl) {
        pricingFeaturesAnualEl.innerHTML = createPricingList(
            pricingFeaturesAnual
        );
    }
}

// ==================== Renderizar FAQ ====================

function renderFAQ(faqList) {
    if (!faqList) {
        return;
    }

    faqList.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item" data-index="${index}">
            <button
                class="faq-question"
                type="button"
                aria-expanded="false"
            >
                <span>${faq.question}</span>

                <i class="fas fa-chevron-down faq-icon"></i>
            </button>

            <div class="faq-answer">
                <div class="faq-answer-content">
                    ${faq.answer}
                </div>
            </div>
        </div>
    `).join('');

    const faqItems = faqList.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');

        questionButton.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');

            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');

                const otherButton = otherItem.querySelector(
                    '.faq-question'
                );

                otherButton.setAttribute(
                    'aria-expanded',
                    'false'
                );
            });

            if (!wasActive) {
                item.classList.add('active');

                questionButton.setAttribute(
                    'aria-expanded',
                    'true'
                );
            }
        });
    });
}

// ==================== Efeito do cabeçalho ====================

function initializeHeader(header) {
    if (!header) {
        return;
    }

    function updateHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    updateHeader();

    window.addEventListener('scroll', updateHeader, {
        passive: true
    });
}

// ==================== Menu mobile ====================

function initializeMobileMenu(menuToggle) {
    if (!menuToggle) {
        return;
    }

    const nav = document.querySelector('.nav');

    if (!nav) {
        return;
    }

    menuToggle.addEventListener('click', () => {
        const menuIsOpen = nav.style.display === 'flex';

        nav.style.display = menuIsOpen ? 'none' : 'flex';

        menuToggle.setAttribute(
            'aria-expanded',
            String(!menuIsOpen)
        );
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';

                menuToggle.setAttribute(
                    'aria-expanded',
                    'false'
                );
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.style.display = '';
        }
    });
}

// ==================== Rolagem suave ====================

function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            const selector = this.getAttribute('href');

            if (!selector || selector === '#') {
                return;
            }

            const target = document.querySelector(selector);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// ==================== Botões ====================

function initializeButtons() {
    document
        .querySelectorAll('.btn-primary, .btn-white')
        .forEach(button => {
            button.addEventListener('click', () => {
                console.log(
                    'Botão clicado:',
                    button.textContent.trim()
                );
            });
        });
}

// ==================== Animações ao rolar ====================

function initializeAnimations() {
    const sections = document.querySelectorAll('section');

    if (!('IntersectionObserver' in window)) {
        sections.forEach(section => {
            section.classList.add('fade-in-up');
        });

        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ==================== Inicialização ====================

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    const menuToggle = document.getElementById(
        'menuToggle'
    );

    const featuresGrid = document.getElementById(
        'featuresGrid'
    );

    const benefitsList = document.getElementById(
        'benefitsList'
    );

    const pricingFeaturesEl = document.getElementById(
        'pricingFeatures'
    );

    const pricingFeaturesAnualEl = document.getElementById(
        'pricingFeaturesAnual'
    );

    const faqList = document.getElementById(
        'faqList'
    );

    renderFeatures(featuresGrid);

    renderBenefits(benefitsList);

    renderPricingFeatures(
        pricingFeaturesEl,
        pricingFeaturesAnualEl
    );

    renderFAQ(faqList);

    initializeHeader(header);

    initializeMobileMenu(menuToggle);

    initializeSmoothScroll();

    initializeButtons();

    initializeAnimations();
});