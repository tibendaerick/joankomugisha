/* ============ EDIT HERE: all site content lives in this file ============ */
const SITE = {
  name: "Hon. Komugisha Joan",
  whatsapp: "256703817322",            // digits only, no +
  email: "jojopati013@gmail.com",
  address: "Greater Mubende",
  social: {                              // paste real links, empty ones are hidden
    tiktok: "", x: "", facebook: "", instagram: ""
  }
};

// Impact numbers. "plus" adds the + sign.
const STATS = [
  { n: 30000, plus: true, label: "women in her association" },
  { n: 640,   plus: true, label: "ghetto youth mobilized" },
  { n: 3000,  plus: true, label: "people trained for free" },
  { n: 72,    plus: false, label: "Local Councils reached" },
  { n: 5,     plus: false, label: "districts served" }
];

// Map points (x,y are 0-100, a simple sketch, not to scale)
const DISTRICTS = [
  { name: "Mubende",    x: 40, y: 60, text: "Home base. Joy Vocational Center and the ghetto youth hubs are here." },
  { name: "Kasanda",    x: 36, y: 30, text: "Part of the Greater Mubende Women Association network." },
  { name: "Kyankwanzi", x: 66, y: 20, text: "Women's economic empowerment and mobilization." },
  { name: "Kiboga",     x: 74, y: 48, text: "Women's economic empowerment and mobilization." },
  { name: "Mityana",    x: 70, y: 80, text: "Part of the Greater Mubende Women Association network." }
];

// Photos: drop files in /images and list them here.
const GALLERY = [
  { src: "images/gallery-01.jpg", cap: "Community meeting" },
  { src: "images/gallery-02.jpg", cap: "With women's groups" },
  { src: "images/gallery-03.jpg", cap: "Mobilization rally" },
  { src: "images/gallery-04.jpg", cap: "Listening to the community" },
  { src: "images/gallery-05.jpg", cap: "Youth programs" },
  { src: "images/gallery-06.jpg", cap: "Partners and leaders" },
  { src: "images/gallery-07.jpg", cap: "Grassroots outreach" },
  { src: "images/gallery-08.jpg", cap: "Community gathering" },
  { src: "images/gallery-09.jpg", cap: "Schools and children" },
  { src: "images/gallery-10.jpg", cap: "Women's association" },
  { src: "images/gallery-11.jpg", cap: "Field visit" },
  { src: "images/gallery-12.jpg", cap: "Supporters" }
];

// Videos: paste a YouTube link (watch?v=...). Leave empty to show placeholders.
const VIDEOS = [
  { title: "Video coming soon", url: "" },
  { title: "Video coming soon", url: "" },
  { title: "Video coming soon", url: "" }
];

// News: newest first. SAMPLE items, replace with real ones.
const NEWS = [
  { date: "2026-11-20", title: "Guest of Honour: Motherland African Youths Foundation (MAYFO)", body: "Giving every girl child a chance for education, keeping her in school, protecting her from early marriage and pregnancy. Grand Global Hotel, Kampala." },
  { date: "2026-11-15", title: "Ghetto structure: Tukazane Ghetto Structure - Mubende", body: "Moblize ghetto communities across Mubende Municipality to engage in government programmes e.g PDM, Emyooga. Reduce unempolyment in ghettos through skilling programmes." },
  { date: "2026-11-08", title: "Social Outing: Rotaract Mubende Metro", body: "Fundraising, music, dance & drama, new friendships, fun memories and team building with members of the Rotary Club - Mubende. Aiming for growth of club in Mubende." }
];

// Chatbot: add as many as you like. "k" = words people might type.
const FAQ = [
  { k: ["who", "about", "joan", "komugisha", "she"], a: "Hon. Komugisha Joan is a community leader and mobilizer in Greater Mubende, Uganda, with over ten years of grassroots work in poverty eradication, youth empowerment and women's inclusion." },
  { k: ["lead", "role", "roles", "position", "chair", "chairperson", "do"], a: "She chairs the Greater Mubende Women Association, is an NRM mobilizer for Greater Mubende, chairs the Children of Soldiers Association, directs Joy Vocational Center, and is Head Patron of the International Consensus Center." },
  { k: ["women", "association", "gmwa"], a: "The Greater Mubende Women Association reaches over 30,000 women across Mubende, Kasanda, Mityana, Kyankwanzi and Kiboga, with programs in economic empowerment, welfare and skills." },
  { k: ["vocational", "joy", "skills", "training", "skilling", "free"], a: "Joy Vocational Center offers free hands-on training in trades and entrepreneurship to youth and women in Mubende Municipality. Over 3,000 people have been trained, across more than 72 Local Councils." },
  { k: ["youth", "ghetto", "young", "jobs"], a: "She works with 640+ ghetto youth across five hubs in Mubende, helping them start self-sustaining businesses through skills-based education." },
  { k: ["soldiers", "military", "barracks", "children"], a: "As chair of the Children of Soldiers Association, she supports children of ex-military families, especially in Mubende barracks, with education, mentorship and skills training." },
  { k: ["musevenomics", "policy", "corruption", "security"], a: "She teaches communities the Musevenomics pillars: fighting corruption, protecting national security, and taking part in productive economic activity." },
  { k: ["education", "degree", "study", "university", "profession", "travel"], a: "She holds a degree in Tourism and Operations Management from Nkumba University and works as a travel consultant." },
  { k: ["where", "location", "district", "districts", "based", "mubende"], a: "She is based in Mubende, Kattabalango, and serves Mubende, Kasanda, Mityana, Kyankwanzi and Kiboga districts." },
  { k: ["partner", "support", "donate", "sponsor", "help", "funding", "philanthropist"], a: "Partners can sponsor skilling equipment, fund transport and logistics, or back community sensitization and media campaigns. Use the contact section to reach her team." },
  { k: ["contact", "email", "phone", "whatsapp", "reach", "call", "meet"], a: "Tap the WhatsApp button in the contact section, or email jojopati013@gmail.com." },
  { k: ["family", "father", "parents", "mother"], a: "She is the daughter of Brig. Gen. Tarkiwa Francis M. and the late Capt. Joy Mweteise of the SFC." },
  { k: ["vision", "goals", "plans", "future"], a: "Her goals: expand women's economic empowerment across Uganda, build 640 youth groups into self-sustaining businesses, teach the Musevenomics pillars, and support children of military families." }
];

// Chatbot messages
const BOT = {
  en: { hello: "Hello! Ask me anything about Hon. Komugisha Joan: her work, roles, programs or how to partner with her.",
        nope: "I can only answer questions about Hon. Komugisha Joan and her work. Try asking about her roles, programs or contact details.",
        ph: "Ask about Hon. Joan...",
        chips: ["Who is she?", "Her roles", "How can I partner?"] },
  lg: { hello: "Gyebale ko! Buuza ekibuuzo kyonna ku Hon. Komugisha Joan: emirimu gye, by'akola, oba engeri y'okukolaganamu naye.",
        nope: "Nsobola kuddamu byokka ebikwata ku Hon. Komugisha Joan n'emirimu gye.",
        ph: "Buuza ku Hon. Joan...",
        chips: ["Ye ani?", "Emirimu gye", "Okukolagana naye"] }
};

// Luganda text for the page (data-i18n keys in index.html). Ask a Luganda speaker to review.
const LG = {
  nav_about: "Ebimukwatako", nav_impact: "Ebyakolebwa", nav_news: "Amawulire", nav_gallery: "Ebifaananyi", nav_contact: "Tukwatagane",
  hero_tag: "Omukulembeze w'abantu. Abakyala n'abavubuka mu Greater Mubende.",
  cta_contact: "Tukwatagane", cta_chat: "Buuza omuyambi"
};