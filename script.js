const courses = [
  {n:"01",title:"Découvrir l'alpinisme",cat:"bases",label:"LES BASES",desc:"Disciplines, types de courses, cotations et vocabulaire de montagne.",img:"decouvrir-alpinisme.jpg"},
  {n:"02",title:"Le milieu montagnard",cat:"milieu",label:"ENVIRONNEMENT",desc:"Relief, altitude, saisons, exposition et dangers naturels.",img:"milieu-montagnard.jpg"},
  {n:"03",title:"Météorologie",cat:"milieu",label:"ENVIRONNEMENT",desc:"Nuages, fronts, vent, températures et bulletins météo.",img:"meteorologie.jpg"},
  {n:"04",title:"Neige et avalanches",cat:"milieu",label:"ENVIRONNEMENT",desc:"Manteau neigeux, transformations, stabilité et prévention.",img:"neige-avalanches.jpg"},
  {n:"05",title:"Matériel d'alpinisme",cat:"technique",label:"ÉQUIPEMENT",desc:"Vêtements, chaussures, casque, baudrier, crampons et piolet.",img:"equipement.jpg"},
  {n:"06",title:"Cordes et encordement",cat:"technique",label:"TECHNIQUE",desc:"Comprendre les cordes, les nœuds, l'assurage et la cordée.",img:"cordes-noeuds.jpg"},
  {n:"07",title:"Techniques de progression",cat:"technique",label:"TECHNIQUE",desc:"Notions de déplacement sur roche, neige, glace et terrain mixte.",img:"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80"},
  {n:"08",title:"Glaciers et crevasses",cat:"milieu",label:"ENVIRONNEMENT",desc:"Fonctionnement des glaciers, crevasses et risques associés.",img:"glaciers-crevasses.jpg"},
  {n:"09",title:"Orientation et navigation",cat:"technique",label:"TECHNIQUE",desc:"Cartes IGN, courbes de niveau, boussole, GPS et itinéraires.",img:"orientation.jpg"},
  {n:"10",title:"Préparer une course",cat:"bases",label:"ORGANISATION",desc:"Topo, difficulté, météo, matériel, horaires et plan B.",img:"preparation-itineraire.jpg"},
  {n:"11",title:"Sécurité et secours",cat:"securite",label:"SÉCURITÉ",desc:"Prévention, risques, alerte, premiers secours et décisions.",img:"securite-secours.jpg"},
  {n:"12",title:"Vie en montagne",cat:"bases",label:"ORGANISATION",desc:"Refuges, bivouac, alimentation, hydratation et environnement.",img:"https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=900&q=80"},
  {n:"13",title:"Préparation physique",cat:"securite",label:"PROGRESSION",desc:"Endurance, force, équilibre, récupération et préparation mentale.",img:"https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=80"},
  {n:"14",title:"Progresser vers l'autonomie",cat:"securite",label:"PROGRESSION",desc:"Expérience, responsabilités, limites et progression encadrée.",img:"autonomie.jpg"},
  {n:"15",title:"Culture alpine et grandes courses",cat:"bases",label:"CULTURE",desc:"Histoire, massifs, sommets emblématiques et études de courses.",img:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80"}
];
let activeFilter = "all";
const grid = document.getElementById("courseGrid");
function render(){
  const q = document.getElementById("searchInput").value.toLowerCase().trim();
  const shown = courses.filter(c => (activeFilter==="all" || c.cat===activeFilter) && (c.title+" "+c.desc+" "+c.label).toLowerCase().includes(q));
  grid.innerHTML = shown.map(c => `<article class="course-card"><div class="course-image" style="background-image:url('${c.img}')"><span class="course-number">CHAPITRE ${c.n}</span></div><div class="course-body"><span class="course-category">${c.label}</span><h3>${c.title}</h3><p>${c.desc}</p><a class="course-link" href="chapitre.html?c=${c.n}">Découvrir le chapitre <span>→</span></a></div></article>`).join("");
  document.getElementById("noResults").hidden = shown.length>0;
}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelector(".filter.active").classList.remove("active");b.classList.add("active");activeFilter=b.dataset.filter;render()}));
document.getElementById("searchInput").addEventListener("input",render);
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
render();
