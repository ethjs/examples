// Helper function to search for HTML elements
let el = function (id) {
  return document.querySelector(id);
};

// Before adding events to HTML elements, load notifications into the Webpage
$("#notifications").load("notifications.html", function () {
  // If Web3 extension found
  if (window.ethereum) {
    // Enable login button functionality
    el("#loginbutton").addEventListener("click", async function () {
      // Request login of extension
      await ethereum.request({ method: "eth_requestAccounts" });

      // Hide button after login was successful
      el("#login").style.display = "none";

      // Restart application with logged-in extension
      app();
    });

    // Enable network swap
    el("#swapnetworkL14").addEventListener("click", async function () {
      await addLuksoTestnet();
      el("#network").style.display = "none";
    });

    el("#swapnetworkL16").addEventListener("click", async function () {
      await addLuksoTestnet();
      el("#network").style.display = "none";
    });
  }
});
