
    const form = document.querySelector("form");
    const fields = form.querySelectorAll(".form-control");

        function validateField(field) {
            const valid = field.checkValidity();

            field.classList.toggle("is-valid", valid);
            field.classList.toggle("is-invalid", !valid);
            field.setAttribute("aria-invalid", String(!valid));
        }

        fields.forEach(function (field) {
            field.addEventListener("input", function () {
                validateField(field);
            });

            field.addEventListener("invalid", function () {
                validateField(field);
            });
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            fields.forEach(function (field) {
                validateField(field);
            });
        });