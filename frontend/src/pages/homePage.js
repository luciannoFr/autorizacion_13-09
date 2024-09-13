export const homePage = () => {
  const container = document.createElement("div");

  container.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "h-screen",
    "bg-gradient-to-r",
    "from-gray-300",
    "to-cyan-400",
    "flex-col",
    "gap-8",
    "p-6"
  );

  // Título
  const title = document.createElement("h1");
  title.classList.add(
    "text-5xl",
    "font-extrabold",
    "text-white",
    "mb-6",
    "text-shadow-lg"
  );
  title.textContent = "Home Page";

  // Botón Logout
  const btnLogout = document.createElement("button");
  btnLogout.classList.add(
    "bg-red-500",
    "text-white",
    "p-4",
    "rounded-full",
    "shadow-lg",
    "hover:bg-red-600",
    "transition",
    "duration-300",
    "ease-in-out",
    "transform",
    "hover:scale-105",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-red-300"
  );
  btnLogout.textContent = "Logout";
  
  btnLogout.addEventListener("click", async () => {
    const response = await fetch("http://localhost:4000/auth/sign-out", {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      window.location.pathname = "/";
    }
  });

  // Botón View Todos
  const btnTodos = document.createElement("button");
  btnTodos.classList.add(
    "bg-blue-500",
    "text-white",
    "p-4",
    "rounded-full",
    "shadow-lg",
    "hover:bg-blue-600",
    "transition",
    "duration-300",
    "ease-in-out",
    "transform",
    "hover:scale-105",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-300"
  );
  btnTodos.textContent = "View Todos";

  btnTodos.addEventListener("click", () => {
    window.location.pathname = "/todos";
  });

  // Agregar los elementos al contenedor
  container.appendChild(title);
  container.appendChild(btnTodos);
  container.appendChild(btnLogout);

  return container;
};
