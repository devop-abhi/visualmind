import Section from "./common/Section";
import TopicCard from "./TopicCard";
import SectionTitle from "./common/SectionTitle";

const PopularTopics = () => {

  const topics = [
    {
      icon: "🔍",
      title: "Binary Search",
      difficulty: "Easy",
    },
    {
      icon: "📚",
      title: "Stack",
      difficulty: "Easy",
    },
    {
      icon: "🌐",
      title: "BFS Traversal",
      difficulty: "Medium",
    },
    {
      icon: "🧭",
      title: "DFS Traversal",
      difficulty: "Medium",
    },
    {
      icon: "⚡",
      title: "Dijkstra Algorithm",
      difficulty: "Hard",
    },
    {
      icon: "🔗",
      title: "Linked List",
      difficulty: "Easy",
    },
    {
      icon: "🫧",
      title: "Bubble Sort",
      difficulty: "Easy",
    },
    {
      icon: "⚡",
      title: "Quick Sort",
      difficulty: "Medium",
    },
    {
      icon: "🌳",
      title: "Binary Tree",
      difficulty: "Medium",
    },
  ];

  return (

    <Section>

      <SectionTitle
        badge="POPULAR TOPICS"
        title="Start Learning Today"
        subtitle="Choose a topic and explore it through AI-powered explanations, interactive visualizations, and quizzes."
      />

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        mt-14
      ">

        {topics.map((topic, index) => (

          <TopicCard
            key={index}
            icon={topic.icon}
            title={topic.title}
            difficulty={topic.difficulty}
          />

        ))}

      </div>

    </Section>

  );
};

export default PopularTopics;