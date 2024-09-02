export const getAllQuestions = async () => {
  const res = await fetch('./src/data.json')
  const json = await res.json()
  const questions = json.questions
  return questions
}
