const title = 'ASE A5 Practice Test';
const a5Answers = [
    {
        id: 1,
        question: "A spongy brake pedal may be caused by:",
        choices: [
            { letter: "a", description: "ABS Diagnostic Trouble Code set" },
            { letter: "b", description: "Frozen caliper piston" },
            { letter: "c", description: "Defective metering valve" },
            { letter: "d", description: "Air in hydraulic system" }
        ],
        answer: {
            ans: "d",
            description: "Air causes a gap in the hydraulic fluid flow because the fluid has to compress the air before it can apply the piston. This delay causes the spongy feel. The other choices do not affect this concern."
        }
    },
    {
        id: 2,
        question: "This question is not like the others. It has the word EXCEPT. For this question, look for the choice that could NOT cause the described situation. Read the entire question carefully before choosing your answer. A vehicle has a very erratic brake pulling concern while applying the brakes. All of the following items could cause this erratic pull EXCEPT:",
        choices: [
          { letter: "a", description: "Excessive tire pressure" },
          { letter: "b", description: "Four-wheel alignment" },
          { letter: "c", description: "Seized caliper piston on the other side" },
          { letter: "d", description: "Steering gear problem" }
        ],
        answer: {
          ans: "a",
          description: "Excessive tire pressure is the exception because this fault will cause tire wear but not a pull. Low or uneven tire pressure can cause a pull."
        }
      },
      {
        id: 3,
        question: "The brakes are being bled on an older vehicle equipped with a quick take up valve in the master cylinder. Technician A says the quick take up valve must be depressed during brake bleeding. Technician B says the brakes on this vehicle cannot be bled. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "d",
          description: "Both technicians are wrong. The brakes on quick take up systems use the same bleeding procedure as those without this valve. There are no differences."
        }
      },
      {
        id: 4,
        question: "A power assist brake booster push rod that is too short will cause which of the following?",
        choices: [
          { letter: "a", description: "Excessive brake drag" },
          { letter: "b", description: "Brake system to be inoperative" },
          { letter: "c", description: "Excessive brake pedal travel" },
          { letter: "d", description: "Brake light is illuminated" }
        ],
        answer: {
          ans: "c",
          description: "A short push rod length will have to travel farther for contact and result in excessive pedal travel. The master cylinder/brake booster push rod length is critical for proper brake operation. If it is too short, the driver will usually have to depress the brake pedal further than specified to operate the brakes."
        }
      },
      {
        id: 5,
        question: "This question is not like the others. It has the word EXCEPT. For this question, look for the choice that could NOT cause the described situation. Excessive brake pedal travel with a firm brake pedal can be caused by all of the following issues, EXCEPT:",
        choices: [
          { letter: "a", description: "Rear drum brakes out of adjustment" },
          { letter: "b", description: "Low brake fluid level" },
          { letter: "c", description: "One brake system has failed" },
          { letter: "d", description: "Master cylinder push rod too long" }
        ],
        answer: {
          ans: "b",
          description: "A low brake fluid level will not cause excessive brake pedal travel and a firm brake pedal. All of the others will cause excessive brake pedal travel and a firm brake pedal."
        }
      },
      {
        id: 6,
        question: "The master cylinder fluid level is low on a vehicle. Technician A says the cause could be a brake out of adjustment. Technician B says that one of the brake systems has failed. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "c",
          description: "Both technicians are correct. Tech A is right because if the brakes are adjusted to allow too much clearance between the lining and the drum, the brake shoes will have to travel further to contact the brake drum resulting in more fluid going to the wheel cylinder. Tech B is right because when one brake system fails, the other system provides fluid for the remaining brakes."
        }
      },
      {
        id: 7,
        question: "After the replacement of a master cylinder, the brakes drag. Technician A says the compensation ports may be blocked. Technician B says excessive pedal free play could be the cause. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Technician A is right because blockage of the compensation ports will not allow the fluid to return to the master cylinder reservoir and thereby cause the brakes to remain applied and drag."
        }
      },
      {
        id: 8,
        question: "A brake fluid leak between the master cylinder and brake booster is most likely caused by which of the following?",
        choices: [
          { letter: "a", description: "Primary piston rear seal" },
          { letter: "b", description: "Loose master cylinder to booster nuts" },
          { letter: "c", description: "Secondary piston rear seal" },
          { letter: "d", description: "Rubber seal between master cylinder and booster" }
        ],
        answer: {
          ans: "a",
          description: "A brake fluid leak at the rear of the master cylinder is most likely caused by a defective master cylinder primary piston rear seal."
        }
      },
      {
        id: 9,
        question: "A master cylinder has been replaced. In an overall bleeding sequence, which part should be bled first?",
        choices: [
          { letter: "a", description: "Wheel cylinders" },
          { letter: "b", description: "Brake calipers" },
          { letter: "c", description: "Master cylinder" },
          { letter: "d", description: "Combination valve" }
        ],
        answer: {
          ans: "c",
          description: "The master cylinder is always bled first and the wheels in order from the one farthest from the master cylinder."
        }
      },
      {
        id: 10,
        question: "Two technicians are describing master cylinder characteristics. Technician A says it is NOT normal to see fluid movement in the reservoir when the brake pedal is depressed. Technician B says a defective master cylinder can cause the brake pedal to slowly sink to the floor when depressed. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "A defective master cylinder can cause the brake pedal to slowly sink to the floor when depressed, if fluid is leaking internally past the seals. Technician A is wrong because it is normal to see fluid movement in the reservoir when the brake pedal is depressed."
        }
      },
      {
        id: 11,
        question: "When the brake pedal pushrod is not adjusted correctly, brake fluid may not be able to expand back into the reservoir through which port of the master cylinder when the brakes get hot?",
        choices: [
          { letter: "a", description: "Vent port (forward hole)" },
          { letter: "b", description: "Replenishing port (rearward hole)" },
          { letter: "c", description: "Inlet port" },
          { letter: "d", description: "Either A or C" }
        ],
        answer: {
          ans: "d",
          description: "The vent port is also called the inlet port. If the vent port is blocked, the brakes may self-apply when the brake fluid heats up, as the expanded fluid has no place to go, increasing the pressure in the brake lines."
        }
      },
      {
        id: 12,
        question: "The primary brake circuit fails due to an external leak at the rear section of dual master cylinder. Technician A says you will notice a spongy lower-than-normal brake pedal and reduced braking power. Technician B says the brake pedal will 'grab' higher than normal. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Brake fluid leaks cause air in the system, which lowers the brake pedal, making it spongy and reduces braking power. Technician B is wrong because air in the system will not cause the brake pedal to grab higher than normal."
        }
      },
      {
        id: 13,
        question: "Air in the lines will cause which of the following problems?",
        choices: [
          { letter: "a", description: "Brake pulsation during stops" },
          { letter: "b", description: "Low spongy brake pedal" },
          { letter: "c", description: "Brake noise" },
          { letter: "d", description: "Brake pedal hard" }
        ],
        answer: {
          ans: "b",
          description: "A spongy pedal with a larger than normal travel indicates air in the lines. Check for leaks and bleed the air from the system."
        }
      },
      {
        id: 14,
        question: "This question has the word LEAST. For this question, look for the choice that would LEAST likely fit the described situation. Read the entire question carefully before choosing your answer. A disc brake equipped vehicle that has just been serviced. Which of the following issues will LEAST likely cause the brakes to work for a while and then start to drag?",
        choices: [
          { letter: "a", description: "Overfilled master cylinder" },
          { letter: "b", description: "Blocked vent (Compensation) port" },
          { letter: "c", description: "Insufficient caliper slide clearance" },
          { letter: "d", description: "Engine oil added to brake fluid" }
        ],
        answer: {
          ans: "c",
          description: "Insufficient caliper slide clearance is the least likely cause of brakes dragging after servicing. Other issues like an overfilled master cylinder, a blocked vent port, or engine oil added to brake fluid are more likely causes."
        }
      },
      {
        id: 15,
        question: "A brake line is heavily rusted and corroded, which of the following is an acceptable repair?",
        choices: [
          { letter: "a", description: "Replace the line with a forged copper line" },
          { letter: "b", description: "Sectioned in steel tubing using a compression fitting" },
          { letter: "c", description: "Patch the line with sealer" },
          { letter: "d", description: "Replace the line with a double-walled steel line" }
        ],
        answer: {
          ans: "d",
          description: "Metal brake lines are made of double-walled steel tubing. If any section of a metal brake line is damaged or weakened by rust or corrosion, that entire section of line must be replaced with double-walled steel brake line."
        }
      },
      {
        id: 16,
        question: "This question is not like the others. It has the word EXCEPT. For this question, look for the choice that could NOT fit the described situation. Read the entire question carefully before choosing your answer. Flexible brake hose should be inspected for all of the following, EXCEPT:",
        choices: [
          { letter: "a", description: "Cracks" },
          { letter: "b", description: "Leakage" },
          { letter: "c", description: "Twisted" },
          { letter: "d", description: "Worn outer ribs" }
        ],
        answer: {
          ans: "d",
          description: "Worn outer ribs is the exception because worn ribs do not affect brake operation."
        }
      },
      {
        id: 17,
        question: "A metal hydraulic brake line is being serviced. You can use double flare tubing or which of the following to connect the brake line at each connection point?",
        choices: [
          { letter: "a", description: "SAE (Society of Automotive Engineers) single flare" },
          { letter: "b", description: "Crimp the line at the connection with a crimping tool" },
          { letter: "c", description: "ISO (International Standards Organization) flare" },
          { letter: "d", description: "Compression type fitting" }
        ],
        answer: {
          ans: "c",
          description: "The correct process is to use double flare or ISO flare at each connection point. SAE single flare, crimping, and compression type fittings are incorrect for brake lines."
        }
      },
      {
        id: 18,
        question: "Technician A says brake hoses should rarely go bad and do not require frequent inspection. Technician B says hose swelling is normal and does not require service. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "d",
          description: "Both technicians are wrong. Brake hoses do fail over time and mileage, and hose swelling is not normal and requires service."
        }
      },
      {
        id: 19,
        question: "What is the purpose of the colored stripe on the brake hose outer casing?",
        choices: [
          { letter: "a", description: "Identification" },
          { letter: "b", description: "Protection" },
          { letter: "c", description: "To keep from twisting hose" },
          { letter: "d", description: "Orientation for installation" }
        ],
        answer: {
          ans: "c",
          description: "The colored stripe helps ensure the hose is installed straight and prevents twisting."
        }
      },
      {
        id: 20,
        question: "What type of material is used to repair brake lines?",
        choices: [
          { letter: "a", description: "Double-walled steel tubing" },
          { letter: "b", description: "Flexible reinforced plastic hose" },
          { letter: "c", description: "Double-walled Aluminum tubing" },
          { letter: "d", description: "Double-walled plastic tubing" }
        ],
        answer: {
          ans: "a",
          description: "Only double-walled steel tubing can be used for brake line repair. All others are unacceptable."
        }
      },
      {
        id: 21,
        question: "Steel brake tubing should be inspected:",
        choices: [
          { letter: "a", description: "Yearly" },
          { letter: "b", description: "Anytime brakes are serviced" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "c",
          description: "Steel brake tubing should be inspected yearly and any time brakes are serviced."
        }
      },
      {
        id: 22,
        question: "Technician A says a pull to the right during braking could be caused by a defective proportioning valve. Technician B says a pull to the left could be caused by a seized caliper slider on the right side. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "If the right-side caliper is not functioning properly due to a seized slider and the left side is working, the brake application will cause the vehicle to pull to the left. A defective proportioning valve does not cause a pull but can cause rear brake lockup."
        }
      },
      {
        id: 23,
        question: "The rear brakes lock up during a regular brake application. Technician A says a defective pressure differential valve could be the cause. Technician B says the metering valve could be the cause. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "d",
          description: "Both technicians are wrong. The pressure differential valve will not cause a lockup; it activates the brake light when there is a pressure difference. The metering valve, if defective, will cause a front brake lockup."
        }
      },
      {
        id: 24,
        question: "The rear wheels lock up during hard braking. Technician A says a defective pressure differential valve could be the cause. Technician B says a defective proportioning valve could be the cause. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "A defective proportioning valve can cause rear wheel lockup during hard braking. The pressure differential valve will not cause a lockup; it activates the brake light in the event of a pressure difference."
        }
      },
      {
        id: 25,
        question: "Technician A says the red brake warning light can be turned on if a difference in pressure is detected by the proportioning valve. Technician B says the red brake warning light can be turned on if the brake fluid level sensor detected low brake fluid level. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "The brake fluid level sensor is part of the red brake warning light circuit. Technician A is wrong because a defective proportioning valve does not turn on the red brake light."
        }
      },
      {
        id: 26,
        question: "The button on which of the following valves should be held when pressure bleeding the brakes?",
        choices: [
          { letter: "a", description: "Metering" },
          { letter: "b", description: "Proportioning" },
          { letter: "c", description: "Inlet" },
          { letter: "d", description: "Residual check" }
        ],
        answer: {
          ans: "a",
          description: "When pressure bleeding, the metering valve should be bypassed by holding the button to ensure brake fluid flows freely to the front wheels."
        }
      },
      {
        id: 27,
        question: "Pressure bleeding requires which of the following?",
        choices: [
          { letter: "a", description: "Two technicians" },
          { letter: "b", description: "Special adapter for master cylinder" },
          { letter: "c", description: "No special tools or adapters" },
          { letter: "d", description: "Special adapter for calipers" }
        ],
        answer: {
          ans: "b",
          description: "Pressure bleeding requires a special adapter for most master cylinders to connect the bleeder equipment. The other options are incorrect."
        }
      },
      {
        id: 28,
        question: "Which form of brake bleeding uses a continuous supply of brake fluid?",
        choices: [
          { letter: "a", description: "Manual" },
          { letter: "b", description: "Vacuum" },
          { letter: "c", description: "Gravity" },
          { letter: "d", description: "Pressure" }
        ],
        answer: {
          ans: "d",
          description: "Pressure bleeding uses equipment that provides a continuous supply of brake fluid under pressure to the master cylinder reservoir, and often includes small-diameter hoses to recover old brake fluid."
        }
      },
      {
        id: 29,
        question: "The brake pedal on a vehicle with power-assisted disc/drum brakes moves slowly to the floor during braking. Which of the following could be the MOST likely cause?",
        choices: [
          { letter: "a", description: "Leaking master cylinder primary cup" },
          { letter: "b", description: "Leaking power brake booster" },
          { letter: "c", description: "Leaking master cylinder residual check valve" },
          { letter: "d", description: "Internal leak in the combination valve" }
        ],
        answer: {
          ans: "a",
          description: "The master cylinder primary cup is an internal hydraulic component that, when not sealing properly, allows fluid to pass and lowers pressure, causing the pedal to move slowly to the floor."
        }
      },
      {
        id: 30,
        question: "The RED brake warning light is on in a vehicle with this wiring diagram. Which of the following is the LEAST likely cause?",
        choices: [
          { letter: "a", description: "Parking brake switch" },
          { letter: "b", description: "Brake fluid level switch" },
          { letter: "c", description: "Gauge fuse" },
          { letter: "d", description: "Loss of brake fluid pressure" }
        ],
        answer: {
          ans: "c",
          description: "Gauge fuse is the least likely cause because if the fuse were open, the brake warning lamp could not illuminate. The other three choices could all cause the brake warning lamp to be on."
        },
        image: require('./images/q30.png')
      },
      {
        id: 31,
        question: "Which of the following methods is the best way to verify a customer concern related to brake warning light?",
        choices: [
          { letter: "a", description: "Interview the customer yourself" },
          { letter: "b", description: "Check the vehicle repair history" },
          { letter: "c", description: "Operate the vehicle and verify the concern" },
          { letter: "d", description: "Check the brake fluid level and condition" }
        ],
        answer: {
          ans: "c",
          description: "The technician must experience the concern to be able to repair it."
        }
      },
      {
        id: 32,
        question: "The RED brake warning light should illuminate under all of these conditions, EXCEPT:",
        choices: [
          { letter: "a", description: "Ignition is first turned on" },
          { letter: "b", description: "Parking brake is released" },
          { letter: "c", description: "When the ABS activates" },
          { letter: "d", description: "Parking brake is applied" }
        ],
        answer: {
          ans: "b",
          description: "When the parking brake is released, the RED warning light is always OFF."
        }
      },
      {
        id: 33,
        question: "A vehicle with disc/drum brakes requires excessive brake pedal effort to stop. The brake pedal is firm when applied. While starting the engine with the brakes applied, the pedal does not go down slightly. Technician A says excessive brake pedal freeplay could be the cause. Technician B says air trapped in the hydraulic system could be the cause. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "d",
          description: "Both technicians are wrong because the problem is in the power booster. Excessive freeplay delays application and air in the hydraulic system will cause a spongy pedal."
        }
      },
      {
        id: 34,
        question: "Which of the following conditions can cause brake fade?",
        choices: [
          { letter: "a", description: "Seized wheel cylinder piston" },
          { letter: "b", description: "Brake drum machined beyond its limit" },
          { letter: "c", description: "Leakage past the master cylinder cups" },
          { letter: "d", description: "Air in the hydraulic system" }
        ],
        answer: {
          ans: "b",
          description: "Brake fade is loss of stopping power that occurs when excessive heat reduces friction between brake shoe linings and drum. Machining the brake drum beyond its limit increases the distance between the brake shoes and drum, leading to brake fade."
        }
      },
      {
        id: 35,
        question: "The rear brake linings are soaked with axle grease but still have a lot of lining left on them. Which is the correct way to service these brakes?",
        choices: [
          { letter: "a", description: "Replace the brake linings" },
          { letter: "b", description: "Wash in hot, soapy water and dry" },
          { letter: "c", description: "Clean with approved cleaner and reuse" },
          { letter: "d", description: "Repair leak and replace brake linings" }
        ],
        answer: {
          ans: "d",
          description: "The leak must be repaired before replacing the brake linings."
        }
      },
      {
        id: 36,
        question: "On a car with a drum/disc system, the front brakes lock up on light pedal application. This problem could be caused by a bad:",
        choices: [
          { letter: "a", description: "Residual check valve" },
          { letter: "b", description: "Proportioning valve" },
          { letter: "c", description: "Pressure differential switch" },
          { letter: "d", description: "Metering valve" }
        ],
        answer: {
          ans: "d",
          description: "The metering valve controls the pressure to the front disc brakes and if defective can cause a lock-up by allowing too much pressure."
        }
      },
      {
        id: 37,
        question: "What action is taking place in the photograph?",
        choices: [
          { letter: "a", description: "Adjusting the brake shoes" },
          { letter: "b", description: "Measuring the brake drum for machining" },
          { letter: "c", description: "Adjusting the parking brake" },
          { letter: "d", description: "Measuring the brake drum maximum internal size" }
        ],
        answer: {
          ans: "a",
          description: "The drum is being measured to create a measurement for adjusting the brake shoes to match. The other three choices are incorrect. B is wrong because this is not a precision measuring device for drum resurfacing. C is wrong because the parking brake adjustment is made at the parking brake cable after the rear brake shoes have been adjusted as part of the process in the photo. D is wrong because a precision measuring device is required for drum size and the maximum machine value is stamped on the drum"
        },
        image: require('./images/q37.png')
      },
      {
        id: 38,
        question: "Drum brakes are adjusted to compensate for which of the following?",
        choices: [
          { letter: "a", description: "Loose wheel bearings" },
          { letter: "b", description: "Brake fluid evaporation" },
          { letter: "c", description: "Fluid loss" },
          { letter: "d", description: "Lining wear" }
        ],
        answer: {
          ans: "d",
          description: "The lining wears over time, increasing the clearance between the drum and brake lining. Adjustment, whether manual or automatic, decreases this clearance."
        }
      },
      {
        id: 39,
        question: "The brake drum discard diameter is:",
        choices: [
          { letter: "a", description: "Available only by measuring" },
          { letter: "b", description: "Double the distance across the brake shoes" },
          { letter: "c", description: "Stamped or cast into the drum" },
          { letter: "d", description: "Located in the owner's manual" }
        ],
        answer: {
          ans: "c",
          description: "The oversize limit for brake drums is usually stamped or cast into the drum. It indicates the maximum allowed diameter for the drum, and exceeding this limit can lead to failure."
        }
      },
      {
        id: 40,
        question: "The drum brake linings should be at what measurement above the pad backing plate or rivet heads?",
        choices: [
          { letter: "a", description: "0.030 in. (0.8 mm)" },
          { letter: "b", description: "0.040 in. (1.0 mm)" },
          { letter: "c", description: "0.050 in. (1.3 mm)" },
          { letter: "d", description: "0.060 in. (1.5 mm)" }
        ],
        answer: {
          ans: "c",
          description: "The current industry standard dimension is 0.050 in (1.3 mm) above the pad backing plate or rivet heads."
        }
      },
      {
        id: 41,
        question: "What is being shown in the photograph?",
        choices: [
          { letter: "a", description: "Lining inspection hole" },
          { letter: "b", description: "Starwheel adjuster hole" },
          { letter: "c", description: "Brake lubrication port" },
          { letter: "d", description: "Rear bleed port" }
        ],
        answer: {
          ans: "b",
          description: "The starwheel adjuster hole is shown with the dust and water plug removed. It provides access to the starwheel adjuster in the brake drum web in the backing plate."
        },
        image: require('./images/q41.png')
      },
      {
        id: 42,
        question: "When brake linings are replaced, which of the following should be inspected?",
        choices: [
          { letter: "a", description: "Camber" },
          { letter: "b", description: "Wheel cylinders" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "The wheel cylinders should be inspected for leakage, which might not be visible from the outside of the brake drum. Camber is unrelated to this issue."
        }
      },
      {
        id: 43,
        question: "When the brakes are applied, a scraping or grinding noise usually indicates which of the following?",
        choices: [
          { letter: "a", description: "Missing vibration damper" },
          { letter: "b", description: "Worn-out brake linings" },
          { letter: "c", description: "Weak return springs" },
          { letter: "d", description: "A worn wheel bearing" }
        ],
        answer: {
          ans: "b",
          description: "Of the choices listed, only worn-out linings will cause metal-to-metal contact, creating the described scraping or grinding noise."
        }
      },
      {
        id: 44,
        question: "Two technicians are describing the replacement of the rear drum brake linings. Technician A says you should hone the wheel cylinder after replacing the wheel cylinder seals. Technician B says you clean and lube the backing plate, install shoes and hold-down springs, self-adjuster mechanism, and return springs. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "Only Technician B is correct. It is the standard procedure used for lining replacement. Technician A is wrong because many wheel cylinders now use a bearingized surface which would be removed if honed."
        }
      },
      {
        id: 45,
        question: "All of the following items should be lubricated when the drum brake linings are replaced, EXCEPT:",
        choices: [
          { letter: "a", description: "6 ledges on the backing plate" },
          { letter: "b", description: "Shoe anchor" },
          { letter: "c", description: "Self-adjuster at both ends and on threads" },
          { letter: "d", description: "Wheel cylinder seal lips" }
        ],
        answer: {
          ans: "d",
          description: "It is not necessary to lubricate the seals, and it could cause a leak."
        }
      },
      {
        id: 46,
        question: "What action on drum brakes is being installed in the photograph?",
        choices: [
          { letter: "a", description: "Secondary return spring" },
          { letter: "b", description: "Primary return spring" },
          { letter: "c", description: "Hold-down spring" },
          { letter: "d", description: "Parking brake spring" }
        ],
        answer: {
          ans: "c",
          description: "The installation of the hold-down springs is being shown. The other components listed are not shown in the photo."
        },
        image: require('./images/q46.png')
      },
      {
        id: 47,
        question: "Technician A says tinnerman nuts used to hold the brake drum on should be reinstalled. Technician B says a drum should be removed inside a sealed vacuum enclosure or washed with water or solvent to prevent possible asbestos dust from being released into the air. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "This is a mandated practice to prevent exposure to asbestos. Technician A is wrong because tinnerman nuts are not needed after the vehicle leaves the assembly plant."
        }
      },
      {
        id: 48,
        question: "What drum brake service is shown in the photograph?",
        choices: [
          { letter: "a", description: "Lubricate applied to brake adjusters" },
          { letter: "b", description: "Lithium grease applied to backing plate" },
          { letter: "c", description: "Axle grease applied to backing plate" },
          { letter: "d", description: "Lubricating the parking brake cable" }
        ],
        answer: {
          ans: "b",
          description: "Lithium brake grease, or antiseize compound, is being applied in the photo. They are the correct lubricants to use and will not affect braking if they get on the lining. Axle grease is the wrong lubricant and can affect braking if it gets on the lining."
        },
        image: require('./images/q48.png')
      },
      {
        id: 49,
        question: "Technician A says the threads and end caps of the adjusters should be lubricated with lithium grease before being installed. Technician B says starwheel adjusters use the same threads for the left and right sides of the vehicle. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Technician A is correct because the adjusters should be lubricated with synthetic brake grease, lithium brake grease, or antiseize compound before being installed. Technician B is wrong because starwheel adjusters have different threads (left and right-handed) for the left and right sides of the vehicle."
        }
      },
      {
        id: 50,
        question: "Most manufacturers recommend that brake parts should be cleaned with which of the following cleaners?",
        choices: [
          { letter: "a", description: "Clean water only" },
          { letter: "b", description: "Denatured alcohol" },
          { letter: "c", description: "Stoddard solvent" },
          { letter: "d", description: "Detergent and water" }
        ],
        answer: {
          ans: "b",
          description: "Denatured alcohol or 'brake clean' should be used to clean brake parts that are disassembled. Individual parts should be allowed to dry before assembly."
        }
      },
      {
        id: 51,
        question: "What drum brake service operation is being shown in the photograph?",
        choices: [
          { letter: "a", description: "Removing brake lining covers" },
          { letter: "b", description: "Attaching braking line to shoe web" },
          { letter: "c", description: "Placing masking tape on brake lining" },
          { letter: "d", description: "Replacing the brake lining" }
        ],
        answer: {
          ans: "c",
          description: "Masking tape is placed over the lining material to help prevent getting grease on the lining and is removed when finished."
        },
        image: require('./images/q51.png')
      },
      {
        id: 52,
        question: "The drum brake backing plate should be replaced if the shoe contact areas are worn more than which of the following values?",
        choices: [
          { letter: "a", description: "1/2 in. (13 mm)" },
          { letter: "b", description: "1/4 in. (7 mm)" },
          { letter: "c", description: "1/8 in. (4 mm)" },
          { letter: "d", description: "1/16 in. (1.5 mm)" }
        ],
        answer: {
          ans: "d",
          description: "When brakes are serviced, the six raised contact surfaces, called pads, ledges, or shoe contact areas, of the backing plate should be inspected. If the pads are worn more than 1/16 in. (1.5 mm), the backing plate should be replaced."
        }
      },
      {
        id: 53,
        question: "This question is not like the others. It has the word EXCEPT. For this question, look for the choice that could NOT cause the described situation. All of these would cause a low brake pedal, EXCEPT:",
        choices: [
          { letter: "a", description: "Brake adjustment" },
          { letter: "b", description: "Loose wheel bearing" },
          { letter: "c", description: "Low brake fluid" },
          { letter: "d", description: "Seized caliper piston" }
        ],
        answer: {
          ans: "d",
          description: "A seized caliper piston could cause the pedal to be high with reduced braking power, not a low brake pedal."
        }
      },
      {
        id: 54,
        question: "A spongy brake pedal on a vehicle with 4-wheel disc brakes with a longer than normal travel indicates which of the following?",
        choices: [
          { letter: "a", description: "Air in the hydraulic system" },
          { letter: "b", description: "Caliper piston seized" },
          { letter: "c", description: "Parking brake out of adjustment" },
          { letter: "d", description: "A faulty power booster" }
        ],
        answer: {
          ans: "a",
          description: "Air in the hydraulic system is the only choice that creates a spongy pedal."
        }
      },
      {
        id: 55,
        question: "A vehicle with 4-wheel disc brakes has a brake squeal. Technician A says a defective proportioning valve could be the cause. Technician B says disc brake squeal is often caused by movement of the disc brake pad during braking. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "Disc brake squeal is often caused by movement of the disc brake pad during braking. To reduce disc brake squeal, all mating surfaces of the brake should be clean and lubricated. Technician A is incorrect because the proportioning valve only affects brake lockup and is used on disc/drum combinations, not on 4-wheel disc brakes."
        }
      },
      {
        id: 56,
        question: "On a car with single piston floating caliper disc brakes, the disc brake pad between the caliper piston and the rotor is badly worn. The other brake pad is slightly worn. Technician A says excessive rotor run out could be the cause. Technician B says insufficient clearance between the pads and caliper slider could be the cause. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "Insufficient clearance between the pads and caliper slider causes the slider not to move, applying only one brake pad and causing that pad to wear. Technician A is incorrect because excessive rotor runout will cause brake pulsations, not uneven pad wear."
        }
      },
      {
        id: 57,
        question: "Which of the following problems would result in reduced brake pedal travel?",
        choices: [
          { letter: "a", description: "Air in the hydraulic system" },
          { letter: "b", description: "Low brake fluid level" },
          { letter: "c", description: "Piston frozen in the caliper" },
          { letter: "d", description: "Loose wheel bearings" }
        ],
        answer: {
          ans: "c",
          description: "A frozen piston in the caliper is the only issue listed that would cause reduced brake travel. Air in the hydraulic system and low brake fluid level would result in a spongy pedal, while loose wheel bearings would cause a pull."
        }
      },
      {
        id: 58,
        question: "What is the special tool, shown in the photo, used for on 4-wheel disc brakes?",
        choices: [
          { letter: "a", description: "Install caliper pistons" },
          { letter: "b", description: "Retracting the integral pistons" },
          { letter: "c", description: "Install brake pads" },
          { letter: "d", description: "Remove sliding caliper" }
        ],
        answer: {
          ans: "b",
          description: "The tool is used for retracting the caliper piston on an integrated parking brake system, which requires the piston to be screwed back into the bore rather than just retracted."
        },
        image: require('./images/q58.png')
      },
      {
        id: 59,
        question: "The parking brake performance test on a vehicle with 4-wheel disc brakes must be performed with the vehicle facing:",
        choices: [
          { letter: "a", description: "Uphill" },
          { letter: "b", description: "Downhill" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "c",
          description: "The brake performance test must be conducted with the vehicle facing both uphill and downhill positions."
        }
      },
      {
        id: 60,
        question: "The first step in brake pad service is which of the following?",
        choices: [
          { letter: "a", description: "Remove some fluid from master cylinder" },
          { letter: "b", description: "Set the lift pad positions before lifting" },
          { letter: "c", description: "Remove the pad retaining pins" },
          { letter: "d", description: "Remove the front wheels and calipers" }
        ],
        answer: {
          ans: "a",
          description: "You must remove some fluid to prevent damage from overflow when you push in the caliper pistons to remove the brake pads."
        }
      },
      {
        id: 61,
        question: "The front rotor needs to be replaced so the caliper must be removed. What should you do with the caliper after removing the retaining bolts?",
        choices: [
          { letter: "a", description: "Lay it across the steering knuckle" },
          { letter: "b", description: "Hang it on a piece of wire" },
          { letter: "c", description: "Extend the piston" },
          { letter: "d", description: "Disconnect the brake hose" }
        ],
        answer: {
          ans: "b",
          description: "Hanging the caliper on a piece of wire preserves the brake line and keeps it out of the way without disturbing the hydraulic system."
        }
      },
      {
        id: 62,
        question: "A caliper piston seal is being removed from its bore. Which of the following tools should be used to perform this task?",
        choices: [
          { letter: "a", description: "Screwdriver" },
          { letter: "b", description: "Compressed air" },
          { letter: "c", description: "Wooden pick" },
          { letter: "d", description: "Knife" }
        ],
        answer: {
          ans: "c",
          description: "The wooden pick is the only tool that will not damage the bore when removing the caliper piston seal."
        }
      },
      {
        id: 63,
        question: "Two technicians are discussing how to remove a caliper piston. Technician A says to use compressed air. Technician B says to use a large C-clamp. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Using compressed air to remove a caliper piston should be done with extreme care due to the high force it can exert."
        }
      },
      {
        id: 64,
        question: "The disassembly of a caliper is being described. Technician A says after piston removal and a thorough cleaning and inspection, a new square cut O-ring should be installed in the groove of the caliper bore. Technician B says to lubricate the caliper piston with clean transmission fluid, the caliper piston is then pushed into the caliper bore. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Technician A's procedure is correct. Technician B is wrong because caliper pistons should be lubricated with clean brake fluid, not transmission fluid."
        }
      },
      {
        id: 65,
        question: "Technician A says a steel piston should be cleaned with sandpaper to remove rust. Technician B says brake assembly fluid or clean brake fluid should be used to lubricate the caliper pistons before installing in the caliper. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "Brake assembly fluid or clean brake fluid should be used for lubrication. Technician A is incorrect because sandpaper can damage the chrome surface of the piston."
        }
      },
      {
        id: 66,
        question: "Which of the following is critical for the assembly of a single piston floating caliper?",
        choices: [
          { letter: "a", description: "Piston to bore clearance" },
          { letter: "b", description: "Clearance between the slider and caliper body" },
          { letter: "c", description: "Front wheel bearing adjustment" },
          { letter: "d", description: "Positioning of piston" }
        ],
        answer: {
          ans: "b",
          description: "If the clearance between the slider and caliper body is too small, the slider will stick and cause premature pad wear."
        }
      },
      {
        id: 67,
        question: "In the above Figure what is being measured on the rotor?",
        choices: [
          { letter: "a", description: "Rotor thickness variation (parallelism)" },
          { letter: "b", description: "Wheel bearing wear" },
          { letter: "c", description: "Rotor lateral run-out" },
          { letter: "d", description: "Rotor face wear" }
        ],
        answer: {
          ans: "c",
          description: "The dial indicator is positioned to measure lateral or side-to-side runout of the rotor."
        },
        image: require('./images/q67.png')
      },
      {
        id: 68,
        question: "The front rotor thickness variation (parallelism) is being measured. Technician A says you use a feeler gauge to make the measurement. Technician B says a dial indicator is used to make the measurement. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "d",
          description: "Both technicians are incorrect. A special micrometer or digital readout rotor micrometer is used to accurately measure rotor thickness variation (parallelism)."
        }
      },
      {
        id: 69,
        question: "Two technicians are explaining how to service an aluminum metal matrix composite alloy rotor, when resurfacing is not used. Technician A says servicing these rotors is slightly different from cast-iron rotors. Technician B says you must remove the dark transfer layer on the rubbing surface anytime the rotor is removed. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Technician A is right because servicing aluminum metal matrix composite alloy rotors is different from cast-iron rotors. Technician B is wrong because the dark transfer layer on the rubbing surface does not harm rotor performance and should not be removed unless the rotor is warped and needs machining."
        }
      },
      {
        id: 70,
        question: "The device shown in the above Figure is used when machining a brake rotor. Which of the following functions does it perform?",
        choices: [
          { letter: "a", description: "Improves the quality of the machined surface" },
          { letter: "b", description: "Keeps the noise level down in the shop" },
          { letter: "c", description: "Increases the speed of the cut" },
          { letter: "d", description: "Decreases the speed of the cut" }
        ],
        answer: {
          ans: "a",
          description: "The rubber damper improves the quality of the machined surface by reducing vibrations, resulting in a smoother cut."
        },
        image: require('./images/q70.png')
      },
      {
        id: 71,
        question: "Two technicians are discussing the machining of a brake rotor. Technician A says OEM (original equipment manufacturers) like GM and others prefer the off-car form of rotor machining. Technician B says to check that the rotor is mounted correctly, loosen the retaining nut, turn the rotor one-half turn (180°), and retighten the nut and make another scratch cut. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "Technician B is correct because this is the correct process for on-car or off-car machining. Technician A is wrong because OEMs typically prefer on-car rotor machining."
        }
      },
      {
        id: 72,
        question: "Which of the following can cause a light scraping or chirping noise when the brakes are not applied?",
        choices: [
          { letter: "a", description: "Excessive clearance at caliper slides" },
          { letter: "b", description: "Insufficient clearance at caliper slides" },
          { letter: "c", description: "Worn brake pads" },
          { letter: "d", description: "Parking brake out of adjustment" }
        ],
        answer: {
          ans: "c",
          description: "Worn brake pads will cause a wear indicator to touch the brake rotor, creating a light scraping or chirping noise when the brakes are not applied. The other choices do not cause this noise."
        }
      },
      {
        id: 73,
        question: "Which of the following is the MOST likely cause of a pulsating brake pedal?",
        choices: [
          { letter: "a", description: "Leaking brake fluid at the front calipers" },
          { letter: "b", description: "Excessive rotor thickness variation" },
          { letter: "c", description: "Blocked bypass port in master cylinder" },
          { letter: "d", description: "Glazed linings and brake rotors" }
        ],
        answer: {
          ans: "b",
          description: "Excessive rotor thickness variation causes lateral runout, which leads to brake pedal pulsations. The other options are not likely to cause pulsating brake pedals."
        }
      },
      {
        id: 74,
        question: "Which brake bleeding tool is shown in the above Figure?",
        choices: [
          { letter: "a", description: "Gravity bleeding" },
          { letter: "b", description: "Manual bleeding" },
          { letter: "c", description: "Pressure bleeding" },
          { letter: "d", description: "Vacuum bleeding" }
        ],
        answer: {
          ans: "d",
          description: "A vacuum bleeding tool is shown in the illustration."
        },
        image: require('./images/q74.png')
      },
      {
        id: 75,
        question: "The brake fluid is being tested in the above illustration. Technician A says the strip measures the boiling point of the fluid. Technician B says the strip indicates if there is water in the brake fluid. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "Litmus strips test for contamination, such as water in the brake fluid. Technician A is wrong because the boiling point is tested with a different tool."
        },
        image: require('./images/q75.png')
      },
      {
        id: 76,
        question: "A preliminary brake check includes all of the following checks, EXCEPT:",
        choices: [
          { letter: "a", description: "Fluid level" },
          { letter: "b", description: "Warning lights" },
          { letter: "c", description: "Rotor thickness" },
          { letter: "d", description: "Brake pedal check" }
        ],
        answer: {
          ans: "c",
          description: "Rotor thickness is checked when there is a complaint of brake pulsations, not typically as part of a preliminary brake check."
        }
      },
      {
        id: 77,
        question: "A technician is going to refinish a brake rotor on a vehicle. Which of the following is the LEAST LIKELY part of this process?",
        choices: [
          { letter: "a", description: "Measure the rotor thickness" },
          { letter: "b", description: "Choose the proper adapter" },
          { letter: "c", description: "Lathe head clears the wheel well opening" },
          { letter: "d", description: "Sand rotor with 80-grit sand paper" }
        ],
        answer: {
          ans: "d",
          description: "Refinishing a brake rotor is done using finer sandpaper, such as 150-grit aluminum oxide, not 80-grit sandpaper."
        }
      },
      {
        id: 78,
        question: "Which of the following conditions is MOST likely caused by improper wheel nut torque?",
        choices: [
          { letter: "a", description: "Bent wheel" },
          { letter: "b", description: "Frozen caliper piston" },
          { letter: "c", description: "Warped rotor" },
          { letter: "d", description: "Severe brake pull" }
        ],
        answer: {
          ans: "c",
          description: "Improper wheel nut torque can cause uneven clamping force on the rotor, leading to warping."
        }
      },
      {
        id: 79,
        question: "After a recent brake service the vehicle is lifted up and it is discovered that the left front wheel does not turn when force is applied. Which of the following could be the cause?",
        choices: [
          { letter: "a", description: "Stuck master cylinder secondary piston" },
          { letter: "b", description: "Stuck master cylinder primary piston" },
          { letter: "c", description: "Brake fluid restriction" },
          { letter: "d", description: "Insufficient caliper slide clearance" }
        ],
        answer: {
          ans: "c",
          description: "A brake fluid restriction in the line could cause the left front wheel to be locked and not turn. The other options would affect more than just the left front wheel or result in different issues."
        }
      },
      {
        id: 80,
        question: "A vehicle comes in with a complaint of excessive pedal travel before the brakes apply. Technician A says the master cylinder pushrod adjustment is incorrect. Technician B says the cause is a faulty residual pressure check valve admitting air. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Technician A is correct because an incorrect master cylinder pushrod adjustment can cause excessive pedal travel. Technician B is incorrect because a faulty residual check valve would cause a spongy pedal, not excessive travel."
        }
      },
      {
        id: 81,
        question: "With the brakes applied on a vehicle with power brakes, the pedal moves down slightly when the engine is started. Technician A says the cause could be a leaking power brake booster diaphragm. Technician B says the cause could be a stuck closed residual check valve in the hose from the intake manifold to the power brake booster. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "d",
          description: "Both technicians are incorrect because a slight pedal movement with the engine start is normal operation for power brakes, not indicative of a fault."
        }
      },
      {
        id: 82,
        question: "If the brake assist component at point A in the photograph is defective, what will be the customer concern?",
        choices: [
          { letter: "a", description: "Dragging brakes" },
          { letter: "b", description: "Spongy pedal" },
          { letter: "c", description: "Lack of assist with engine off" },
          { letter: "d", description: "Lack of assist with engine on" }
        ],
        answer: {
          ans: "c",
          description: "A defective vacuum residual check valve will cause a lack of brake assist with the engine off. It stores vacuum for emergency stops, so a fault will affect this function."
        },
        image: require('./images/q82.png')
      },
      {
        id: 83,
        question: "When performing a vacuum booster function test, you should begin by pumping the brake pedal several times _______________.",
        choices: [
          { letter: "a", description: "with the engine off" },
          { letter: "b", description: "with the engine running" },
          { letter: "c", description: "with the vacuum hoses removed" },
          { letter: "d", description: "while driving the vehicle slowly" }
        ],
        answer: {
          ans: "a",
          description: "To test the vacuum booster, you need to deplete the vacuum reservoir by pumping the brake pedal with the engine off."
        }
      },
      {
        id: 84,
        question: "A truck with a hydraulic brake booster has a spongy brake pedal feel. Technician A says there may be air in the master cylinder. Technician B says the power steering belt may be slipping. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Air in the master cylinder will cause a spongy pedal feel. Technician B is incorrect because a slipping power steering belt would affect boost but not necessarily cause a spongy pedal."
        }
      },
      {
        id: 85,
        question: "On a bearing that has been shock loaded, the race (cup) of the bearing can be dented. What is this type of bearing failure called?",
        choices: [
          { letter: "a", description: "Spalling" },
          { letter: "b", description: "Arcing" },
          { letter: "c", description: "Brinelling" },
          { letter: "d", description: "Fluting" }
        ],
        answer: {
          ans: "c",
          description: "Brinelling is characterized by indentations in the race caused by impact loads or vibrations."
        }
      },
      {
        id: 86,
        question: "This question has the word EXCEPT. For this question, look for the choice that could NOT fit the described situation. Read the entire question carefully before choosing your answer. All of the following can be symptoms of a defective wheel bearing, EXCEPT:",
        choices: [
          { letter: "a", description: "Hum, rumbling, or growling noise" },
          { letter: "b", description: "Roughness felt in the steering wheel" },
          { letter: "c", description: "Pulling during braking" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "d",
          description: "Pulling without the brakes applied is an exception because it typically indicates issues related to alignment, suspension, or tires, not wheel bearings. The other symptoms listed are related to defective wheel bearings."
        }
      },
      {
        id: 87,
        question: "What component in the above Figure is involved in the following procedures?",
        choices: [
          { letter: "a", description: "Replacing sealed wheel bearing" },
          { letter: "b", description: "Replacing the Front strut" },
          { letter: "c", description: "Replacing a ball joint" },
          { letter: "d", description: "Repacking a front wheel bearing" }
        ],
        answer: {
          ans: "a",
          description: "The figure shows a front wheel bearing."
        },
        image: require('./images/q87.png')
      },
      {
        id: 88,
        question: "The front wheel bearings are being adjusted. Technician A says you torque the adjusting nut to a specified torque and back off the nut till it lines up with the hole and install the cotter pin. Technician B says backing off the castle nut will cause the bearing to overheat. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Technician A is correct because you torque the adjusting nut to a specified torque, then back off until the cotter pin hole lines up. Technician B is wrong because backing off the castle nut will not cause the bearing to overheat."
        }
      },
      {
        id: 89,
        question: "After cleaning a front wheel bearing, which of the following lubricants is applied?",
        choices: [
          { letter: "a", description: "Hydraulic fluid" },
          { letter: "b", description: "Engine oil" },
          { letter: "c", description: "Bearing grease" },
          { letter: "d", description: "Lithium grease" }
        ],
        answer: {
          ans: "c",
          description: "Bearing grease is the correct lubricant for front tapered wheel bearings."
        }
      },
      {
        id: 90,
        question: "The parking brakes are properly adjusted if the brakes are fully applied after the control has moved to what level of its available travel?",
        choices: [
          { letter: "a", description: "1/3 to 2/3" },
          { letter: "b", description: "1/2" },
          { letter: "c", description: "1/4 to 1/2" },
          { letter: "d", description: "1/2 to 3/4" }
        ],
        answer: {
          ans: "a",
          description: "1/3 to 2/3 is the industry standard for proper parking brake adjustment."
        }
      },
      {
        id: 91,
        question: "Technician A says a vehicle can fail a parking brake performance test if the linings are contaminated. Technician B says worn-out service brakes will NOT affect parking brake performance. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Technician A is correct because contaminated linings reduce stopping distance. Technician B is wrong because worn-out service brakes, particularly rear drum brakes, can affect parking brake performance."
        }
      },
      {
        id: 92,
        question: "The brake warning light is on in a vehicle with this wiring schematic. Technician A says the parking brake switch could be the cause. Technician B says a defective ignition switch could be the cause. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Tech A is correct because a closed parking brake switch completes the path to ground for the brake warning lamp, causing it to illuminate. Tech B is wrong because a defective ignition switch would prevent the warning lamp from working at all, as it supplies the necessary voltage."
        },
        image: require('./images/q92.png')
      },
      {
        id: 93,
        question: "The parking brake performance test must be performed with the vehicle facing in which direction?",
        choices: [
          { letter: "a", description: "Uphill" },
          { letter: "b", description: "Downhill" },
          { letter: "c", description: "Level surface" },
          { letter: "d", description: "Both A and B" }
        ],
        answer: {
          ans: "d",
          description: "Both directions are correct. If both the service brake pedal and parking brake control have acceptable travel and the wheels with the parking brakes turn freely, the final test is to check the parking brake performance. Stop the vehicle facing uphill on a grade of approximately 20 percent then firmly apply the parking brake and release the service brakes. The vehicle should hold its position and not creep or roll. Repeat the test with the vehicle facing downhill. If the vehicle fails the performance test, it usually indicates a problem in the service brake friction assembly. A worn out service brake, or one with contaminated linings, cannot generate enough friction for the parking brake to work properly. However, some parking brakes, particularly caliper actuated disc designs, have marginal holding power unless a great deal of force is applied to the parking brake control. Some drivers who complain of parking brake problems may simply be unable to apply the parking brake control hard enough. To a certain extent, you must depend on experience to help identify when a parking brake has sufficient braking power, and when it does not."
        }
      },
      {
        id: 94,
        question: "The ABS (antilock brake system) and TRACTION OFF indicator lights remain ON with the engine running. Technician A says to check for ABS or TCS (traction control system) diagnostic trouble codes. Technician B says you can check for ABS or TCS blink codes by connecting two pins of the DLC (Data Link Connector). Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "c",
          description: "Both technicians are correct. Tech A is right because you check for ABS (antilock brake system) or TCS (traction control system) diagnostic trouble codes when the amber ABS warning lamp or Traction OFF light is on. Tech B is right because on older ABS Systems you can check for ABS blink codes by connecting two pins of the DLC (Data Link Connector)."
        }
      },
      {
        id: 95,
        question: "A wheel speed sensor is being diagnosed using the OEM (original equipment manufacturer) diagnostic scan tool with a DTC (Diagnostic Trouble Code) stored for the left rear wheel speed sensor. Using the above wiring diagram, which of the following could be the cause?",
        choices: [
          { letter: "a", description: "Open in black wire from Pin 1 of EBCM to ground" },
          { letter: "b", description: "Open in gray/black wire from EBCM pin 19 to yaw rate sensor" },
          { letter: "c", description: "Grounded orange wire at EBCM pin 5" },
          { letter: "d", description: "Grounded brown wire at EBCM pin 3" }
        ],
        answer: {
          ans: "c",
          description: "If the brown wire from EBCM pin 3 to the left rear wheel speed sensor is grounded, the sensor will not work and set a DTC because this is the 12 volt reference signal. The other three choices are incorrect. A is wrong because this is the EBCM ground and will set a specific ABS DTC. B is wrong because the yaw rate sensor is used for stability control not ABS. D is wrong because it involves the right rear wheel speed sensor."
        },
        image: require('./images/q95.png')
      },
      {
        id: 96,
        question: "The front brake rotors and pads are being replaced on a vehicle equipped with a TCS (traction control system) and electronic stability control system (ESC). Technician A says the yaw rate and deceleration sensor should be recalibrated. Technician B says the new rotors should be indexed to the hub using a dial indicator for the least amount of runout. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "This is the standard process by many OEMs when a new rotor is installed. Technician A is wrong because recalibration is not required for these sensors."
        }
      },
      {
        id: 97,
        question: "The ABS (antilock brake system) amber light does not go off after the engine is started. Technician A says a parking brake not fully released could be the cause. Technician B says when this happens the brakes will operate like a normal non-ABS brake system. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "b",
          description: "If the amber light is on it indicates an ABS fault and the system will revert to regular brake operation without ABS. Technician A is wrong because the parking brake only affects the RED Brake Light not the amber."
        }
      },
      {
        id: 98,
        question: "Technician A says a pulsation felt in the brake pedal during an ABS (antilock brake system) stop indicates there is a problem within the ABS system. Technician B says the ABS amber light comes on during whenever there is wheel slippage. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "d",
          description: "Technician A is wrong because the pulsation is normal and not a problem. Technician B is wrong because the amber light does not come on unless there is a fault in the ABS system."
        }
      },
      {
        id: 99,
        question: "A 3-channel ABS (Anti-Lock Brake System) equipped vehicle has a wheel lockup on braking with no amber warning light or DTC (Diagnostic Trouble Codes) set. Technician A says contaminated linings on both rear axles could be the cause. Technician B says a defective front wheel speed sensor could be the cause. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "a",
          description: "Contaminated linings on both axles could still have the same wheel speed in a 3-channel system and not normally be detected by the ABS. Technician B is wrong because a front wheel sensor would set a code and put on the amber light."
        }
      },
      {
        id: 100,
        question: "A vehicle has a noticeable pull to the left when the brakes are applied using heavy pressure. Technician A says a stuck floating caliper on the left could be the cause. Technician B says an open ABS (antilock brake system) wheel speed sensor could be the cause. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "d",
          description: "Technician A is wrong because a stuck right caliper will cause a pull to the left. Technician B is wrong because defective wheel sensors do not cause brake pulls."
        }
      },
      {
        id: 101,
        question: "Technician A says some noise and brake pedal pulsation is normal when the ABS (antilock brake system) actuator is operating. Technician B says the ABS (antilock brake system) warning light should come on and remain on for approximately 3 seconds after the key is turned to the ON position. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "c",
          description: "Both technicians are correct. Tech A is right because noise and brake pedal pulsation are a normal part of ABS operation. Tech B is right because the ABS warning light should come on and remain on for approximately 3 seconds after the key is turned to the ON position."
        }
      },
      {
        id: 102,
        question: "A 3-channel ABS (Anti-Lock Brake System) equipped vehicle has a wheel lockup on braking with no warning light or diagnostic trouble code set. Which of the following is the most likely cause?",
        choices: [
          { letter: "a", description: "Defective wheel sensor" },
          { letter: "b", description: "Defective wheel bearing" },
          { letter: "c", description: "Contaminated rear brake lining" },
          { letter: "d", description: "Insufficient brake caliper slide clearance" }
        ],
        answer: {
          ans: "c",
          description: "Contaminated rear brake lining is the most likely cause because contaminated linings on both axles could still have the same wheel speed in a 3-channel system and not normally be detected by the ABS. The system cannot detect if the linings are contaminated. A is wrong because a defective wheel speed sensor cannot cause wheel lockup on braking without the amber warning light ON or diagnostic trouble codes set. B is wrong because a defective wheel bearing will not likely cause wheel lockup. D is wrong because insufficient brake caliper slide clearance causes brake pad wear but not lockup."
        }
      },
      {
        id: 103,
        question: "What happens if a fault is detected in the ABS (antilock brake system)?",
        choices: [
          { letter: "a", description: "ABS and basic brakes become inoperative" },
          { letter: "b", description: "Malfunction Indicator Lamp (MIL) illuminates" },
          { letter: "c", description: "ABS Amber Warning Lamp illuminates" },
          { letter: "d", description: "RED brake warning lamp illuminates" }
        ],
        answer: {
          ans: "c",
          description: "An ABS fault turns on the ABS warning light and the system reverts to a normal brake system without ABS."
        }
      },
      {
        id: 104,
        question: "Technician A says you may need a scan tool to bleed the ABS (Antilock Brake System). Technician B says that before beginning the ABS system bleeding process, check for the correct procedure in the online service information. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "c",
          description: "Both technicians are correct. Tech A is right because scan tools are required on some systems that use bi-directional communication. The general procedure is as follows: Connect a pressure bleeder to the brake fluid reservoir, but do not pressurize it yet. Install bleeder hoses over the bleeder screws at each wheel. Submerse the other end of each hose in a container partially filled with clean, specified brake fluid. Connect the scan tool to the data link connector and access the EBS bleed function. Apply the specified amount of pressure from the pressure bleeder. Follow the instructions on the screen of the scan tool. Once the scan tool indicates that the HCU (Hydraulic Control Unit) is bled, it may direct you to bleed the brakes manually to remove any remaining air from the system. Remove the pressure bleeder, top off the reservoir, and test the brake pedal feel. Tech B is right because you must research the bleeding procedure in the service Information to be accurate and achieve a good repair. Follow the specified procedure precisely."
        }
      },
      {
        id: 105,
        question: "Technician A says silicon based brake fluid may be used in an ABS (antilock brake system). Technician B says when an ABS wheel speed sensors fails, you must replace both wheel sensors on that axle. Who is right?",
        choices: [
          { letter: "a", description: "A only" },
          { letter: "b", description: "B only" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "d",
          description: "Technician A is wrong because silicon fluid or DOT5 is not compatible with DOT2 or DOT3 and is primarily used in military and special applications because it has no affinity for water. Technician B is wrong because wheel sensors are not matched."
        }
      },
      {
        id: 106,
        question: "With an ABS (antilock brake system), which of the following components would be most often damaged?",
        choices: [
          { letter: "a", description: "Control module" },
          { letter: "b", description: "Wheel speed sensor" },
          { letter: "c", description: "Hydraulic pump" },
          { letter: "d", description: "Master cylinder" }
        ],
        answer: {
          ans: "b",
          description: "A wheel speed sensor is correct because the wheel sensor is close to road environments where the other components are shielded."
        }
      },
      {
        id: 107,
        question: "You are diagnosing a problem with a 3-channel ABS (Anti-Lock Brake System) with an ESC (Electronic Stability Control) system. Which of the following is LEAST likely to illuminate the Amber Warning Lamp?",
        choices: [
          { letter: "a", description: "Wheel Speed Sensor" },
          { letter: "b", description: "Proper tire size" },
          { letter: "c", description: "Contaminated rear brake lining" },
          { letter: "d", description: "Contaminated front brake pads" }
        ],
        answer: {
          ans: "c",
          description: "A contaminated rear brake lining is the least likely to turn on the amber ABS warning lamp because contaminated linings on both axles could still have the same wheel speed in a 3-channel system and not normally be detected by the ABS. Proper tire size and wheel speed sensor issues are more likely to trigger the warning lamp. Contaminated front brake pads could also impact the ABS system if the sensors detect issues related to braking performance."
        }
      },
      {
        id: 108,
        question: "On an integral ABS (antilock brake system) using an accumulator, which of the following is a critical safety concern when servicing the system?",
        choices: [
          { letter: "a", description: "Release vacuum pressure at the master cylinder" },
          { letter: "b", description: "Pump brake pedal with key off to release pressure" },
          { letter: "c", description: "Pump brake pedal with the engine idling to release pressure" },
          { letter: "d", description: "Drain the fluid before servicing the master cylinder" }
        ],
        answer: {
          ans: "b",
          description: "The accumulator stores high pressure for emergency stops and can cause personal injury if the pressure is not released prior to service. Pumping the brake pedal with the key off helps to release this pressure safely before beginning work."
        }
      },
      {
        id: 109,
        question: "An ABS (antilock brake system) warning light that comes on as soon as the vehicle begins to move indicates:",
        choices: [
          { letter: "a", description: "Defective pump fuse" },
          { letter: "b", description: "Low brake fluid level" },
          { letter: "c", description: "Bad wheel speed sensor" },
          { letter: "d", description: "Failed modulator solenoid" }
        ],
        answer: {
          ans: "c",
          description: "The ABS warning light coming on as soon as the vehicle begins to move is commonly associated with a bad wheel speed sensor. This sensor detects the speed of the wheels and is crucial for ABS operation. Issues with the pump fuse, brake fluid level, or modulator solenoid would typically have different symptoms or occur in different contexts."
        }
      },
      {
        id: 110,
        question: "Tools used to diagnose ABS (antilock brake system) include all of the following, EXCEPT:",
        choices: [
          { letter: "a", description: "Depth gauge" },
          { letter: "b", description: "Digital multimeter" },
          { letter: "c", description: "Breakout box" },
          { letter: "d", description: "Scan tool" }
        ],
        answer: {
          ans: "a",
          description: "A depth gauge is not used in the repair or service of ABS systems. Tools such as a digital multimeter, breakout box, and scan tool are commonly used for diagnosing ABS issues."
        }
      },
      {
        id: 111,
        question: "An ABS (antilock brake system) wheel speed sensor should be checked for which of the following?",
        choices: [
          { letter: "a", description: "Amperage (milliamps)" },
          { letter: "b", description: "Voltage supply" },
          { letter: "c", description: "Both A and B" },
          { letter: "d", description: "Neither A nor B" }
        ],
        answer: {
          ans: "c",
          description: "Wheel sensors should be checked for both voltage and amperage. These measurements help ensure the proper operation of the ABS system."
        }
      },
      {
        id: 112,
        question: "Which of the following tools is used to measure the gap between the toothed ring and the ABS (antilock brake system) wheel speed sensor?",
        choices: [
          { letter: "a", description: "Paper gasket" },
          { letter: "b", description: "Brass or plastic feeler gauge" },
          { letter: "c", description: "Standard steel feeler gauge" },
          { letter: "d", description: "Either A or B" }
        ],
        answer: {
          ans: "d",
          description: "A paper gasket or a nonferrous (brass or plastic) feeler gauge can be used to measure the gap between the toothed ring and the ABS wheel speed sensor. A steel feeler gauge is not recommended because it can be attracted by the magnet in the sensor, affecting the measurement."
        }
      },
      {
        id: 113,
        question: "An ABS (antilock brake systems) wheel sensor output is being tested by spinning the wheel. Which of the following DMM (Digital Multimeter) settings is used to check output?",
        choices: [
          { letter: "a", description: "DC Volts" },
          { letter: "b", description: "AC Amps" },
          { letter: "c", description: "AC Volts" },
          { letter: "d", description: "DC Amps" }
        ],
        answer: {
          ans: "c",
          description: "The output of an ABS wheel sensor is measured in AC volts because it produces an alternating current signal. Using the AC Volts setting on the Digital Multimeter (DMM) is appropriate for this measurement."
        }
      }
]

export { a5Answers as QA, title }