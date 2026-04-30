function submitQuiz() {
  let a1 = document.querySelector('input[name="q1"]:checked')
  let a2 = document.querySelector('input[name="q2"]:checked')
  let a3 = document.querySelector('input[name="q3"]:checked')

  if (!a1 || !a2 || !a3) {
    document.getElementById("result").innerHTML = "Please answer all questions!"
    return
  }

  let score = 0

  if (a1.value === "5") score++
  if (a2.value === "None") score++
  if (a3.value === "Chelsea vs Bayern Munich") score++

  let grade = ""
  if (score === 3) {
    grade = "Expert — you really know your football!"
  } else if (score === 2) {
    grade = "Intermediate — solid football knowledge!"
  } else if (score === 1) {
    grade = "Amateur — you know a little!"
  } else {
    grade = "Beginner — keep watching football!"
  }

  document.getElementById("result").innerHTML = "You scored " + score + "/3 — " + grade
}