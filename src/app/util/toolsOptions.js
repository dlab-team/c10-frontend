export const toolsOptions = async () => {
  try {
    const response = await fetch('https://c10.leonardojose.dev/job/tools')
    const dataTools = await response.json()
    return dataTools
  } catch (error) {
    console.error('Error al obtener datos', error)
  }
}
