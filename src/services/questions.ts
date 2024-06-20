export const getAllQuestions = async (limit: number) => {
  const res = await fetch('../data.json')
  const json = await res.json()
  const questions = json.questions
  return questions
}
