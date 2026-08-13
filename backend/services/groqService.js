import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Decide visualization ourselves instead of trusting AI
const getVisualization = (topic) => {
  const normalizedTopic = topic
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // Searching
  if (
    normalizedTopic.includes("binary search")
  ) {
    return "binary_search";
  }

  if (
    normalizedTopic === "linear search" ||
    normalizedTopic.includes("linear search algorithm")
  ) {
    return "linear_search";
  }

  // Sorting
  if (
    normalizedTopic.includes("bubble sort")
  ) {
    return "bubble_sort";
  }

  if (
    normalizedTopic.includes("quick sort") ||
    normalizedTopic.includes("quicksort")
  ) {
    return "quick_sort";
  }

  // Data Structures
  if (
    normalizedTopic === "stack" ||
    normalizedTopic.includes("stack data structure")
  ) {
    return "stack";
  }

  if (
    normalizedTopic.includes("linked list") ||
    normalizedTopic.includes("linkedlist")
  ) {
    return "linked_list";
  }

  if (
    normalizedTopic.includes("heap") ||
    normalizedTopic.includes("priority queue") ||
    normalizedTopic.includes("min heap") ||
    normalizedTopic.includes("max heap")
  ) {
    return "heap";
  }

  if (
    normalizedTopic.includes("hash table") ||
    normalizedTopic.includes("hashing") ||
    normalizedTopic.includes("hash map") ||
    normalizedTopic.includes("hashmap")
  ) {
    return "hash_table";
  }

  if (
    normalizedTopic === "binary tree" ||
    normalizedTopic.includes("binary search tree") ||
    normalizedTopic === "bst"
  ) {
    return "binary_tree";
  }

  // Graph Algorithms
if (
  normalizedTopic === "bfs" ||
  normalizedTopic.includes("bfs traversal") ||
  normalizedTopic.includes("breadth first search") ||
  normalizedTopic.includes("breadth first traversal")
) {
  return "bfs";
}

if (
  normalizedTopic === "dfs" ||
  normalizedTopic.includes("dfs traversal") ||
  normalizedTopic.includes("depth first search") ||
  normalizedTopic.includes("depth first traversal")
) {
  return "dfs";
}

  if (
    normalizedTopic.includes("dijkstra")
  ) {
    return "dijkstra";
  }

  // Other existing visualizations
  if (
    normalizedTopic.includes("banker") ||
    normalizedTopic.includes("bankers algorithm") ||
    normalizedTopic.includes("deadlock avoidance") ||
    normalizedTopic.includes("resource allocation safety")
  ) {
    return "bankers_algorithm";
  }

  if (
    normalizedTopic.includes("b tree") ||
    normalizedTopic.includes("b plus tree") ||
    normalizedTopic.includes("b tree indexing")
  ) {
    return "b_plus_tree";
  }

  if (
    normalizedTopic === "lru" ||
    normalizedTopic.includes("lru page replacement") ||
    normalizedTopic.includes("least recently used")
  ) {
    return "lru";
  }

 if (
  normalizedTopic.includes("tcp 3 way handshake") ||
  normalizedTopic.includes("tcp handshake") ||
  normalizedTopic.includes("three way handshake") ||
  normalizedTopic.includes("tcp connection establishment")
) {
  return "tcp_handshake";
}

// OSI Model
if (
  normalizedTopic.includes("osi model") ||
  normalizedTopic.includes("osi layer") ||
  normalizedTopic.includes("osi layers") ||
  normalizedTopic.includes("open systems interconnection")
) {
  return "osi_model";
}

  return "none";
};


export const generateExplanation = async (topic) => {
  try {

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [

        {
          role: "system",

          content: `
You are an expert engineering professor.

You explain engineering concepts clearly and simply.

IMPORTANT:

Return ONLY valid JSON.

Do NOT use Markdown.

Do NOT use code fences.

Do NOT write \`\`\`json.

Do NOT write any text before or after the JSON.

Use exactly this structure:

{
  "title": "",
  "explanation": "",
  "keyPoints": [
    "",
    "",
    ""
  ],
  "timeComplexity": "",
  "spaceComplexity": "",
  "realWorldExample": "",
  "quiz": [
    {
      "question": "",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "answer": ""
    },
    {
      "question": "",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "answer": ""
    },
    {
      "question": "",
      "options": [
        "",
        "",
        "",
        ""
      ],
      "answer": ""
    }
  ]
}

QUIZ RULES:

1. You MUST generate exactly 3 quiz questions.

2. The quiz array MUST contain exactly 3 objects.

3. Each question must have exactly 4 options.

4. Each question must have exactly one correct answer.

5. The "answer" field must exactly match one of the four options.

6. All 3 questions must be different.

7. Questions should test different aspects of the topic.

8. Do not repeat the same question.

9. Never return only 1 question.

10. Never return only 2 questions.

11. Never return more than 3 questions.

12. The questions should be appropriate for an engineering student.

13. Questions should be based specifically on the requested topic.

Do not include a visualization field.

The response must be pure JSON.
`,

        },

        {
          role: "user",

          content: `Explain the engineering topic: ${topic}`,

        },

      ],

      temperature: 0.4,

    });


    let content =
      response.choices[0].message.content;


    console.log("RAW GROQ RESPONSE:");

    console.log(content);


    // Remove code fences if Groq adds them

    content = content
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();


    const data = JSON.parse(content);


    // Make sure exactly 3 quiz questions exist

    if (
      !Array.isArray(data.quiz) ||
      data.quiz.length !== 3
    ) {

      throw new Error(
        `AI returned ${
          data.quiz?.length || 0
        } quiz questions. Expected exactly 3.`
      );

    }


    // Make sure every question has exactly 4 options

    data.quiz.forEach((question, index) => {

      if (
        !Array.isArray(question.options) ||
        question.options.length !== 4
      ) {

        throw new Error(
          `Quiz question ${
            index + 1
          } does not contain exactly 4 options.`
        );

      }

    });


    // Decide visualization locally

    data.visualization =
      getVisualization(topic);


    console.log(
      "TOPIC:",
      topic
    );


    console.log(
      "VISUALIZATION:",
      data.visualization
    );


    console.log(
      "QUIZ QUESTIONS:",
      data.quiz.length
    );


    return data;


  } catch (error) {

    console.error(
      "Groq Error:",
      error
    );

    throw error;

  }
};