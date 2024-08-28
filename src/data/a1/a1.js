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
      },
      {
        id: 3,
        question: "This question contains the word EXCEPT. Read the question carefully before choosing your answer. All of the following are steps in verifying a driver’s concern or complaint of an engine noise, EXCEPT:",
        choices: [
          { letter: "a", description: "Discuss concern with owner" },
          { letter: "b", description: "Change engine oil and filter" },
          { letter: "c", description: "Road test vehicle" },
          { letter: "d", description: "Check for TSB (technical service bulletins)" }
        ],
        answer: {
          ans: "b",
          description: "You first need to verify the noise before doing any engine service and, at this point, it has not been determined that an oil change would cure the noise. If you are questioning the customer about symptoms, be sure to get specific information from the customer about what happens, when it happens, and how often it happens. Take notes that will help to diagnose the problem. Then be sure that when relaying this information to someone else, the other person understands the symptoms with the same detail in which you do. If you have a vehicle that is hard to start only when it is cold outside, you might first check the service information to see if there are any related TSBs. A TSB is released when there are many of the same vehicles having the same symptoms and causes, so you can quickly skim through hundreds of TSBs looking for specific symptoms. When one is found, read it and interpret the information. Road testing puts the engine under load where some noises are only diagnosed."
        }
      },
      {
        id: 4,
        question: "This question contains the word EXCEPT. Read the question carefully before choosing your answer. All of the following tools are used to assess the mechanical condition of an engine, EXCEPT:",
        choices: [
          { letter: "a", description: "Compression tester" },
          { letter: "b", description: "DMM (Digital Multimeter)" },
          { letter: "c", description: "Vacuum gauge" },
          { letter: "d", description: "Scan tool" }
        ],
        answer: {
          ans: "b",
          description: "A DMM or Digital Multimeter is used to measure current, voltage, resistance, and electrical frequency and is not used to assess an engine's mechanical condition. A compression tester is used when a technician suspects a cylinder may have low compression. The compression tester measures the amount of compression pressure a cylinder can generate. The vacuum gauge measures the amount of vacuum an engine can generate during various operating conditions and indicates the mechanical condition of the engine. The scan tool communicates to the vehicle’s computers through the data link connector (DLC). It displays the readings from the various sensors; retrieves trouble codes, freeze frame data, and system monitor data; and on some vehicles performs output tests such as a cylinder."
        }
      },
      {
        id: 5,
        question: "An engine cranks but will not start. Which of the following should be checked first?",
        choices: [
          { letter: "a", description: "Check for spark" },
          { letter: "b", description: "Check for fuel" },
          { letter: "c", description: "Check engine compression" },
          { letter: "d", description: "Check engine timing" }
        ],
        answer: {
          ans: "a",
          description: "Without ignition, an engine will crank but will not start. The other three choices are all possible sources of a no-start when the engine cranks but would not be the first thing a technician should check."
        }
      },
      {
        id: 6,
        question: "Engine mechanical testing should start with:",
        choices: [
          { letter: "a", description: "Scan tool analysis" },
          { letter: "b", description: "Visual inspection" },
          { letter: "c", description: "Checking for any TSBs" },
          { letter: "d", description: "Checking for DTCs (diagnostic trouble codes)" }
        ],
        answer: {
          ans: "b",
          description: "A visual inspection of the engine assembly for leaks will affirm the ability of the seals and gaskets to contain each of the engine’s fluids. Starting the engine and listening to its operation can indicate a host of problems, from loose belts to worn main bearings. It can also reveal if the engine is misfiring and how steady the misfire is."
        }
      },
      {
        id: 7,
        question: "The engine cranks but will not start. Which of the following is prioritized on a typical symptom flow chart to check before the others?",
        choices: [
          { letter: "a", description: "Ignition circuit" },
          { letter: "b", description: "Ground circuit" },
          { letter: "c", description: "Camshaft position sensor" },
          { letter: "d", description: "Crankshaft position sensor" }
        ],
        answer: {
          ans: "a",
          description: "On the typical symptom flow chart, the 'Ignition Circuit' is listed as a priority 1 item in the order of inspection to check first before the other listed as distracters in this question."
        }
      }
]

export { title, QA }