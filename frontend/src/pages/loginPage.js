export const loginPage = () => {
  const container = document.createElement("div");

  container.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "h-screen",
    "bg-gradient-to-r",
    "from-gray-300",
    "to-cyan-400",
    "p-4",
    "sm:p-8"
  );

  const form = document.createElement("form");

  form.classList.add(
    "flex",
    "flex-col",
    "w-full",
    "max-w-md",
    "gap-6",
    "bg-white",
    "p-8",
    "rounded-lg",
    "shadow-lg",
    "transition-transform",
    "transform",
    "hover:scale-105",
    "duration-300",
    "ease-in-out"
  );

  const title = document.createElement("h2");

  title.classList.add("text-3xl", "font-bold", "text-gray-800", "mb-6", "text-center");
  title.textContent = "Login Form";

  const usernameInput = document.createElement("input");

  usernameInput.type = "text";
  usernameInput.id = "username";
  usernameInput.name = "username";
  usernameInput.required = true;
  usernameInput.classList.add(
    "w-full",
    "p-3",
    "border",
    "border-gray-300",
    "rounded-lg",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-cyan-300",
    "transition",
    "duration-300",
    "ease-in-out"
  );
  usernameInput.placeholder = "Username";

  const passwordInput = document.createElement("input");

  passwordInput.type = "password";
  passwordInput.id = "password";
  passwordInput.required = true;
  passwordInput.name = "password";
  passwordInput.classList.add(
    "w-full",
    "p-3",
    "border",
    "border-gray-300",
    "rounded-lg",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-cyan-300",
    "transition",
    "duration-300",
    "ease-in-out"
  );
  passwordInput.placeholder = "Password";

  const submitButton = document.createElement("button");

  submitButton.type = "submit";
  submitButton.classList.add(
    "w-full",
    "bg-blue-500",
    "hover:bg-blue-600",
    "text-white",
    "font-bold",
    "py-3",
    "px-4",
    "rounded-lg",
    "shadow-md",
    "transition",
    "duration-300",
    "ease-in-out",
    "transform",
    "hover:scale-105",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-300"
  );
  submitButton.textContent = "Login";

  // Mensaje de error
  const divError = document.createElement("div");
  divError.id = "message";
  divError.classList.add(
    "bg-red-500",
    "text-white",
    "text-center",
    "rounded-lg",
    "p-2",
    "mt-4",
    "hidden"
  );

  form.appendChild(title);
  form.appendChild(usernameInput);
  form.appendChild(passwordInput);
  form.appendChild(submitButton);
  form.appendChild(divError);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validación básica
    if (!username || !password) {
      divError.innerText = "Por favor, completa todos los campos.";
      divError.classList.remove("hidden");
      setTimeout(() => {
        divError.classList.add("hidden");
      }, 3500);
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/auth/sign-in", {
        method: "POST",
        credentials: "include", // Importante para enviar las cookies de sesión
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        divError.innerText = "los datos ingresados no son validos";
        divError.classList.remove("hidden");
        setTimeout(() => {
          divError.classList.add("hidden");
        }, 3500);
        return;
      }

      const data = await response.json();
      console.log(data);
      window.location.pathname = "/home";
    } catch (error) {
      divError.innerText = "Error de red. Inténtalo de nuevo.";
      divError.classList.remove("hidden");
      setTimeout(() => {
        divError.classList.add("hidden");
      }, 3500);
    }
  });

  container.appendChild(form);

  return container;
};
