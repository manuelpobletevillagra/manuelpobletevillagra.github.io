const repos = [
  ['miescolarapp-back','MiEscolar','TypeScript','Backend de la plataforma MiEscolar.','miescolar'],
  ['miescolarapp-flutter','MiEscolar','Dart','Aplicación móvil desarrollada con Flutter.','miescolar'],
  ['miescolar-backoffice-api','MiEscolar','TypeScript','API para la operación interna de la plataforma.','miescolar'],
  ['miescolar-backoffice-front','MiEscolar','TypeScript','Interfaz de administración y backoffice.','miescolar'],
  ['miescolar-coming-soon','MiEscolar','JavaScript','Página de presentación de MiEscolar.','miescolar'],
  ['miescolar-document-service','MiEscolar','TypeScript','Servicio para la gestión documental.','miescolar'],
  ['miescolar-microservicio-notificaciones','MiEscolar','TypeScript','Microservicio de notificaciones.','miescolar'],
  ['miescolar-platform-nest','MiEscolar','TypeScript','Plataforma construida con Nest.','miescolar'],
  ['miescolar-railway-deploy-bot','MiEscolar','TypeScript','Automatización de despliegues.','miescolar'],
  ['miescolar-service-auth','MiEscolar','TypeScript','Servicio de autenticación.','miescolar'],
  ['miescolarweb-microservicio-flowapi','MiEscolar','TypeScript','Integración de flujos de pago.','miescolar'],
  ['miescolar-web-public-api','MiEscolar','TypeScript','API pública de la plataforma.','miescolar'],
  ['miescolar-web-public-front','MiEscolar','TypeScript','Sitio web público de MiEscolar.','miescolar'],
  ['intentario-front','Inventario','TypeScript','Frontend para gestión de inventario.','inventario'],
  ['inventario-backend','Inventario','Java','Backend para aplicación de inventario.','inventario'],
  ['inventarioDaga','Inventario','JavaScript','Proyecto de inventario.','inventario'],
  ['loma_apr','Otros','PHP','Proyecto web PHP.','other']
];
const grid = document.querySelector('#repo-grid');
const count = document.querySelector('#repo-count');
function render(filter='all'){
  const visible = repos.filter(r => filter === 'all' || r[4] === filter);
  count.textContent = repos.length;
  grid.innerHTML = visible.map(([name,group,lang,description]) => `<article class="repo"><div class="repo-top"><span class="repo-kind">${group.toUpperCase()}</span><span aria-hidden="true">↗</span></div><a href="https://github.com/manuelpobletevillagra/${name}" target="_blank" rel="noreferrer">${name}</a><p>${description}</p><span class="repo-foot">${lang}</span></article>`).join('');
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {document.querySelector('.filters .active').classList.remove('active');button.classList.add('active');render(button.dataset.filter)}));
render();
