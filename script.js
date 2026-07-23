/* ==================================================
   ANIMAÇÕES DE ENTRADA
================================================== */

.animacao-entrada {
    opacity: 0;
    transform: translateY(35px);
    transition:
        opacity 0.75s ease,
        transform 0.75s ease;
    transition-delay: var(--atraso-animacao, 0ms);
}

.animacao-entrada.animacao-visivel {
    opacity: 1;
    transform: translateY(0);
}

.hero-imagem.animacao-entrada,
.sobre-imagem.animacao-entrada,
.contato-mapa.animacao-entrada {
    transform: translateY(25px) scale(0.97);
}

.hero-imagem.animacao-entrada.animacao-visivel,
.sobre-imagem.animacao-entrada.animacao-visivel,
.contato-mapa.animacao-entrada.animacao-visivel {
    transform: translateY(0) scale(1);
}

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }

    .animacao-entrada {
        opacity: 1;
        transform: none;
    }

}