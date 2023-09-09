export const lenguajeOptions = async () => {
  try {
    const response = await fetch("https://c10.leonardojose.dev/job/lenguajes")
    const dataLenguajes = await response.json()
    return dataLenguajes
  } catch (error) {
    console.error("Error al obtener datos", error)
  }
}
