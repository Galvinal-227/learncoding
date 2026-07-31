export const chapter = {
  slug: "pwa-installable",
  title: "Installable Apps",
  description: "Buat PWA bisa di-install ke home screen dengan custom install prompt.",
  icon: "SiPwa",
  color: "#5A0FC8",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["pwa-manifest"],
  tags: ["pwa", "install", "prompt", "home-screen"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install Criteria

PWA bisa di-install jika:
1. ✅ HTTPS
2. ✅ Valid manifest.json
3. ✅ Service Worker terdaftar
4. ✅ User sudah engage (>30 detik atau interaksi)

## BeforeInstallPrompt Event

\`\`\`javascript
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent default browser prompt
    event.preventDefault();
    
    // Save for later use
    deferredPrompt = event;
    
    // Show your custom install button
    const installBtn = document.getElementById('install-btn');
    installBtn.style.display = 'block';
    
    installBtn.addEventListener('click', async () => {
        // Show install prompt
        deferredPrompt.prompt();
        
        // Wait for user response
        const { outcome } = await deferredPrompt.userChoice;
        
        console.log(\`User \${outcome} the installation\`);
        
        // Clear saved prompt
        deferredPrompt = null;
        installBtn.style.display = 'none';
    });
});
\`\`\`

## Detect Already Installed

\`\`\`javascript
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed!');
    deferredPrompt = null;
    // Hide install button
    document.getElementById('install-btn').style.display = 'none';
});

// Check display mode
if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('Running as installed PWA');
}
\`\`\`

## Custom Install UI

\`\`\`html
<button id="install-btn" style="display:none">
    📲 Install App
</button>

<div id="install-guide" style="display:none">
    <h3>How to Install</h3>
    <p>Tap the menu button (⋮) then "Add to Home Screen"</p>
</div>
\`\`\`

\`\`\`javascript
// Show guide for iOS (no beforeinstallprompt)
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

if (isIOS && !window.navigator.standalone) {
    document.getElementById('install-guide').style.display = 'block';
}
\`\`\`

## Get Related Apps (Android)

\`\`\`javascript
const relatedApps = await navigator.getInstalledRelatedApps();
if (relatedApps.length > 0) {
    console.log('Related app already installed:', relatedApps);
    // Hide PWA install, suggest using native app
}
\`\`\`

## Install Events Tracking

\`\`\`javascript
// Track install funnel
window.addEventListener('beforeinstallprompt', () => {
    gtag('event', 'pwa_install_prompt_shown');
});

window.addEventListener('appinstalled', () => {
    gtag('event', 'pwa_installed');
});

document.getElementById('install-btn').addEventListener('click', () => {
    gtag('event', 'pwa_install_clicked');
});
\`\`\`
  `,

  quiz: [
    { question: "beforeinstallprompt?", options: ["Auto install", "Custom install prompt event", "Notification", "Cache"], correctAnswer: 1 },
    { question: "iOS: beforeinstallprompt?", options: ["Supported", "Not supported (show guide)", "Same as Android", "Auto install"], correctAnswer: 1 }
  ],

  codeExamples: []
};