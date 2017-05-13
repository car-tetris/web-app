export default function registerServiceWorker() {
  // Check for browser support of service worker
  if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/service-worker.js')
   .then(function(registration) {
   }).catch(function(err) {
   });
  }
}
