document.addEventListener("DOMContentLoaded", () => {
  const resumen = document.getElementById("resumen");
  const datos = localStorage.getItem("formData");

  if (datos) {
    const dataObj = JSON.parse(datos);
    resumen.innerHTML = Object.entries(dataObj)
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join("");
  } else {
    resumen.textContent = "No hay datos para mostrar.";
  }
});
