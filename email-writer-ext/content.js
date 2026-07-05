console.log("Email Wirter Extension - Content Script Loaded");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {