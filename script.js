const products = [
  { id: 1, name: "Good Girl", brand: "Carolina Herrera", profile: "Feminino", family: "Floral oriental", format: "Fracionados", size: "10 ml", price: 79.9, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=86" },
  { id: 2, name: "La Vie Est Belle", brand: "Lancôme", profile: "Feminino", family: "Floral gourmand", format: "Originais", size: "75 ml", price: 489, image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=86" },
  { id: 3, name: "J'adore", brand: "Dior", profile: "Feminino", family: "Floral luminoso", format: "Fracionados", size: "10 ml", price: 89.9, image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=900&q=86" },
  { id: 4, name: "Coco Mademoiselle", brand: "Chanel", profile: "Feminino", family: "Cítrico amadeirado", format: "Originais", size: "50 ml", price: 699, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=86" },
  { id: 5, name: "Euphoria", brand: "Calvin Klein", profile: "Feminino", family: "Floral oriental", format: "Fracionados", size: "10 ml", price: 64.9, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=86" },
  { id: 6, name: "212 VIP Rosé", brand: "Carolina Herrera", profile: "Feminino", family: "Floral frutado", format: "Fracionados", size: "10 ml", price: 69.9, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=86" },
  { id: 7, name: "Libre", brand: "Yves Saint Laurent", profile: "Feminino", family: "Floral aromático", format: "Originais", size: "50 ml", price: 499, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=86" },
  { id: 8, name: "Light Blue", brand: "Dolce & Gabbana", profile: "Feminino", family: "Cítrico fresco", format: "Fracionados", size: "10 ml", price: 59.9, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=86" },
  { id: 9, name: "Flowerbomb", brand: "Viktor & Rolf", profile: "Feminino", family: "Floral intenso", format: "Fracionados", size: "10 ml", price: 99.9, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=86" },
  { id: 10, name: "Miss Dior", brand: "Dior", profile: "Feminino", family: "Floral chipre", format: "Originais", size: "50 ml", price: 559, image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=900&q=86" },
  { id: 11, name: "Sauvage", brand: "Dior", profile: "Masculino", family: "Aromático amadeirado", format: "Fracionados", size: "10 ml", price: 69.9, image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=86" },
  { id: 12, name: "Bleu de Chanel", brand: "Chanel", profile: "Masculino", family: "Amadeirado cítrico", format: "Originais", size: "100 ml", price: 699, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=86" },
  { id: 13, name: "Acqua di Giò", brand: "Giorgio Armani", profile: "Masculino", family: "Aromático aquático", format: "Fracionados", size: "10 ml", price: 74.9, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=86" },
  { id: 14, name: "1 Million", brand: "Paco Rabanne", profile: "Masculino", family: "Amadeirado especiado", format: "Fracionados", size: "10 ml", price: 64.9, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=86" },
  { id: 15, name: "Invictus", brand: "Paco Rabanne", profile: "Masculino", family: "Amadeirado aquático", format: "Originais", size: "100 ml", price: 449, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=86" },
  { id: 16, name: "Eros", brand: "Versace", profile: "Masculino", family: "Fougère oriental", format: "Fracionados", size: "10 ml", price: 64.9, image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=86" },
  { id: 17, name: "The One", brand: "Dolce & Gabbana", profile: "Masculino", family: "Amadeirado quente", format: "Fracionados", size: "10 ml", price: 69.9, image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=86" },
  { id: 18, name: "Allure Homme Sport", brand: "Chanel", profile: "Masculino", family: "Cítrico amadeirado", format: "Originais", size: "100 ml", price: 749, image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=86" },
  { id: 19, name: "CK One", brand: "Calvin Klein", profile: "Unissex", family: "Cítrico aromático", format: "Fracionados", size: "10 ml", price: 49.9, image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=900&q=86" },
  { id: 20, name: "Another 13", brand: "Le Labo", profile: "Unissex", family: "Almíscar amadeirado", format: "Fracionados", size: "10 ml", price: 119.9, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=86" }
];

const bottleImages = [
  "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=88",
  "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=88"
];
products.forEach((product, index) => { product.image = bottleImages[index % bottleImages.length]; });

const storage = { cart: "leal-lavie-cart-v2", favorites: "leal-lavie-favorites-v2" };
const money = value => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const readJson = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const state = { filter: "Todos", family: "Todos", sort: "featured", search: "", cart: readJson(storage.cart, []), favorites: new Set(readJson(storage.favorites, [])) };

function persist() {
  localStorage.setItem(storage.cart, JSON.stringify(state.cart));
  localStorage.setItem(storage.favorites, JSON.stringify([...state.favorites]));
}

function readUrlState() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("categoria");
  if (["Todos", "Feminino", "Unissex", "Fracionados", "Originais"].includes(category)) state.filter = category;
  const family = params.get("familia");
  if (family) state.family = family;
}

function syncUrl() {
  if (!document.querySelector("[data-product-grid]:not([data-limit])")) return;
  const params = new URLSearchParams(window.location.search);
  if (state.filter === "Todos") params.delete("categoria"); else params.set("categoria", state.filter);
  if (state.family === "Todos") params.delete("familia"); else params.set("familia", state.family);
  history.replaceState(null, "", `${window.location.pathname}${params.toString() ? `?${params}` : ""}#catalogo`);
}

function matches(product) {
  const filterMatch = state.filter === "Todos" || product.profile === state.filter || product.format === state.filter;
  const familyMatch = state.family === "Todos" || product.family === state.family;
  const search = state.search.trim().toLowerCase();
  const searchMatch = !search || `${product.name} ${product.brand} ${product.family} ${product.profile} ${product.format}`.toLowerCase().includes(search);
  return filterMatch && familyMatch && searchMatch;
}

function filteredProducts() {
  let list = products.filter(matches);
  if (state.sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  if (state.sort === "price-low") list = [...list].sort((a, b) => a.price - b.price);
  if (state.sort === "price-high") list = [...list].sort((a, b) => b.price - a.price);
  return list;
}

function renderProducts() {
  const grids = $$('[data-product-grid]');
  if (!grids.length) return;
  const list = filteredProducts();
  grids.forEach(grid => {
    const limit = Number(grid.dataset.limit || 0);
    const visible = limit ? list.slice(0, limit) : list;
    grid.innerHTML = visible.map(product => `<article class="product-card"><div class="product-media"><span class="product-category">${product.format}</span><button class="favorite-button" aria-label="${state.favorites.has(product.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}" data-favorite="${product.id}">${state.favorites.has(product.id) ? "♥" : "♡"}</button><img src="${product.image}" alt="${product.name}, ${product.brand}" width="900" height="1120" loading="lazy"/></div><div class="product-info"><h3>${product.name}</h3><div class="product-meta"><span>${product.brand}</span><span>${product.family}</span></div><div class="product-meta"><span>${product.profile} · ${product.size}</span><span class="product-price">${money(product.price)}</span></div><button class="add-product" data-add="${product.id}">ADICIONAR À SACOLA +</button></div></article>`).join("");
  });
  const count = $("[data-products-visible]");
  if (count) count.textContent = list.length;
  const empty = $("[data-empty-state]");
  if (empty) empty.hidden = list.length > 0;
  $$('[data-add]').forEach(button => button.addEventListener("click", () => addToCart(Number(button.dataset.add))));
  $$('[data-favorite]').forEach(button => button.addEventListener("click", () => toggleFavorite(Number(button.dataset.favorite))));
  $$('[data-filter]').forEach(button => button.classList.toggle("active", button.dataset.filter === state.filter));
  const familySelect = $("[data-family-filter]");
  if (familySelect) familySelect.value = state.family;
  setupImageMotion();
}

function addToCart(id) {
  const item = state.cart.find(entry => entry.id === id);
  if (item) item.quantity += 1; else state.cart.push({ id, quantity: 1 });
  persist(); updateCartUI(); showToast("Adicionado à sua sacola");
}

function removeFromCart(id) { state.cart = state.cart.filter(item => item.id !== id); persist(); updateCartUI(); renderCheckout(); }

function updateCartUI() {
  const quantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  $$('[data-cart-count]').forEach(badge => { badge.textContent = quantity; badge.classList.toggle("has-items", quantity > 0); });
  const items = $("[data-cart-items]");
  if (items) items.innerHTML = state.cart.length ? state.cart.map(({ id, quantity }) => { const product = products.find(item => item.id === id); return `<div class="drawer-item"><img src="${product.image}" alt="${product.name}" width="68" height="85"/><div><strong>${product.name}</strong><small>${product.brand} · ${quantity} × ${money(product.price)}</small></div><button aria-label="Remover ${product.name}" data-remove="${product.id}">×</button></div>`; }).join("") : '<p class="drawer-empty">Sua sacola está esperando<br/>uma nova descoberta.</p>';
  $$('[data-remove]').forEach(button => button.addEventListener("click", () => removeFromCart(Number(button.dataset.remove))));
  const total = cartSubtotal();
  const totalNode = $("[data-cart-total]");
  if (totalNode) totalNode.textContent = money(total);
}

function cartSubtotal() { return state.cart.reduce((sum, item) => { const product = products.find(entry => entry.id === item.id); return sum + (product ? product.price * item.quantity : 0); }, 0); }
function toggleFavorite(id) { if (state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id); persist(); renderProducts(); showToast(state.favorites.has(id) ? "Salvo nos favoritos" : "Removido dos favoritos"); }
function showToast(message) { const toast = $("[data-toast]"); if (!toast) return; toast.textContent = message; toast.classList.add("is-visible"); clearTimeout(showToast.timeout); showToast.timeout = setTimeout(() => toast.classList.remove("is-visible"), 2200); }

function setupHeroCarousel() {
  const carousel = $("[data-hero-carousel]");
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll("[data-hero-slide]")];
  const dots = [...carousel.querySelectorAll("[data-hero-dot]")];
  if (slides.length < 2) return;
  let current = 0;
  let timer;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const show = next => {
    current = (next + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      const active = index === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot, index) => {
      const active = index === current;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", String(active));
    });
  };
  const stop = () => { window.clearInterval(timer); };
  const start = () => { if (!reduceMotion) { stop(); timer = window.setInterval(() => show(current + 1), 4800); } };
  dots.forEach((dot, index) => dot.addEventListener("click", () => { show(index); start(); }));
  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", event => { if (!carousel.contains(event.relatedTarget)) start(); });
  show(0);
  start();
}

function setupImageMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches) return;
  const targets = [
    ...$$('[data-hero-carousel]'),
    ...$$('.editorial-tile'),
    ...$$('.product-media')
  ];
  targets.forEach(container => {
    if (container.dataset.motionReady === "true") return;
    if (!container.querySelector("img")) return;
    container.dataset.motionReady = "true";
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      container.style.setProperty("--pointer-x", "0px");
      container.style.setProperty("--pointer-y", "0px");
      container.style.setProperty("--glow-x", "50%");
      container.style.setProperty("--glow-y", "50%");
      container.classList.remove("is-interactive");
    };
    container.addEventListener("pointermove", event => {
      const bounds = container.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        container.style.setProperty("--pointer-x", `${(x * 5).toFixed(2)}px`);
        container.style.setProperty("--pointer-y", `${(y * 5).toFixed(2)}px`);
        container.style.setProperty("--glow-x", `${(50 + x * 20).toFixed(1)}%`);
        container.style.setProperty("--glow-y", `${(50 + y * 20).toFixed(1)}%`);
        container.classList.add("is-interactive");
      });
    }, { passive: true });
    container.addEventListener("pointerleave", reset);
  });
}

function openDrawer() { const drawer = $("[data-cart-drawer]"); if (!drawer) return; drawer.classList.add("is-open"); drawer.setAttribute("aria-hidden", "false"); $(".drawer-backdrop")?.classList.add("is-open"); }
function closeDrawer() { const drawer = $("[data-cart-drawer]"); if (!drawer) return; drawer.classList.remove("is-open"); drawer.setAttribute("aria-hidden", "true"); $(".drawer-backdrop")?.classList.remove("is-open"); }

function renderCheckout() {
  const container = $("[data-checkout-items]");
  if (!container) return;
  container.innerHTML = state.cart.length ? state.cart.map(({ id, quantity }) => { const product = products.find(item => item.id === id); return `<div class="summary-item"><img src="${product.image}" alt="${product.name}" width="58" height="72"/><div><strong>${product.name}</strong><small>${product.brand} · ${quantity} × ${money(product.price)}</small></div><b>${money(product.price * quantity)}</b></div>`; }).join("") : '<p class="summary-empty">Sua sacola está vazia.<br/><a href="perfumes.html">Escolher perfumes ↗</a></p>';
  $$('[data-checkout-remove]').forEach(button => button.addEventListener("click", () => removeFromCart(Number(button.dataset.checkoutRemove))));
  updateCheckoutTotals();
}

function updateCheckoutTotals() {
  const subtotal = cartSubtotal();
  const delivery = document.querySelector('input[name="delivery"]:checked')?.value;
  const payment = document.querySelector('input[name="payment"]:checked')?.value;
  const shipping = delivery === "pickup" ? 0 : state.cart.length ? 24.9 : 0;
  const discount = payment === "pix" ? subtotal * .05 : 0;
  const total = subtotal + shipping - discount;
  const subtotalNode = $("[data-checkout-subtotal]");
  const shippingNode = $("[data-checkout-shipping]");
  const totalNode = $("[data-checkout-total]");
  if (subtotalNode) subtotalNode.textContent = money(subtotal);
  if (shippingNode) shippingNode.textContent = state.cart.length ? (shipping ? money(shipping) : "Grátis") : "—";
  if (totalNode) totalNode.textContent = money(total);
}

function setupCheckout() {
  const form = $("[data-checkout-form]");
  if (!form) return;
  const address = $("[data-address-fields]");
  const pickupNote = $("[data-pickup-note]");
  const cardFields = $("[data-card-fields]");
  const updateOptionalFields = () => {
    const delivery = form.querySelector('input[name="delivery"]:checked')?.value;
    const pickup = delivery === "pickup";
    address.hidden = pickup;
    pickupNote.hidden = !pickup;
    address.querySelectorAll("input, select").forEach(field => { field.required = !pickup && field.name !== "complement"; });
    const payment = form.querySelector('input[name="payment"]:checked')?.value;
    const card = payment === "card";
    cardFields.hidden = !card;
    cardFields.querySelectorAll("input").forEach(field => { field.required = card; });
    updateCheckoutTotals();
  };
  form.querySelectorAll('input[name="delivery"], input[name="payment"]').forEach(input => input.addEventListener("change", updateOptionalFields));
  form.addEventListener("submit", event => {
    event.preventDefault();
    const error = $("[data-checkout-error]");
    if (!state.cart.length) { error.textContent = "Sua sacola está vazia. Volte ao catálogo para escolher um perfume."; return; }
    if (!form.reportValidity()) { error.textContent = "Confira os campos destacados antes de continuar."; return; }
    error.textContent = "";
    $(".checkout-layout").hidden = true;
    $(".checkout-heading").hidden = true;
    $("[data-checkout-success]").hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  updateOptionalFields();
}

function setupGlobalInteractions() {
  $("[data-cart-toggle]")?.addEventListener("click", openDrawer);
  $$('[data-close-drawer]').forEach(button => button.addEventListener("click", closeDrawer));
  $("[data-menu-toggle]")?.addEventListener("click", event => { const menu = $("[data-mobile-menu]"); const open = menu.classList.toggle("is-open"); event.currentTarget.setAttribute("aria-expanded", String(open)); });
  $("[data-sort]")?.addEventListener("change", event => { state.sort = event.target.value; renderProducts(); });
  $("[data-family-filter]")?.addEventListener("change", event => { state.family = event.target.value; syncUrl(); renderProducts(); });
  $$('[data-filter]').forEach(button => button.addEventListener("click", () => { state.filter = button.dataset.filter; syncUrl(); renderProducts(); }));
  $("[data-reset-filter]")?.addEventListener("click", () => { state.filter = "Todos"; state.family = "Todos"; state.search = ""; syncUrl(); renderProducts(); });
  $("[data-catalog-search]")?.addEventListener("input", event => { state.search = event.target.value; renderProducts(); });
  $("[data-newsletter]")?.addEventListener("submit", event => { event.preventDefault(); event.currentTarget.reset(); const feedback = $("[data-form-feedback]"); if (feedback) feedback.textContent = "Pronto — você está na lista."; });
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeDrawer(); });
}

readUrlState();
setupGlobalInteractions();
setupHeroCarousel();
renderProducts();
updateCartUI();
renderCheckout();
setupCheckout();

