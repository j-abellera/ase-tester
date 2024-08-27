const title = 'ASE A1 Practice Test';
const QA = [
    {
        id: 1,
        question: "Using a diagnostic strategy for engine repair, which of the following is generally the last step in that process?",
        choices: [
          { letter: "a", description: "Checking vehicle history" },
          { letter: "b", description: "Verifying the repair" },
          { letter: "c", description: "Doing service checks" },
          { letter: "d", description: "Verifying the concern" }
        ],
        answer: {
          ans: "b",
          description: "Verifying the repair is always the last step in making sure the repair was complete because you must be sure the concern is repaired before you return the vehicle to the customer."
        }
      },
      {
        id: 2,
        question: "Which of the following is the most likely first step in a diagnostic strategy or scientific process of elimination for engine service?",
        choices: [
          { letter: "a", description: "Checking vehicle history" },
          { letter: "b", description: "Verifying the repair" },
          { letter: "c", description: "Doing service checks" },
          { letter: "d", description: "Verifying the concern" }
        ],
        answer: {
          ans: "d",
          description: "The first step in a diagnostic strategy is always to verify the concern that brought the customer into the repair facility. Ensure the customer's complaint and the service writer's repair order description are understood before starting work."
        }
      }
]

export { title, QA }