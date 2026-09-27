const SUPABASE_URL="https://ylobnofwmryltbzdtkla.supabase.co";
const SUPABASE_KEY="sb_publishable_YqLFRfMUlW5hzTOh_50hQQ_Ntr0pYa9";
const ADMIN_EMAIL="ramiz.king15@gmail.com";
const client=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

const sections=[
  ["site_settings","General Settings","Hero, contact details and primary website settings."],
  ["packages","Tour Packages","Domestic and international package cards, prices, itinerary and images."],
  ["destinations","Domestic Destinations","Popular domestic destination cards."],
  ["international_destinations","International Destinations","International destination cards."],
  ["holy_places","Holy Places","Domestic spiritual and religious tour cards."],
  ["international_holy_places","International Holy Trips","International pilgrimage and spiritual trips."],
  ["services","Services","Service cards shown on the website."],
  ["offers","Offers","Featured seasonal offers."],
  ["gallery","Gallery","Gallery categories, image paths and alt text."],
  ["honeymoon_packages","Honeymoon Packages","International honeymoon cards."],
  ["visa_services","Visa Services","Visa and international assistance service list."],
  ["about_features","About Features","RR Tourism feature/benefit rows."],
  ["stats","Statistics","Website counters and statistics."],
  ["blogs","Travel Blogs","Travel blog cards and detailed text."],
  ["faqs","FAQs","Frequently asked questions and answers."]
];

const loginView=document.getElementById("loginView");
const appView=document.getElementById("appView");
const loginForm=document.getElementById("loginForm");
const emailEl=document.getElementById("email");
const passwordEl=document.getElementById("password");
const loginMessage=document.getElementById("loginMessage");
const sectionNav=document.getElementById("sectionNav");
const jsonEditor=document.getElementById("jsonEditor");
const jsonWrap=document.getElementById("jsonEditorWrap");
const settingsForm=document.getElementById("settingsForm");
const saveStatus=document.getElementById("saveStatus");
const sidebar=document.querySelector(".sidebar");
let content={};
let currentKey="site_settings";

emailEl.value=ADMIN_EMAIL;

function showLogin(){loginView.classList.remove("hidden");appView.classList.add("hidden")}
function showApp(){loginView.classList.add("hidden");appView.classList.remove("hidden")}
function setStatus(text,type=""){saveStatus.textContent=text;saveStatus.className="save-status "+type}

async function loadContent(){
  const {data,error}=await client.from("rr_content").select("key,data,updated_at").order("key");
  if(error) throw error;
  content=Object.fromEntries((data||[]).map(row=>[row.key,row.data]));
}

function buildNav(){
  sectionNav.innerHTML=sections.map(([key,label])=>`<button class="nav-btn ${key===currentKey?"active":""}" data-key="${key}">${label}</button>`).join("");
}

function renderSettings(){
  const data=content.site_settings||{};
  const fields=[
    ["hero_eyebrow","Hero Eyebrow"],["hero_title","Hero Title"],["hero_copy","Hero Description"],
    ["phone","WhatsApp Number (digits)"],["phone_display","Primary Phone Display"],["secondary_phone","Secondary Phone"],
    ["email","Email"],["location","Location"],["whatsapp_text","Default WhatsApp Message"]
  ];
  settingsForm.innerHTML=fields.map(([key,label])=>`<label class="${["hero_title","hero_copy","whatsapp_text"].includes(key)?"full":""}">${label}<input data-setting="${key}" value="${String(data[key]??"").replace(/"/g,"&quot;")}"></label>`).join("");
}

function renderEditor(){
  const meta=sections.find(s=>s[0]===currentKey)||sections[0];
  document.getElementById("pageTitle").textContent=meta[1];
  document.getElementById("editorTitle").textContent=meta[1];
  document.getElementById("editorHelp").textContent=meta[2];
  buildNav();
  if(currentKey==="site_settings"){
    settingsForm.classList.remove("hidden");
    jsonWrap.classList.add("hidden");
    renderSettings();
  }else{
    settingsForm.classList.add("hidden");
    jsonWrap.classList.remove("hidden");
    jsonEditor.value=JSON.stringify(content[currentKey]??[],null,2);
  }
  setStatus("");
}

async function saveCurrent(){
  setStatus("Saving...");
  try{
    let data;
    if(currentKey==="site_settings"){
      data={};
      settingsForm.querySelectorAll("[data-setting]").forEach(input=>data[input.dataset.setting]=input.value.trim());
    }else{
      data=JSON.parse(jsonEditor.value);
    }
    const {error}=await client.from("rr_content").upsert({key:currentKey,data,updated_at:new Date().toISOString()},{onConflict:"key"});
    if(error) throw error;
    content[currentKey]=data;
    setStatus("Saved. This content is now connected to the live website.","ok");
  }catch(error){
    setStatus(error.message||"Could not save changes.","error");
  }
}

async function startApp(){
  await loadContent();
  showApp();
  renderEditor();
}

loginForm.addEventListener("submit",async e=>{
  e.preventDefault();
  loginMessage.textContent="Signing in…";
  const email=emailEl.value.trim().toLowerCase();
  const password=passwordEl.value;
  if(email!==ADMIN_EMAIL){loginMessage.textContent="This account is not authorized.";return}
  let {data,error}=await client.auth.signInWithPassword({email,password});
  if(error){
    const signup=await client.auth.signUp({email,password});
    if(signup.data?.session){
      data=signup.data;error=null;
    }else if(!signup.error && signup.data?.user){
      loginMessage.textContent="Admin account initialized. Confirm the verification email once, then sign in.";
      return;
    }else{
      loginMessage.textContent="Incorrect email or password.";
      return;
    }
  }
  if(data?.session){
    loginMessage.textContent="";
    await startApp();
  }
});

document.getElementById("togglePassword").addEventListener("click",e=>{
  const hide=passwordEl.type==="password";passwordEl.type=hide?"text":"password";e.currentTarget.textContent=hide?"Hide":"Show";
});
sectionNav.addEventListener("click",e=>{const b=e.target.closest("[data-key]");if(!b)return;currentKey=b.dataset.key;renderEditor();sidebar.classList.remove("open")});
document.getElementById("saveBtn").addEventListener("click",saveCurrent);
document.getElementById("reloadBtn").addEventListener("click",async()=>{await loadContent();renderEditor();setStatus("Reloaded from live CMS.","ok")});
document.getElementById("formatBtn").addEventListener("click",()=>{try{jsonEditor.value=JSON.stringify(JSON.parse(jsonEditor.value),null,2);setStatus("JSON formatted.","ok")}catch(e){setStatus("JSON is invalid: "+e.message,"error")}});
document.getElementById("logout").addEventListener("click",async()=>{await client.auth.signOut();passwordEl.value="";showLogin()});
document.getElementById("menuBtn").addEventListener("click",()=>sidebar.classList.toggle("open"));

client.auth.getSession().then(({data})=>{if(data.session?.user?.email?.toLowerCase()===ADMIN_EMAIL)startApp().catch(()=>showLogin());else showLogin()});