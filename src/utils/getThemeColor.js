const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme
  //tem que fazer essa checagem se nao o codigo quebra

  if (theme === "light") return "#fff"
  if (theme === "dark") return "#16202c"
}

export default getThemeColor
