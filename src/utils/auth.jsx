const TUGA_BACKEND = import.meta.env.VITE_API_BASE_URL;

export async function register(email, password, name, lastname) {
  const response = await fetch(`${TUGA_BACKEND}/users/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
      lastname,
    }),
  });
  if (!response.ok) {
    throw new Error("Error al registrar");
  }

  const data = await response.json();
  return data;
}

export async function login(email, password) {
  const response = await fetch(`${TUGA_BACKEND}/users/signin`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (!response.ok) {
    throw new Error("Datos ingresados no válidos");
  }

  const data = await response.json();
  localStorage.setItem("jwt", data.token);

  return data;
}

export async function checkToken(token) {
  const response = await fetch(`${TUGA_BACKEND}/users/me`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    return { error: "Token no válido" };
  }

  const data = response.json();
  return data;
}
