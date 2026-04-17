/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PracticeTest } from '../types';

export const QUIZ_DATA: Record<number, PracticeTest> = {
  1: {
    id: 1,
    title: "Reading Test 1",
    description: "Remote Work, Biodiversity, Industrial Revolution & Habits",
    badge: "Practice 1",
    badgeColor: "bg-teal-100 text-teal-700",
    questionCount: 40,
    passages: {
      1: {
        title: "Passage 1: Remote Work", startNum: 1,
        questions: [
          { q: "What is the main topic of the passage?", opts: ["The history of office buildings.", "The benefits and challenges of remote work.", "How to use communication software.", "The best cities to live in for workers."], correct: 1 },
          { q: "According to paragraph 1, what was a common belief about productivity in the past?", opts: ["It required high-speed internet.", "It was only possible in rural areas.", "It required direct supervision and face-to-face contact.", "It depended on the type of software used."], correct: 2 },
          { q: "The word 'dismantled' in paragraph 1 is closest in meaning to:", opts: ["Strengthened", "Created", "Removed", "Improved"], correct: 2 },
          { q: "What is mentioned as the most immediate benefit for workers?", opts: ["Getting a higher salary.", "Meeting more people.", "Eliminating the daily commute.", "Moving to a bigger city."], correct: 2 },
          { q: "The word 'reclaiming' in paragraph 2 means:", opts: ["Getting back something that was lost.", "Selling something for a profit.", "Giving away extra time.", "Complaining about a problem."], correct: 0 },
          { q: "How do companies save money through remote work?", opts: ["By paying employees less.", "By reducing rent and utility costs for offices.", "By selling their products online only.", "By hiring only local talent."], correct: 1 },
          { q: "The word 'relocation' in paragraph 3 refers to:", opts: ["Changing a job title.", "Moving to a new place to live or work.", "Buying new office furniture.", "Building a new website."], correct: 1 },
          { q: "What is a 'blurring of boundaries' according to paragraph 4?", opts: ["Not knowing who your boss is.", "The difficulty in separating work life from home life.", "Having too many meetings in one day.", "Using the wrong software for a task."], correct: 1 },
          { q: "What is a disadvantage of remote work mentioned in the text?", opts: ["Increased travel costs.", "Social isolation.", "Lack of talent in the global market.", "Too much time spent sleeping."], correct: 1 },
          { q: "What is the 'hybrid model' mentioned in the final paragraph?", opts: ["Working only from home forever.", "A mix of working in the office and working from home.", "Hiring employees from only one country.", "Working at night and sleeping during the day."], correct: 1 }
        ]
      },
      2: {
        title: "Passage 2: Biodiversity", startNum: 11,
        questions: [
          { q: "Which of the following is the best definition of biodiversity?", opts: ["The study of extinct animals.", "The variety of all living things on Earth.", "A list of all the plants in a forest.", "The way humans build cities."], correct: 1 },
          { q: "According to the passage, how do fungi and bacteria contribute to the ecosystem?", opts: ["By pollinating flowers.", "By providing food for bees.", "By returning nutrients to the soil.", "By cleaning the air in cities."], correct: 2 },
          { q: "The word 'resilient' in paragraph 1 is closest in meaning to:", opts: ["Weak and fragile.", "Able to recover quickly.", "Beautiful and colorful.", "Very large in size."], correct: 1 },
          { q: "What is identified as the most significant threat to biodiversity?", opts: ["Plastic waste.", "Habitat loss.", "Lack of education.", "Medicine production."], correct: 1 },
          { q: "The phrase 'nowhere else to go' in paragraph 2 suggests that:", opts: ["Animals like to travel long distances.", "Animals are restricted by human-made borders.", "Species cannot survive without their specific habitats.", "Most animals prefer living in cities."], correct: 2 },
          { q: "Why are polar bears mentioned in paragraph 3?", opts: ["To show how animals adapt to hot weather.", "As an example of a species affected by climate change.", "To explain why they are the most dangerous animals.", "To prove that sea ice is actually growing."], correct: 1 },
          { q: "What is happening to coral reefs?", opts: ["They are growing faster because of the warm water.", "They are becoming the main source of plastic waste.", "They are dying due to rising temperatures and acidity.", "They are being used to build new roads."], correct: 2 },
          { q: "The word 'acidic' in paragraph 3 is used to describe:", opts: ["The temperature of the forest.", "A change in the chemistry of the ocean.", "The way polar bears hunt.", "A type of medicine found in plants."], correct: 1 },
          { q: "According to the passage, why is biodiversity important for human health?", opts: ["It helps people exercise more.", "It is a source of many important medicines.", "It makes the air smell better.", "It provides materials for building houses."], correct: 1 },
          { q: "What is the author's tone in the final paragraph?", opts: ["Angry and hopeless.", "Encouraging and call-to-action.", "Bored and uninterested.", "Confused and uncertain."], correct: 1 }
        ]
      },
      3: {
        title: "Passage 3: Industrial Revolution", startNum: 21,
        questions: [
          { q: "When and where did the Industrial Revolution begin?", opts: ["Late 19th century in America.", "Late 18th century in Great Britain.", "Early 20th century in Europe.", "Middle of the 17th century in Asia."], correct: 1 },
          { q: "Before the Industrial Revolution, how did most people make a living?", opts: ["By working in large factories.", "Through farming and handcrafts.", "By trading stocks and bonds.", "Through scientific research."], correct: 1 },
          { q: "Why was James Watt's steam engine so important?", opts: ["It was the first engine to use electricity.", "It allowed factories to be located away from rivers.", "It was used primarily for gardening.", "It made farming much more difficult."], correct: 1 },
          { q: "The word 'spurred' in paragraph 2 is closest in meaning to:", opts: ["Delayed", "Encouraged", "Stopped", "Ignored"], correct: 1 },
          { q: "What does the term 'urbanization' refer to in paragraph 3?", opts: ["The process of people moving from cities to farms.", "The growth of small-scale handcrafts.", "The movement of people from the countryside to cities.", "The building of new rivers for transportation."], correct: 2 },
          { q: "What were the conditions like in early industrial cities?", opts: ["Clean and spacious.", "Overcrowded and unsanitary.", "Quiet and peaceful.", "Very expensive to live in."], correct: 1 },
          { q: "The word 'endured' in paragraph 3 means:", opts: ["Enjoyed", "Suffered through", "Avoided", "Finished quickly."], correct: 1 },
          { q: "Why did labor unions begin to form?", opts: ["To help people move back to the countryside.", "To demand better conditions and fairer wages.", "To protest against the use of steam engines.", "To build more factories in cities."], correct: 1 },
          { q: "What was a positive long-term effect of the Industrial Revolution?", opts: ["An increase in the price of clothing.", "The elimination of all diseases.", "An increased standard of living and affordable goods.", "The reduction of city populations."], correct: 2 },
          { q: "What is mentioned as a negative legacy of this period?", opts: ["The lack of educational opportunities.", "The start of large-scale environmental pollution.", "The decline of the middle class.", "The invention of steamships."], correct: 1 }
        ]
      },
      4: {
        title: "Passage 4: Habits", startNum: 31,
        questions: [
          { q: "How do psychologists define a habit?", opts: ["A rare behavior.", "A behavior that has become automatic.", "Something only when tired.", "A creative idea."], correct: 1 },
          { q: "The word 'architecture' in paragraph 1 means:", opts: ["Building design.", "Underlying structure of lives.", "Career in construction.", "History of psychology."], correct: 1 },
          { q: "What are the three parts of the 'habit loop'?", opts: ["Planning, Action, Result.", "Cue, Routine, Reward.", "Morning, Afternoon, Night.", "Start, Middle, End."], correct: 1 },
          { q: "Which of the following could be a 'cue'?", opts: ["Eating a salad.", "Feeling stressed.", "Brushing teeth.", "Going for a run."], correct: 1 },
          { q: "The word 'distinguish' in paragraph 3 means:", opts: ["To tell the difference.", "To make famous.", "To forget.", "To improve."], correct: 0 },
          { q: "Why are habits beneficial for the brain?", opts: ["More emotional.", "Save energy for complex tasks.", "Prevent sleeping too much.", "Physical strength."], correct: 1 },
          { q: "According to the text, why is it hard to stop a habit?", opts: ["No desire.", "Neural pathways are ingrained.", "No rewards.", "Little willpower."], correct: 1 },
          { q: "What is the 'Golden Rule' of habit change?", opts: ["Stop immediately.", "Change cue.", "Keep cue/reward, change routine.", "Ignore cue."], correct: 2 },
          { q: "The word 'ingrained' in paragraph 4 means:", opts: ["Temporary.", "Deeply fixed.", "New.", "Easily changed."], correct: 1 },
          { q: "How long does it take to form a new habit?", opts: ["Exactly 21 days.", "Between 18 and 254 days.", "No more than a week.", "Instantly."], correct: 1 }
        ]
      }
    }
  },
  2: {
    id: 2,
    title: "Reading Test 2",
    description: "Wildlife Centre, Motorbike Trip, Arctic Research & Helen Skelton",
    badge: "Practice 2",
    badgeColor: "bg-blue-100 text-blue-700",
    questionCount: 40,
    passages: {
      1: {
        title: "Passage 1: Wildlife Centre", startNum: 1,
        questions: [
          { q: "What was Greg’s opinion of the building?", opts: ["Poorly designed.", "Impressive and beautiful.", "Too small.", "Old and unattractive."], correct: 1 },
          { q: "Why did Julie criticise the design?", opts: ["Not enough animals.", "Too dark.", "Difficult stairs.", "Too expensive."], correct: 2 },
          { q: "In paragraph 2, 'they' refers to:", opts: ["People", "Glass walls", "Sharks", "Visitors"], correct: 2 },
          { q: "How did Julie feel about the sharks?", opts: ["Harmless.", "Frightening.", "Wanted to swim.", "Ignored."], correct: 1 },
          { q: "Why was the temperature high?", opts: ["For visitors.", "For insects.", "For tropical trees.", "Humidity."], correct: 2 },
          { q: "Why were tree frogs difficult to find?", opts: ["Locked away.", "Under water.", "Blended in.", "Night only."], correct: 2 },
          { q: "The word “clever” means:", opts: ["Quick", "Smart", "Difficult", "Strange"], correct: 1 },
          { q: "Why did Julie think frogs hid well?", opts: ["Surprise visitors.", "Avoid birds.", "Cold weather.", "Hide from staff."], correct: 1 },
          { q: "What was Julie’s idea about visiting again?", opts: ["Immediately.", "Different centre.", "Learn more first.", "Never."], correct: 2 },
          { q: "Which is true according to the passage?", opts: ["Difficult to navigate.", "Enjoyed heat like jungle.", "Frightened in basement.", "Disappointed by insects."], correct: 1 }
        ]
      },
      2: {
        title: "Passage 2: Motorbike Trip", startNum: 11,
        questions: [
          { q: "Why did Graham enjoy first rides?", opts: ["New bike.", "Luke made them enjoyable.", "Loved bikes.", "Long rides."], correct: 1 },
          { q: "What did Luke say about the club ride?", opts: ["Safe.", "Short.", "Show good and difficult sides.", "Better alone."], correct: 2 },
          { q: "What problem did Tania have?", opts: ["Lost.", "Engine failed.", "No fuel.", "Accident."], correct: 1 },
          { q: "The word “her” refers to:", opts: ["Leader", "Graham", "Tania", "Luke"], correct: 2 },
          { q: "How did Tania deal with it?", opts: ["Waited for mechanic.", "Continued riding.", "Went home alone.", "Went by bus."], correct: 2 },
          { q: "What did Graham think about Tania’s decision?", opts: ["Act same way.", "Doubted his confidence.", "Mistake.", "Angry."], correct: 1 },
          { q: "The word “insisted” means:", opts: ["Suggested", "Wondered", "Demanded", "Shouted"], correct: 2 },
          { q: "Why was Luke upset on the mountain?", opts: ["Tired.", "Angry with Graham.", "Route easy.", "Dangerous weather."], correct: 3 },
          { q: "Graham's decision after trip:", opts: ["Never ride.", "Join another club.", "Buy immediately.", "Save money to buy."], correct: 3 },
          { q: "Main idea of the passage:", opts: ["Safe preparation.", "Challenging trip.", "Weather importance.", "Leaders should listen."], correct: 1 }
        ]
      },
      3: {
        title: "Passage 3: Arctic Research", startNum: 21,
        questions: [
          { q: "Arriving in Canada, scientists:", opts: ["Found station.", "Built lab.", "Hotel.", "Ship."], correct: 1 },
          { q: "Seawater testing was special because:", opts: ["Summer.", "New ships.", "First time under ice in winter.", "North Pole only."], correct: 2 },
          { q: "Why collect samples?", opts: ["Fish.", "Climate change.", "Tourism.", "River water."], correct: 1 },
          { q: "Paragraph 3: 'its' refers to:", opts: ["Expedition", "Seawater", "Ice", "Equipment"], correct: 1 },
          { q: "Paragraph 5: 'penetrate' means:", opts: ["Freeze.", "Break.", "Pass deeply through.", "Disappear."], correct: 2 },
          { q: "How did Ann cope with cold?", opts: ["Easy.", "Avoided outside.", "Continued working.", "New method."], correct: 2 },
          { q: "Result of journey:", opts: ["Failed.", "Stopped before target.", "Successful.", "Rescue."], correct: 2 },
          { q: "Helen's attitude to winter:", opts: ["Simple.", "Challenging.", "Refused.", "Preferred."], correct: 1 },
          { q: "Results of expedition:", opts: ["Secret.", "Lost.", "Published.", "Shared local."], correct: 2 },
          { q: "What is the best title for the passage?", opts: ["Polar Bears.", "Building Lab.", "Groundbreaking Expedition.", "Ann Daniels."], correct: 2 }
        ]
      },
      4: {
        title: "Passage 4: Helen Skelton", startNum: 31,
        questions: [
          { q: "What is TRUE about previous challenges?", opts: ["South Pole.", "Marathon in desert.", "Amazon swimming.", "Circus."], correct: 1 },
          { q: "“Unpredictable” means:", opts: ["Dangerous", "Changeable", "Powerful", "Slow"], correct: 1 },
          { q: "What is TRUE about high-wire walk?", opts: ["Net.", "66m tall.", "Balancing pole.", "Calm weather."], correct: 2 },
          { q: "Main purpose of paragraph 3:", opts: ["Feelings.", "Preparation.", "Compare with desert.", "Location."], correct: 1 },
          { q: "Which is NOT mentioned according to the passage?", opts: ["Steep hill.", "Strength.", "Wire practice.", "Swimming."], correct: 3 },
          { q: "On the high wire, Helen:", opts: ["Sorry it ended.", "Perfect weather.", "Less time.", "Managed to keep calm."], correct: 3 },
          { q: "Paragraph 4: 'it' refers to:", opts: ["Wind", "Training", "150m crossing", "Power station"], correct: 2 },
          { q: "“Undeterred” means:", opts: ["Discouraged", "Frightened", "Not prevented", "Surprised"], correct: 2 },
          { q: "Writer's purpose:", opts: ["Introduce presenter.", "Charity support.", "Describe achievement.", "Recommend TV."], correct: 2 },
          { q: "Best title for the passage:", opts: ["Career.", "Circus Training.", "Extreme Charity Challenges.", "Dangers."], correct: 2 }
        ]
      }
    }
  },
  3: {
    id: 3,
    title: "Reading Test 3",
    description: "Desert Survival, Blood Donation, Skateboarding Australia & True Friendship",
    badge: "Practice 3",
    badgeColor: "bg-orange-100 text-orange-700",
    questionCount: 40,
    passages: {
      1: {
        title: "Passage 1: Desert Survival", startNum: 1,
        questions: [
          { q: "What is the purpose of the passage?", opts: ["To describe how desert mammals survive in a hot environment.", "To compare the desert with a forest environment.", "To explain why desert animals cannot handle extreme heat.", "To discuss the evolution of desert mammals over time."], correct: 0 },
          { q: "The word “cope with” in paragraph 1 is closest in meaning to:", opts: ["avoid", "survive", "deal with", "escape"], correct: 2 },
          { q: "How do long limbs help mammals in the desert?", opts: ["They help the animal run faster to find food.", "They increase the surface area for heat loss.", "They allow the animal to store more fat.", "They help the animal find water deep in the ground."], correct: 1 },
          { q: "According to the passage, specialized blood vessel systems:", opts: ["protect internal organs from overheating.", "increase the body temperature of the animal.", "help the animal store more oxygen.", "allow the animal to move faster across the sand."], correct: 0 },
          { q: "The phrase “such behavior” in paragraph 2 refers to:", opts: ["sweating and panting.", "standing in the direct sun.", "resting in the shade during the hottest part of the day.", "cooling down quickly at night."], correct: 2 },
          { q: "Why do some desert animals sweat less than humans?", opts: ["They do not have sweat glands.", "They must prevent excessive water loss from their bodies.", "They do not feel the heat as much as humans do.", "They use other methods like cooling down in water."], correct: 1 },
          { q: "The word “fluctuations” in paragraph 3 is closest in meaning to:", opts: ["increases", "decreases", "changes", "controls"], correct: 2 },
          { q: "According to the passage, how do humans differ from many desert mammals?", opts: ["Humans depend heavily on sweating to stay cool.", "Humans can store more water in their bodies.", "Humans have more concentrated urine than desert mammals.", "Humans are primarily active at night."], correct: 0 },
          { q: "Which of the following is NOT mentioned as an adaptation for saving water?", opts: ["Concentrated urine.", "Dry feces.", "Avoiding sweating.", "Storing water in body humps."], correct: 3 },
          { q: "The final paragraph suggests that survival in the desert is the result of:", opts: ["only one specific physical adaptation.", "behavioral changes only.", "a combination of physical and behavioral adaptations.", "an easy process for all animals."], correct: 2 }
        ]
      },
      2: {
        title: "Passage 2: Blood Donation", startNum: 11,
        questions: [
          { q: "The word “donated” in paragraph 1 is closest in meaning to:", opts: ["bought", "taken", "sold", "given"], correct: 3 },
          { q: "The phrase “this blood” in paragraph 1 refers to:", opts: ["the blood needed for accidents.", "the blood given by donors.", "the blood stored in hospitals.", "the blood used in surgery."], correct: 1 },
          { q: "How often can a person usually donate red blood cells?", opts: ["Every two months.", "Every month.", "Every three months.", "Once a year."], correct: 0 },
          { q: "According to the passage, what is used to prevent blood from clotting?", opts: ["A special separation process.", "The needle used during donation.", "A solution containing sodium citrate.", "The force of gravity."], correct: 2 },
          { q: "How long does a typical blood transfusion take?", opts: ["30 minutes.", "One hour.", "Two hours.", "Three hours."], correct: 2 },
          { q: "Which of the following is NOT mentioned as a possible problem during transfusion?", opts: ["Allergic reactions.", "Air bubbles in the blood.", "Receiving too much blood.", "Broken bones."], correct: 3 },
          { q: "The word “rare” in paragraph 3 is closest in meaning to:", opts: ["not frequent", "serious", "common", "dangerous"], correct: 0 },
          { q: "Why do hospitals test the blood before a transfusion?", opts: ["To make the blood flow faster.", "To prevent the spread of diseases.", "To separate the red blood cells.", "To reduce the risk of clotting."], correct: 1 },
          { q: "What happens to blood intended for newborn babies?", opts: ["It is frozen immediately.", "It is mixed with special medicine.", "It is exposed to a small amount of radiation.", "It is used without any testing."], correct: 2 },
          { q: "What is the main benefit of modern blood storage and transfusion?", opts: ["It reduces the chance of allergic reactions.", "It makes it easier for people to donate.", "It ensures that all blood is free from infection.", "It allows doctors to treat patients whenever blood is needed."], correct: 3 }
        ]
      },
      3: {
        title: "Passage 3: Skateboarding Australia", startNum: 21,
        questions: [
          { q: "Why did Dave decide to skateboard across Australia?", opts: ["He was unhappy with his job as a graphic designer.", "He wanted to become famous.", "He was a professional skateboarder looking for a challenge.", "His friends challenged him to do it."], correct: 0 },
          { q: "The word “challenge” in paragraph 1 is closest in meaning to:", opts: ["job", "adventure", "competition", "problem"], correct: 1 },
          { q: "Dave's training in Britain was:", opts: ["successful but painful.", "very easy and required little effort.", "completely unsuccessful.", "much shorter than planned."], correct: 0 },
          { q: "According to the passage, what caused Dave to fall on the first day in Australia?", opts: ["Heavy rain.", "Wild animals.", "The wind from passing trucks.", "A mechanical problem with his skateboard."], correct: 2 },
          { q: "How did Dave feel during the difficult moments of the trip?", opts: ["He decided to stop the trip early.", "He thought about quitting but continued anyway.", "He asked his team to carry him for a while.", "He wanted to go home immediately."], correct: 1 },
          { q: "Where did Dave and his team sleep during the journey?", opts: ["In local hotels.", "In their support vehicle.", "In camping equipment they brought with them.", "In the houses of local people."], correct: 2 },
          { q: "Why did Dave fall off his skateboard near the end of the journey?", opts: ["He was going too fast.", "He hit a hole in the road.", "He was too tired to continue.", "The weather was too hot."], correct: 1 },
          { q: "Why did Dave decide to go surfing after the trip?", opts: ["To use his upper body strength.", "To relax after the long journey.", "To celebrate with his friends.", "To stay with his support team."], correct: 0 },
          { q: "What are Dave's future plans?", opts: ["To return to his job as a graphic designer.", "To travel the world quietly.", "To enter a skateboarding race immediately.", "To encourage others and write a book about his experience."], correct: 3 },
          { q: "Which of the following is TRUE about Dave's journey?", opts: ["He had been skateboarding since he was a child.", "He completed the journey alone.", "He set a world record for the longest skateboarding journey.", "He suffered no injuries during the trip."], correct: 2 }
        ]
      },
      4: {
        title: "Passage 4: Brendan and Tip", startNum: 31,
        questions: [
          { q: "Tip is Brendan’s:", opts: ["brother", "dog", "classmate", "neighbor"], correct: 1 },
          { q: "According to the passage, owning a dog helps children develop:", opts: ["responsibility", "empathy", "friendship skills", "All of the above"], correct: 3 },
          { q: "A dog depends on its owner for:", opts: ["food and safety", "schoolwork", "money", "toys"], correct: 0 },
          { q: "According to the passage, owning a dog helps a child develop all of the following qualities EXCEPT:", opts: ["responsibility", "empathy", "patience", "independence"], correct: 3 },
          { q: "The word “empathy” is closest in meaning to:", opts: ["sympathy", "anger", "independence", "confidence"], correct: 0 },
          { q: "Children learn empathy by:", opts: ["teaching the dog tricks", "understanding the dog’s behavior", "playing video games", "feeding the dog once a week"], correct: 1 },
          { q: "The word “He” in paragraph 4 (“He stays loyal and supportive no matter what happens.”) refers to:", opts: ["Brendan", "Tip", "the owner", "a friend"], correct: 1 },
          { q: "Where can the following sentence best be placed? “One of the greatest lessons a dog teaches is the meaning of true friendship.”", opts: ["At the beginning of paragraph 1", "At the beginning of paragraph 2", "At the beginning of paragraph 3", "At the beginning of paragraph 4"], correct: 2 },
          { q: "Which of the following is NOT mentioned as a benefit?", opts: ["Responsibility", "Empathy", "Neglect", "Loyalty"], correct: 2 },
          { q: "What is the main idea of the passage?", opts: ["Dogs are better than people.", "Children should not own pets.", "Dogs are easy to take care of.", "Owning a dog helps children develop important life skills."], correct: 3 }
        ]
      }
    }
  }
};

