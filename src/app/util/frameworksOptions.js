export const frameworksOptions = async () => {
  try {
    const response = await fetch("https://c10.leonardojose.dev/job/frameworks")
    const dataFramework = await response.json()
    return dataFramework
  } catch (error) {
    console.error("Error al obtener datos", error)
  }
}
