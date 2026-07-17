/**
 * Returns true when the user's selected option indices match the correct set
 * (order-independent set equality).
 */
export function answersMatch(userAnswer, correctAnswer) {
  if (!Array.isArray(userAnswer) || !Array.isArray(correctAnswer)) {
    return false
  }

  if (userAnswer.length !== correctAnswer.length) {
    return false
  }

  return (
    userAnswer.every((ans) => correctAnswer.includes(ans)) &&
    correctAnswer.every((ans) => userAnswer.includes(ans))
  )
}
