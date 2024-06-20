export const getAllQuestions = async () => {
  const res = await fetch('http://localhost:5173/src/data.json')
  const json = await res.json()
  const questions = json.questions
  return questions
}
