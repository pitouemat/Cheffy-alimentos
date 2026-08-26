// ==================== Configuração do recebimento ====================
// Cole aqui a URL da implantação do Google Apps Script para ativar o envio real.
const CHEFFY_LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzczF-VnFY84DyxCi1hHFnST-Q4gKiLMX4fP48VHwtE5nDo2vYdD8cLvShIS1ZA5CQ_/exec';

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

// ==================== Formulário de cadastro ====================

function initializeSignupForm() {
    const modal = document.getElementById('signupModal');
    const form = document.getElementById('signupForm');
    const success = document.getElementById('signupSuccess');

    if (!modal || !form || !success) {
        return;
    }

    const nameInput = document.getElementById('signupName');
    const emailInput = document.getElementById('signupEmail');
    const whatsappInput = document.getElementById('signupWhatsapp');
    const consentInput = form.querySelector('input[name="consent"]');
    const successName = success.querySelector('[data-success-name]');
    const successTitle = success.querySelector('[data-success-title]');
    const successCopy = success.querySelector('[data-success-copy]');
    const feedback = document.getElementById('signupFeedback');
    const submitButton = form.querySelector('button[type="submit"]');
    let lastFocusedElement = null;

    const getFocusableElements = () => Array.from(modal.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(element => !element.closest('[hidden]'));

    function clearFieldError(input) {
        if (!input) {
            return;
        }

        const field = input.closest('.signup-field');
        const error = document.querySelector(`[data-error-for="${input.id}"]`);

        field?.classList.remove('has-error');
        input.removeAttribute('aria-invalid');
        if (error) {
            error.textContent = '';
        }
    }

    function setFieldError(input, message) {
        if (!input) {
            return;
        }

        const field = input.closest('.signup-field');
        const error = document.querySelector(`[data-error-for="${input.id}"]`);

        field?.classList.toggle('has-error', Boolean(message));
        input.setAttribute('aria-invalid', String(Boolean(message)));
        if (error) {
            error.textContent = message;
        }
    }

    function setFeedback(message, tone = '') {
        if (!feedback) {
            return;
        }

        feedback.className = `signup-feedback${tone ? ` is-${tone}` : ''}`;
        feedback.textContent = message;
    }

    function setSubmitState(isSending) {
        if (!submitButton) {
            return;
        }

        submitButton.disabled = isSending;
        submitButton.innerHTML = isSending
            ? '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Enviando...'
            : 'Quero começar meu teste <i class="fas fa-arrow-right"></i>';
    }

    function resetSignup() {
        form.reset();
        [nameInput, emailInput, whatsappInput].forEach(clearFieldError);
        consentInput?.closest('.signup-consent')?.classList.remove('has-error');
        setFeedback('');
        setSubmitState(false);
        if (successTitle) {
            successTitle.textContent = 'Cadastro recebido!';
        }
        if (successCopy) {
            successCopy.textContent = 'Em breve entraremos em contato para ajudar você a começar.';
        }
        form.hidden = false;
        success.hidden = true;
    }

    function openSignup() {
        lastFocusedElement = document.activeElement;
        resetSignup();
        modal.hidden = false;
        document.body.classList.add('signup-modal-open');
        window.requestAnimationFrame(() => nameInput?.focus());
    }

    function closeSignup() {
        modal.hidden = true;
        document.body.classList.remove('signup-modal-open');
        lastFocusedElement?.focus?.();
    }

    function formatWhatsapp(value) {
        const digits = value.replace(/\D/g, '').slice(0, 11);

        if (digits.length <= 2) {
            return digits ? `(${digits}` : '';
        }

        if (digits.length <= 7) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        }

        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }

    function validateForm() {
        let isValid = true;
        const name = nameInput?.value.trim() || '';
        const email = emailInput?.value.trim() || '';
        const whatsappDigits = whatsappInput?.value.replace(/\D/g, '') || '';

        clearFieldError(nameInput);
        clearFieldError(emailInput);
        clearFieldError(whatsappInput);
        consentInput?.closest('.signup-consent')?.classList.remove('has-error');

        if (name.length < 2) {
            setFieldError(nameInput, 'Informe seu nome.');
            isValid = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setFieldError(emailInput, 'Informe um e-mail válido.');
            isValid = false;
        }

        if (![10, 11].includes(whatsappDigits.length)) {
            setFieldError(whatsappInput, 'Informe um WhatsApp com DDD.');
            isValid = false;
        }

        if (consentInput && !consentInput.checked) {
            consentInput.closest('.signup-consent')?.classList.add('has-error');
            isValid = false;
        }

        if (!isValid) {
            const firstInvalid = [nameInput, emailInput, whatsappInput].find(input => input?.getAttribute('aria-invalid') === 'true');
            firstInvalid?.focus();
        }

        return isValid;
    }

    document.querySelectorAll('[data-open-signup]').forEach(button => {
        button.addEventListener('click', openSignup);
    });

    modal.querySelectorAll('[data-close-signup]').forEach(button => {
        button.addEventListener('click', closeSignup);
    });

    whatsappInput?.addEventListener('input', event => {
        event.target.value = formatWhatsapp(event.target.value);
        clearFieldError(event.target);
    });

    [nameInput, emailInput].forEach(input => {
        input?.addEventListener('input', () => clearFieldError(input));
    });

    consentInput?.addEventListener('change', () => {
        consentInput.closest('.signup-consent')?.classList.remove('has-error');
    });

    modal.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeSignup();
            return;
        }

        if (event.key !== 'Tab') {
            return;
        }

        const focusableElements = getFocusableElements();
        if (!focusableElements.length) {
            return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    });

    form.addEventListener('submit', async event => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const lead = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            whatsapp: whatsappInput.value.trim(),
            createdAt: new Date().toISOString(),
            source: window.location.href
        };

        setSubmitState(true);
        setFeedback(CHEFFY_LEAD_ENDPOINT.trim() ? 'Enviando seus dados...' : 'Modo de demonstração: configurando o recebimento...');

        if (CHEFFY_LEAD_ENDPOINT.trim()) {
            try {
                await fetch(CHEFFY_LEAD_ENDPOINT.trim(), {
                    method: 'POST',
                    mode: 'no-cors',
                    body: new URLSearchParams(lead)
                });
            } catch (error) {
                console.error('Não foi possível enviar o cadastro.', error);
                setSubmitState(false);
                setFeedback('Não foi possível enviar agora. Verifique sua conexão e tente novamente.', 'error');
                return;
            }
        } else {
            try {
                const storedLeads = JSON.parse(localStorage.getItem('cheffyLeads') || '[]');
                localStorage.setItem('cheffyLeads', JSON.stringify([...storedLeads, lead]));
            } catch (error) {
                console.warn('Não foi possível salvar o cadastro localmente.', error);
            }
        }

        if (successName) {
            successName.textContent = lead.name;
        }

        if (CHEFFY_LEAD_ENDPOINT.trim()) {
            if (successTitle) {
                successTitle.textContent = 'Cadastro enviado!';
            }
            if (successCopy) {
                successCopy.textContent = 'Seus dados foram registrados. Em breve entraremos em contato para ajudar você a começar.';
            }
        } else {
            if (successTitle) {
                successTitle.textContent = 'Formulário configurado!';
            }
            if (successCopy) {
                successCopy.textContent = 'O envio real será ativado assim que a URL da planilha for configurada no script.';
            }
        }

        form.hidden = true;
        success.hidden = false;
        success.setAttribute('tabindex', '-1');
        success.focus();
    });
}

// ==================== Carrossel do hero ====================

function initializeHeroCarousel() {
    const carousel = document.getElementById('heroCarousel');

    if (!carousel) {
        return;
    }

    const slides = Array.from(carousel.querySelectorAll('[data-hero-slide]'));
    const dots = Array.from(carousel.querySelectorAll('[data-hero-dot]'));
    const previousButton = carousel.querySelector('[data-hero-prev]');
    const nextButton = carousel.querySelector('[data-hero-next]');
    const title = document.getElementById('heroCarouselTitle');
    const meta = document.getElementById('heroCarouselMeta');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const slideContent = [
        {
            title: 'Painel de gestão',
            meta: 'Uma visão completa do seu negócio'
        },
        {
            title: 'Relatórios inteligentes',
            meta: 'Transforme dados em decisões melhores'
        },
        {
            title: 'Precificação estratégica',
            meta: 'Calcule custos e proteja sua margem'
        },
        {
            title: 'Encomendas organizadas',
            meta: 'Acompanhe pedidos e entregas em um só lugar'
        }
    ];

    if (!slides.length) {
        return;
    }

    let activeIndex = slides.findIndex(slide => slide.classList.contains('is-active'));
    let autoplayId = null;
    let isPaused = false;

    if (activeIndex < 0) {
        activeIndex = 0;
    }

    function renderSlide(index) {
        activeIndex = (index + slides.length) % slides.length;
        const activeContent = slideContent[activeIndex];

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === activeIndex;
            slide.classList.toggle('is-active', isActive);
            slide.hidden = !isActive;
            slide.setAttribute('aria-hidden', String(!isActive));
        });

        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === activeIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-selected', String(isActive));
            dot.tabIndex = isActive ? 0 : -1;
        });

        if (activeContent) {
            if (title) {
                title.textContent = activeContent.title;
            }

            if (meta) {
                meta.textContent = activeContent.meta;
            }
        }
    }

    function stopAutoplay() {
        if (autoplayId) {
            window.clearInterval(autoplayId);
            autoplayId = null;
        }
    }

    function startAutoplay() {
        stopAutoplay();

        if (reduceMotion.matches || isPaused || slides.length < 2) {
            return;
        }

        autoplayId = window.setInterval(() => {
            renderSlide(activeIndex + 1);
        }, 3000);
    }

    function goTo(index) {
        renderSlide(index);
        startAutoplay();
    }

    previousButton?.addEventListener('click', () => goTo(activeIndex - 1));
    nextButton?.addEventListener('click', () => goTo(activeIndex + 1));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goTo(index));

        dot.addEventListener('keydown', event => {
            if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
                return;
            }

            event.preventDefault();
            let nextIndex = index;

            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                nextIndex = (index + 1) % dots.length;
            }

            if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                nextIndex = (index - 1 + dots.length) % dots.length;
            }

            if (event.key === 'Home') {
                nextIndex = 0;
            }

            if (event.key === 'End') {
                nextIndex = dots.length - 1;
            }

            goTo(nextIndex);
            dots[nextIndex]?.focus();
        });
    });

    carousel.addEventListener('mouseenter', () => {
        isPaused = true;
        stopAutoplay();
    });

    carousel.addEventListener('mouseleave', () => {
        isPaused = false;
        startAutoplay();
    });

    carousel.addEventListener('focusin', () => {
        isPaused = true;
        stopAutoplay();
    });

    carousel.addEventListener('focusout', event => {
        if (!carousel.contains(event.relatedTarget)) {
            isPaused = false;
            startAutoplay();
        }
    });

    carousel.addEventListener('keydown', event => {
        if (event.target !== carousel) {
            return;
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            goTo(activeIndex - 1);
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            goTo(activeIndex + 1);
        }
    });

    reduceMotion.addEventListener?.('change', startAutoplay);
    renderSlide(activeIndex);
    startAutoplay();
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

    initializeSignupForm();

    initializeHeroCarousel();

    initializeAnimations();

    initializeReportsDemo();

    initializeReportEnhancements();
});


// ==================== Showcase de Relatórios ====================

const reportTabsData = {
    vendas: {
        title: 'Visão de vendas',
        status: 'Período selecionado: últimos 30 dias',
        exportLabel: 'vendas',
        metrics: [
            { label: 'Pedidos', value: '22', detail: '<i class="fas fa-arrow-up"></i> 12,4% vs. período anterior', tone: '' },
            { label: 'Receita no período', value: 'R$ 4.754,46', detail: 'média diária de R$ 158,48', tone: 'accent' },
            { label: 'Ticket médio', value: 'R$ 216,11', detail: 'por pedido concluído', tone: '' },
            { label: 'Margem estimada', value: '25,1%', detail: '<i class="fas fa-arrow-trend-up"></i> acima do período anterior', tone: 'positive' }
        ]
    },
    financeiro: {
        title: 'Visão financeira',
        status: 'Período selecionado: julho a agosto',
        exportLabel: 'financeiro',
        metrics: [
            { label: 'Receita total', value: 'R$ 5.254,46', detail: 'vendas + outras receitas', tone: 'accent' },
            { label: 'Despesas operacionais', value: 'R$ 268,00', detail: 'contas e utensílios', tone: '' },
            { label: 'Lucro bruto', value: 'R$ 1.191,57', detail: 'margem de 25,1%', tone: 'positive' },
            { label: 'Lucro líquido', value: 'R$ 1.423,57', detail: '<i class="fas fa-arrow-trend-up"></i> resultado estimado', tone: 'positive' }
        ]
    },
    estoque: {
        title: 'Visão de estoque',
        status: 'Período selecionado: últimos 30 dias',
        exportLabel: 'estoque',
        metrics: [
            { label: 'Valor em estoque', value: 'R$ 1.232,06', detail: 'insumos cadastrados', tone: 'accent' },
            { label: 'Consumo no período', value: 'R$ 0,00', detail: 'sem movimentação registrada', tone: '' },
            { label: 'Perdas no período', value: 'R$ 0,00', detail: 'nenhum desperdício lançado', tone: '' },
            { label: 'Abaixo do mínimo', value: '21 itens', detail: '<i class="fas fa-circle-exclamation"></i> revisar compras', tone: 'positive' }
        ]
    },
    clientes: {
        title: 'Visão de clientes',
        status: 'Período selecionado: últimos 30 dias',
        exportLabel: 'clientes',
        metrics: [
            { label: 'Clientes com compras', value: '7', detail: 'base ativa no período', tone: '' },
            { label: 'Ticket médio', value: 'R$ 235,59', detail: 'por cliente ativo', tone: 'accent' },
            { label: 'Clientes recorrentes', value: '3 (43%)', detail: '<i class="fas fa-arrow-trend-up"></i> oportunidade de fidelização', tone: 'positive' },
            { label: 'Inativos há +60 dias', value: '0', detail: 'nenhum cliente parado', tone: 'positive' }
        ]
    },
    produtos: {
        title: 'Visão de produtos',
        status: 'Período selecionado: últimos 30 dias',
        exportLabel: 'produtos',
        metrics: [
            { label: 'Produtos vendidos', value: '16 de 16', detail: 'todo o catálogo teve giro', tone: '' },
            { label: 'Receita', value: 'R$ 4.754,46', detail: 'vendas no período', tone: 'accent' },
            { label: 'Lucro', value: 'R$ 1.191,57', detail: 'margem média de 25,1%', tone: 'positive' },
            { label: 'Abaixo do alvo (30%)', value: '7 itens', detail: '<i class="fas fa-sliders"></i> revisar precificação', tone: '' }
        ]
    }
};

const reportPeriodData = {
    '7': {
        label: 'últimos 7 dias',
        comparison: 'Comparando com os 7 dias anteriores'
    },
    '30': {
        label: 'últimos 30 dias',
        comparison: 'Comparando com os 30 dias anteriores'
    },
    mes: {
        label: 'este mês',
        comparison: 'Comparando com o mês anterior'
    }
};

window.cheffyReportPeriod = reportPeriodData['30'];

function initializeReportEnhancements() {
    const periodButtons = Array.from(document.querySelectorAll('[data-report-period]'));
    const periodMeta = document.getElementById('reportPeriodMeta');
    const status = document.getElementById('reportStatus');
    const statusText = status ? status.querySelector('span') : null;
    const actionLinks = Array.from(document.querySelectorAll('[data-report-action]'));

    periodButtons.forEach(button => {
        button.addEventListener('click', () => {
            const period = reportPeriodData[button.dataset.reportPeriod];

            if (!period) {
                return;
            }

            window.cheffyReportPeriod = period;
            periodButtons.forEach(otherButton => {
                const isActive = otherButton === button;
                otherButton.classList.toggle('is-active', isActive);
                otherButton.setAttribute('aria-pressed', String(isActive));
            });

            if (periodMeta) {
                periodMeta.textContent = period.comparison;
            }

            if (statusText) {
                statusText.textContent = `Período selecionado: ${period.label}`;
            }

            const activeTab = document.querySelector('[data-report-tab].is-active');
            if (activeTab) {
                activeTab.click();
            }
        });
    });

    periodButtons.forEach(button => {
        button.setAttribute('aria-pressed', String(button.classList.contains('is-active')));
    });

    actionLinks.forEach(action => {
        action.addEventListener('click', () => {
            const targetTab = document.querySelector(`[data-report-tab="${action.dataset.reportAction}"]`);
            const reportDemo = document.querySelector('.reports-demo');

            if (!targetTab) {
                return;
            }

            targetTab.click();
            targetTab.focus();
            reportDemo?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
}

function renderReportMetrics(metricsEl, metrics) {
    if (!metricsEl || !metrics) {
        return;
    }

    metricsEl.innerHTML = metrics.map(metric => `
        <div class="report-metric${metric.tone ? ` report-metric-${metric.tone}` : ''}">
            <span>${metric.label}</span>
            <strong>${metric.value}</strong>
            <small>${metric.detail}</small>
        </div>
    `).join('');
}

function initializeReportsDemo() {
    const tabs = Array.from(document.querySelectorAll('[data-report-tab]'));
    const panels = Array.from(document.querySelectorAll('.report-panel[role="tabpanel"]'));
    const title = document.getElementById('reportDemoTitle');
    const status = document.getElementById('reportStatus');
    const metrics = document.getElementById('reportMetrics');
    const exportButton = document.querySelector('[data-report-export]');

    if (!tabs.length || !panels.length || !title || !status || !metrics) {
        return;
    }

    const statusText = status.querySelector('span');

    function activateReportTab(tab) {
        const key = tab.dataset.reportTab;
        const data = reportTabsData[key];

        if (!data) {
            return;
        }

        tabs.forEach(otherTab => {
            const isActive = otherTab === tab;
            otherTab.classList.toggle('is-active', isActive);
            otherTab.setAttribute('aria-selected', String(isActive));
            otherTab.tabIndex = isActive ? 0 : -1;
        });

        panels.forEach(panel => {
            const isActive = panel.id === `report-panel-${key}`;
            panel.hidden = !isActive;
            panel.classList.toggle('is-visible', isActive);
        });

        title.textContent = data.title;
        statusText.textContent = window.cheffyReportPeriod
            ? `Período selecionado: ${window.cheffyReportPeriod.label}`
            : data.status;
        renderReportMetrics(metrics, data.metrics);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => activateReportTab(tab));

        tab.addEventListener('keydown', event => {
            const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'];

            if (!keys.includes(event.key)) {
                return;
            }

            event.preventDefault();
            let nextIndex = index;

            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                nextIndex = (index + 1) % tabs.length;
            }

            if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                nextIndex = (index - 1 + tabs.length) % tabs.length;
            }

            if (event.key === 'Home') {
                nextIndex = 0;
            }

            if (event.key === 'End') {
                nextIndex = tabs.length - 1;
            }

            const nextTab = tabs[nextIndex];
            nextTab.focus();
            activateReportTab(nextTab);
        });
    });

    if (exportButton) {
        exportButton.addEventListener('click', () => {
            const activeTab = document.querySelector('[data-report-tab].is-active');
            const activeKey = activeTab ? activeTab.dataset.reportTab : 'vendas';
            const activeData = reportTabsData[activeKey];

            statusText.textContent = `Exportação demonstrativa preparada para ${activeData.exportLabel}.`;
            status.classList.add('is-exported');

            window.setTimeout(() => {
                statusText.textContent = activeData.status;
                status.classList.remove('is-exported');
            }, 2400);
        });
    }
}
