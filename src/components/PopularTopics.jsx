import Section from "./common/Section";
import TopicCard from "./TopicCard";
import SectionTitle from "./common/SectionTitle";

const PopularTopics = () => {

  const topics = [

    {
      icon: "📊",
      title: "Binary Search",
      difficulty: "Easy",
    },

    {
      icon: "⚙️",
      title: "Deadlock",
      difficulty: "Medium",
    },

    {
      icon: "🌐",
      title: "TCP Handshake",
      difficulty: "Easy",
    },

    {
      icon: "🗄️",
      title: "SQL Join",
      difficulty: "Medium",
    },

    {
      icon: "🧩",
      title: "DFS Traversal",
      difficulty: "Easy",
    },

    {
      icon: "💾",
      title: "CPU Scheduling",
      difficulty: "Hard",
    },

  ];

  return (

    <Section>

     <SectionTitle
  badge="POPULAR TOPICS"
  title="Start Learning Today"
  subtitle="Choose one of our most popular engineering concepts and explore it through AI-powered visual explanations."
/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

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