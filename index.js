document.addEventListener("DOMContentLoaded", function () {
    // Gestion de l'affichage du mot de passe
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.getElementById("password");
    const emailInput = document.getElementById("email");

    if (togglePassword) {
        togglePassword.addEventListener("click", function () {
            passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        });
    }

    // Validation du formulaire
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi par défaut

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        // Vérification des identifiants
        const validEmail = "moumouhalem6@gmail.com";
        const validPassword = "123456";

        if (email === validEmail && password === validPassword) {
            // Redirection vers le tableau de bord
            window.location.href = "https://moumouh6.github.io/Users-Dashboard/";
        } else {
            alert("Email ou mot de passe incorrect.");
        }
    });

    // Redirection si on clique sur un bouton spécifique
    const redirectButton = document.querySelector(".btn-submit1");
    if (redirectButton) {
        redirectButton.addEventListener("click", function () {
            window.location.href = "https://am11iin.github.io/sign-in/";
        });
    }
});
