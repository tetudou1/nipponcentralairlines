document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const resp = await fetch(file);
      if (!resp.ok) throw new Error(file + " が読み込めません");
      const html = await resp.text();
      el.innerHTML = html;
    } catch (e) {
      console.error(e);
      el.innerHTML = "<p>読み込みエラー: " + file + "</p>";
    }
  });
});
