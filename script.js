// ===============================
// DARK/LIGHT MODE
// ===============================
const toggle = document.getElementById("theme-toggle");
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });

    // ===============================
// TRANSLATION DICTIONARY
// ===============================

const translations = {
en: {
  paypal: "PayPal",
  pix: "Pix",

  "badge.commissions": "Animation Commissions",
  "header.name": "Nerd Itadori",
  "header.subtitle": "Animator • Smooth, game‑ready animations for Roblox & custom rigs",
  "theme.toggle": "Toggle Theme",

  "meta.experience": "7+ months experience",
  "meta.payments": "PayPal & Robux accepted",
  "meta.open": "Open for commissions",

  "pricing.type": "Type",
    "pricing.price": "Price",
    "pricing.int": "Intermediate animation",
    "pricing.complex": "Complex animation",
    "pricing.cutscene": "Add‑on: Cutscene",

  "contact.button": "Contact on Discord",

  "about.title": "About me",
  "about.text1": "Hi! I’m Nerd Itadori, an animator with over 7 months of experience creating smooth, game‑ready animations.",
  "about.text2": "I’m currently open for commissions and accept payments via PayPal or Robux.",

  "what.title": "What you get",
  "what.item1": "Smooth, polished animations ready for your game.",
  "what.item2": "Support for R6, R15, or custom rigs.",
  "what.item3": "Clean timing, transitions, and poses.",
  "what.item4": "Fast delivery and clear communication.",
  "what.item5": "One free revision for small adjustments.",

  "pricing.title": "Pricing",
  "pricing.note": "Prices may vary depending on complexity. Cutscenes are an add‑on.",
  "pricing.usd": "USD Prices",
  "pricing.robux": "Robux Prices",

  "contact.title": "Contact & workflow",
  "contact.item1": "Contact: Discord – nerditador",
  "contact.item2": "Include: game type, rig, references.",
  "contact.item3": "Delivery: usually 1–3 days.",
  "contact.item4": "Revisions: 1 free small revision.",

  "showcase.title": "Animation showcase",
  "showcase.note": "Replace VIDEO_ID_HERE with real YouTube IDs.",

  "terms.title": "Terms of service",
  "terms.item1": "Payment required before work begins.",
  "terms.item2": "No refunds once work has started.",
  "terms.item3": "Do not resell or redistribute animations.",
  "terms.item4": "Credit appreciated but not required.",   // ← FIXED COMMA

  "pill.ready": "Game‑ready",
  "pill.combat": "Combat & movement",
  "pill.cutscenes": "Cutscenes"
},

  pt: {
    paypal: "Pix",
    pix: "Pix",

    "pill.ready": "Pronto para jogo",
    "pill.combat": "Combate e movimento",
    "pill.cutscenes": "Cutscenes",
    "theme.toggle": "Alternar tema",

    "badge.commissions": "Comissões de Animação",
    "header.name": "Nerd Itadori",
    "header.subtitle": "Animador • Animações suaves e prontas para jogos no Roblox e rigs personalizados",

    "meta.experience": "Mais de 7 meses de experiência",
    "meta.payments": "Aceita Pix e Robux",
    "meta.open": "Aberto para comissões",

    "pricing.type": "Tipo",
    "pricing.price": "Preço",
    "pricing.int": "Animação intermediária",
    "pricing.complex": "Animação complexa",
    "pricing.cutscene": "Adicional: Cutscene",

    "contact.button": "Contato no Discord",

    "about.title": "Sobre mim",
    "about.text1": "Olá! Sou o Nerd Itadori, um animador com mais de 7 meses de experiência criando animações suaves e prontas para jogos.",
    "about.text2": "Atualmente estou aberto para comissões e aceito pagamentos via Pix ou Robux.",

    "what.title": "O que você recebe",
    "what.item1": "Animações suaves e polidas, prontas para o seu jogo.",
    "what.item2": "Suporte para rigs R6, R15 ou personalizados.",
    "what.item3": "Timing limpo, boas transições e poses.",
    "what.item4": "Entrega rápida e comunicação clara.",
    "what.item5": "Uma revisão gratuita para pequenos ajustes.",

    "pricing.title": "Preços",
    "pricing.note": "Os valores podem variar dependendo da complexidade. Cutscenes são adicionais.",
    "pricing.usd": "Preços em BRL",
    "pricing.robux": "Preços em Robux",

    "contact.title": "Contato & processo",
    "contact.item1": "Contato: Discord – nerditador",
    "contact.item2": "Inclua: tipo de jogo, rig, referências.",
    "contact.item3": "Entrega: geralmente 1–3 dias.",
    "contact.item4": "Revisões: 1 revisão gratuita para pequenos ajustes.",

    "showcase.title": "Vitrine de animações",
    "showcase.note": "Substitua VIDEO_ID_HERE pelos IDs reais do YouTube.",

    "terms.title": "Termos de serviço",
    "terms.item1": "Pagamento necessário antes de iniciar o trabalho.",
    "terms.item2": "Sem reembolsos após o início do trabalho.",
    "terms.item3": "Não revenda ou redistribua as animações.",
    "terms.item4": "Crédito é apreciado, mas não obrigatório."
  },

  es: {
    paypal: "PayPal",
    pix: "Pix",

    "badge.commissions": "Comisiones de Animación",
    "header.name": "Nerd Itadori",
    "header.subtitle": "Animador • Animaciones fluidas y listas para juegos en Roblox y rigs personalizados",
    "theme.toggle": "Cambiar tema",

    "meta.experience": "Más de 7 meses de experiencia",
    "meta.payments": "Acepta PayPal y Robux",
    "meta.open": "Abierto para comisiones",

    "pricing.type": "Tipo",
    "pricing.price": "Precio",
    "pricing.int": "Animación intermedia",
    "pricing.complex": "Animación compleja",
    "pricing.cutscene": "Adicional: Cinemática",

    "contact.button": "Contactar en Discord",

    "pill.ready": "Listo para el juego",
    "pill.combat": "Combate y movimiento",
    "pill.cutscenes": "Cinemáticas",

    "about.title": "Sobre mí",
    "about.text1": "Hola! Soy Nerd Itadori, un animador con más de 7 meses de experiencia creando animaciones fluidas y listas para juegos.",
    "about.text2": "Actualmente estoy abierto a comisiones y acepto pagos por PayPal o Robux.",

    "what.title": "Qué recibes",
    "what.item1": "Animaciones pulidas y listas para tu juego.",
    "what.item2": "Soporte para rigs R6, R15 o personalizados.",
    "what.item3": "Buen timing, transiciones limpias y poses sólidas.",
    "what.item4": "Entrega rápida y comunicación clara.",
    "what.item5": "Una revisión gratuita para pequeños ajustes.",

    "pricing.title": "Precios",
    "pricing.note": "Los precios pueden variar según la complejidad. Las cutscenes son adicionales.",
    "pricing.usd": "Precios en USD",
    "pricing.robux": "Precios en Robux",

    "contact.title": "Contacto y flujo de trabajo",
    "contact.item1": "Contacto: Discord – nerditador",
    "contact.item2": "Incluye: tipo de juego, rig, referencias.",
    "contact.item3": "Entrega: normalmente 1–3 días.",
    "contact.item4": "Revisiones: 1 revisión gratuita para pequeños ajustes.",

    "showcase.title": "Galería de animaciones",
    "showcase.note": "Reemplaza VIDEO_ID_HERE con los IDs reales de YouTube.",

    "terms.title": "Términos de servicio",
    "terms.item1": "Pago requerido antes de comenzar el trabajo.",
    "terms.item2": "No hay reembolsos una vez iniciado el trabajo.",
    "terms.item3": "No revender ni redistribuir las animaciones.",
    "terms.item4": "El crédito es apreciado pero no obligatorio."
  }
};

// ===============================
// LANGUAGE SYSTEM
// ===============================

let currentLang = localStorage.getItem("site-lang") || "en";

function updateLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[currentLang]?.[key];

    if (translation) {
      el.textContent = translation;
    }
  });
}

// ===============================
// LANGUAGE MODAL LOGIC + LANGUAGE SWITCHING
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("language-modal");
  const dropdown = document.getElementById("language-dropdown");
  const langButtons = document.querySelectorAll(".lang-btn");

  // Set dropdown to saved language
  dropdown.value = currentLang;

  // Apply language on load
  updateLanguage();

  // Modal buttons
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const chosen = btn.getAttribute("data-lang");

      currentLang = chosen;
      localStorage.setItem("site-lang", chosen);

      updateLanguage();
      dropdown.value = chosen; // sync dropdown

      modal.classList.add("hidden");
    });
  });

  // Dropdown change
  dropdown.addEventListener("change", () => {
    const chosen = dropdown.value;

    currentLang = chosen;
    localStorage.setItem("site-lang", chosen);

    updateLanguage();
  });

});


