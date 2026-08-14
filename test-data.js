const IMG = "assets/test9-images/";
const TOTAL_POINTS = 60;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const paired = (id, prompt, parts, image = "") => ({ id, type: "paired", prompt, points: parts.length, parts, image });

const sections = [
  { key: "A", label: "A", title: "Listen and circle the correct answer.", note: "Listen to each statement and choose True or False.", points: 6, audio: "assets/audio-a.mp3", questions: [
    choice("A1", "1.", ["True", "False"], "False", "The first statement is false according to the recording."),
    choice("A2", "2.", ["True", "False"], "True", "The second statement is true according to the recording."),
    choice("A3", "3.", ["True", "False"], "False", "The third statement is false according to the recording."),
    choice("A4", "4.", ["True", "False"], "True", "The fourth statement is true according to the recording."),
    choice("A5", "5.", ["True", "False"], "True", "The fifth statement is true according to the recording."),
    choice("A6", "6.", ["True", "False"], "False", "The sixth statement is false according to the recording.")
  ]},
  { key: "B", label: "B", title: "Complete the sentences.", note: "Use one word or phrase from the box. One item is not needed.", points: 4, wordBank: ["temperate forests", "cactus", "glides", "arctic", "sloth"], questions: [
    input("B1", "1. The bear sometimes runs and ___ across the ice to reach the other side of the river.", ["glides"], "Glides means moves smoothly across a surface."),
    input("B2", "2. There are ___ in North America, Russia, China, and Japan. They have lots of trees with leaves that change colors in the spring and autumn.", ["temperate forests"], "Temperate forests have seasonal weather and many trees whose leaves change color."),
    input("B3", "3. Polar bears hunt for fish and seals in the ___ where they live.", ["arctic"], "The Arctic is the cold northern region where polar bears live."),
    input("B4", "4. A ___ is a plant that isn't easy to touch. It can hurt your finger if you're not careful.", ["cactus"], "A cactus often has sharp spines, so it can hurt your finger.")
  ]},
  { key: "C", label: "C", title: "Complete the sentences. Then match them to the correct pictures.", note: "Write the missing word, then choose picture a, b, c, or d. The pictures remain in their original order.", points: 8, sectionImage: IMG + "c-picture-strip.png", questions: [
    paired("C1", "1. Plants that can live in the ___ need very little water.", [
      { key: "word", label: "Missing word", type: "input", answers: ["desert"], explanation: "Desert plants are adapted to places with very little water." },
      { key: "match", label: "Picture", type: "choice", options: ["a", "b", "c", "d"], answers: ["a"], explanation: "Picture a shows a desert." }
    ]),
    paired("C2", "2. We saw a cute ___ hanging upside down in the tree.", [
      { key: "word", label: "Missing word", type: "input", answers: ["sloth"], explanation: "A sloth often hangs upside down from tree branches." },
      { key: "match", label: "Picture", type: "choice", options: ["a", "b", "c", "d"], answers: ["d"], explanation: "Picture d shows a sloth." }
    ]),
    paired("C3", "3. Three baby birds will ___ from those eggs.", [
      { key: "word", label: "Missing word", type: "input", answers: ["hatch"], explanation: "Baby birds hatch when they come out of their eggs." },
      { key: "match", label: "Picture", type: "choice", options: ["a", "b", "c", "d"], answers: ["b"], explanation: "Picture b shows eggs in a bird's nest." }
    ]),
    paired("C4", "4. The ___ goes around the center of Earth.", [
      { key: "word", label: "Missing word", type: "input", answers: ["equator"], explanation: "The equator is an imaginary line around the middle of Earth." },
      { key: "match", label: "Picture", type: "choice", options: ["a", "b", "c", "d"], answers: ["c"], explanation: "Picture c shows the equator around Earth." }
    ])
  ]},
  { key: "D", label: "D", title: "Circle the correct answer.", note: "Use since for a starting point and for for a length of time.", points: 4, questions: [
    choice("D1", "1. We have been friends ___ 2006.", ["for", "since"], "since", "2006 is the starting point, so use since."),
    choice("D2", "2. My mother has studied biomes ___ ten years.", ["for", "since"], "for", "Ten years is a duration, so use for."),
    choice("D3", "3. My father has been a teacher ___ a long time.", ["for", "since"], "for", "A long time is a duration, so use for."),
    choice("D4", "4. I have gone to this school ___ September.", ["for", "since"], "since", "September identifies the starting point, so use since.")
  ]},
  { key: "E", label: "E", title: "Complete the sentences for each set of pictures. Use the present perfect.", note: "Use since with the starting time and for with the duration shown under each picture.", points: 4, questions: [
    input("E1", "1a. She / study butterflies / 2003", ["She has studied butterflies since 2003"], "Use has studied with since because 2003 is the starting point.", IMG + "e1a.png"),
    input("E2", "1b. He / study butterflies / five years", ["He has studied butterflies for five years"], "Use has studied with for because five years is a duration.", IMG + "e1b.png"),
    input("E3", "2a. She / talk on the phone / 2:00", ["She has talked on the phone since 2:00", "She has talked on the phone since 2 o'clock"], "Use has talked with since because 2:00 is the starting time.", IMG + "e2a.png"),
    input("E4", "2b. He / talk on the phone / two hours", ["He has talked on the phone for two hours"], "Use has talked with for because two hours is a duration.", IMG + "e2b.png")
  ]},
  { key: "F", label: "F", title: "Combine the sentences.", note: "Write one present-perfect sentence using the word in parentheses.", points: 4, questions: [
    input("F1", "1. We study biomes. We started two weeks ago. (for)", ["We have studied biomes for two weeks"], "The action began two weeks ago and continues now, so use have studied + for two weeks."),
    input("F2", "2. I am on the soccer team. I joined the team in May. (since)", ["I have been on the soccer team since May"], "May is the starting point, so use have been + since May."),
    input("F3", "3. He lives on Main Street. He moved there in 1995. (since)", ["He has lived on Main Street since 1995"], "1995 is the starting point, so use has lived + since 1995."),
    input("F4", "4. My bedroom is blue. I painted it three months ago. (for)", ["My bedroom has been blue for three months"], "Three months is a duration, so use has been + for three months.")
  ]},
  { key: "G", label: "G", title: "Match each sentence to a picture.", note: "Choose picture a, b, c, d, or e. The pictures remain in their original order.", points: 5, sectionImage: IMG + "g-picture-strip.png", questions: [
    choice("G1", "1. Manta rays are shaped like big triangles.", ["a", "b", "c", "d", "e"], "a", "Picture a shows a manta ray."),
    choice("G2", "2. The speedboat went very fast along the water.", ["a", "b", "c", "d", "e"], "d", "Picture d shows a speedboat moving quickly."),
    choice("G3", "3. When you snorkel, you can usually see a lot of fish.", ["a", "b", "c", "d", "e"], "e", "Picture e shows a person snorkeling near a fish."),
    choice("G4", "4. That seahorse is drifting slowly through the water.", ["a", "b", "c", "d", "e"], "c", "Picture c shows a seahorse."),
    choice("G5", "5. Sea turtles have a hard shell and can swim well.", ["a", "b", "c", "d", "e"], "b", "Picture b shows a sea turtle.")
  ]},
  { key: "H", label: "H", title: "Complete the sentences.", note: "Use one word or phrase from the box. One item is not needed.", points: 4, wordBank: ["intelligent", "marine park", "absent", "difference", "border"], questions: [
    input("H1", "1. We learned about protecting the ocean and sea life at the ___.", ["marine park"], "A marine park is a protected ocean area where people can learn about sea life."),
    input("H2", "2. You can help to change things. There are many ways to make a ___ in the world.", ["difference"], "Make a difference means to have a positive effect."),
    input("H3", "3. She is very ___. She has lots of knowledge and can do many different things very well.", ["intelligent"], "Intelligent means able to learn, understand, and think well."),
    input("H4", "4. He was ___ from school because he was sick.", ["absent"], "Absent means not present at a place where someone is expected to be.")
  ]},
  { key: "I", label: "I", title: "Unscramble and match.", note: "Unscramble each word, then choose the matching definition.", points: 8, questions: [
    paired("I1", "1. t e t n o i i p", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["petition"], explanation: "The letters form petition." },
      { key: "match", label: "Definition", type: "choice", options: ["a. the line that separates two countries", "b. a paper you write your name on to help change something people do not like", "c. wrote your name on something, like at the end of a letter", "d. to give someone a very big surprise"], answers: ["b. a paper you write your name on to help change something people do not like"], explanation: "A petition is a written request that people sign to ask for change, so it matches b." }
    ]),
    paired("I2", "2. o s i a n t h s", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["astonish"], explanation: "The letters form astonish." },
      { key: "match", label: "Definition", type: "choice", options: ["a. the line that separates two countries", "b. a paper you write your name on to help change something people do not like", "c. wrote your name on something, like at the end of a letter", "d. to give someone a very big surprise"], answers: ["d. to give someone a very big surprise"], explanation: "Astonish means to surprise someone greatly, so it matches d." }
    ]),
    paired("I3", "3. d r o b r e", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["border"], explanation: "The letters form border." },
      { key: "match", label: "Definition", type: "choice", options: ["a. the line that separates two countries", "b. a paper you write your name on to help change something people do not like", "c. wrote your name on something, like at the end of a letter", "d. to give someone a very big surprise"], answers: ["a. the line that separates two countries"], explanation: "A border is the dividing line between countries, so it matches a." }
    ]),
    paired("I4", "4. i s d e n g", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["signed"], explanation: "The letters form signed." },
      { key: "match", label: "Definition", type: "choice", options: ["a. the line that separates two countries", "b. a paper you write your name on to help change something people do not like", "c. wrote your name on something, like at the end of a letter", "d. to give someone a very big surprise"], answers: ["c. wrote your name on something, like at the end of a letter"], explanation: "Signed means wrote your name on something, so it matches c." }
    ])
  ]},
  { key: "J", label: "J", title: "Look and write sentences. Use the present perfect or simple past.", note: "Use the time expression to decide which tense is needed.", points: 4, questions: [
    input("J1", "1. She / snorkel / yesterday", ["She snorkeled yesterday", "She snorkelled yesterday"], "Yesterday is a finished past time, so use the simple past: snorkeled (US) or snorkelled (UK).", IMG + "j1.png"),
    input("J2", "2. We / already / visit / that beach", ["We have already visited that beach", "We already have visited that beach"], "No finished past time is given. Use the present perfect, placing already between have and visited.", IMG + "j2.png"),
    input("J3", "3. He / hike / in the mountains / last week", ["He hiked in the mountains last week"], "Last week is a finished past time, so use the simple past hiked. The subject in the prompt is He.", IMG + "j3.png"),
    input("J4", "4. I / not see / sea turtles / yet", ["I have not seen sea turtles yet", "I haven't seen sea turtles yet"], "Use the negative present perfect have not seen, with yet at the end.", IMG + "j4.png")
  ]},
  { key: "K", label: "K", title: "Complete the sentences.", note: "Use one word from the box. One item is not needed.", points: 5, wordBank: ["saw", "invited", "learn", "seen", "invite", "learned"], questions: [
    input("K1", "1. I have ___ lots of seahorses in the marine park.", ["seen"], "After have, use the past participle seen."),
    input("K2", "2. You studied hard, but did you ___ everything you needed to?", ["learn"], "After did, use the base form learn."),
    input("K3", "3. I ___ a turtle on the beach yesterday.", ["saw"], "Yesterday requires the simple past saw."),
    input("K4", "4. Have you ___ about sharks in school?", ["learned", "learnt"], "After have, use the past participle learned; learnt is also correct in British English."),
    input("K5", "5. Did you ___ Sarah to your party?", ["invite"], "After did, use the base form invite.")
  ]},
  { key: "L", label: "L", title: "Write the words in the correct order to make questions. Then listen and write the answers.", note: "Make each present-perfect question first, then play the audio and write the short answer.", points: 4, audio: "assets/audio-l.mp3", questions: [
    paired("L1", "1. studied / Have / seahorses / they", [
      { key: "question", label: "Question", type: "input", answers: ["Have they studied seahorses"], explanation: "Use Have + they + past participle studied." },
      { key: "answer", label: "Listening answer", type: "input", answers: ["Yes, they have", "Yes they have"], explanation: "The recording gives the positive short answer: Yes, they have." }
    ]),
    paired("L2", "2. ever / he / manta ray / a / Has / seen", [
      { key: "question", label: "Question", type: "input", answers: ["Has he ever seen a manta ray"], explanation: "Use Has + he + ever + past participle seen." },
      { key: "answer", label: "Listening answer", type: "input", answers: ["No, he hasn't", "No he hasn't", "No, he has not", "No he has not"], explanation: "The recording gives the negative short answer: No, he hasn't." }
    ])
  ]}
];
