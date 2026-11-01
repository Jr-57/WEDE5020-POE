// PART 3 - ALL JS FUNCTIONALITY IN ONE FILE
document.addEventListener('DOMContentLoaded', () => {
  console.log('Jay R Logistics - Part 3 Loaded');

  // 1. Dynamic Content Loader + Search
  const servicesData = [
    {name:'Freight Transport', desc:'Long and short distance freight across all provinces.', icon:'🚛', img:'images/frieght transport.jpg'},
    {name:'Last-Mile Delivery', desc:'Fast last-mile delivery for retailers and e-commerce.', icon:'📦', img:'images/last mile delivery.jpg'},
    {name:'Nationwide Coverage', desc:'Serving all provinces with real-time communication.', icon:'📍', img:'images/nationwide coverage.jpg'},
    {name:'Warehousing', desc:'Secure warehousing for SMEs and corporate clients.', icon:'🏭', img:'images/truck.jpeg'}
  ];
  const container = document.getElementById('servicesContainer');
  if(container){
    function renderServices(filter=''){
      container.innerHTML='';
      servicesData.filter(s=>s.name.toLowerCase().includes(filter.toLowerCase())).forEach(s=>{
        container.innerHTML+=`<div class="card"><img src="${s.img}" alt="${s.name} service - Jay R Logistics" class="service-img lightbox-img"><div class="icon">${s.icon}</div><h3>${s.name}</h3><p>${s.desc}</p></div>`;
      });
      attachLightbox();
    }
    renderServices();
    document.getElementById('serviceSearch')?.addEventListener('input', e=>renderServices(e.target.value));
  }

  // 2. Accordion (jQuery style without jQuery)
  document.querySelectorAll('.acc-header').forEach(h=>{
    h.addEventListener('click', ()=>{
      const body = h.nextElementSibling;
      const isOpen = body.style.display==='block';
      document.querySelectorAll('.acc-body').forEach(b=>b.style.display='none');
      body.style.display = isOpen ? 'none' : 'block';
    });
  });

  // 3. Modal
  const modal = document.getElementById('quoteModal');
  document.getElementById('openModal')?.addEventListener('click', e=>{ e.preventDefault(); if(modal) modal.style.display='flex'; });
  document.getElementById('closeModal')?.addEventListener('click', ()=>{ if(modal) modal.style.display='none'; });
  window.addEventListener('click', e=>{ if(e.target===modal) modal.style.display='none'; });

  // 4. Leaflet Map
  if(document.getElementById('map')){
    const map = L.map('map').setView([-26.15, 28.0], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([-26.15, 28.0]).addTo(map).bindPopup('Jay R Logistics<br>Johannesburg').openPopup();
  }

  // 5. Lightbox Gallery
  function attachLightbox(){
    document.querySelectorAll('.lightbox-img, .service-img').forEach(img=>{
      img.addEventListener('click', ()=>{
        document.getElementById('lightboxImg').src = img.src;
        document.getElementById('lightbox').style.display='flex';
      });
    });
  }
  attachLightbox();
  document.getElementById('closeLightbox')?.addEventListener('click', ()=>{ document.getElementById('lightbox').style.display='none'; });

  // 6. Animations on Scroll
  const reveals = document.querySelectorAll('.reveal, .card');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('active'); });
  }, {threshold:0.1});
  reveals.forEach(r=>{ r.classList.add('reveal'); observer.observe(r); });
});