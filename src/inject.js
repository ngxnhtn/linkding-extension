(function () {
  const title =
    document.querySelector("title")?.textContent ||
    document.querySelector('meta[property="og:title"]')?.getAttribute("content") ||
    "";
  const description =
    document.querySelector('meta[name="description"]')?.getAttribute("content") ||
    document.querySelector('meta[property="og:description"]')?.getAttribute("content") ||
    "";
  return { title, description };
})();
