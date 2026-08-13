import Section from "./common/Section";
import DomainCard from "./DomainCard";
import SectionTitle from "./common/SectionTitle";

const EngineeringDomains = () => {
  const domains = [
    {
      icon: "💻",
      title: "Computer Science",
      topics: [
        "Data Structures",
        "Operating Systems",
        "DBMS",
        "Computer Networks",
      ],
    },

    {
      icon: "⚡",
      title: "Electrical",
      topics: [
        "Circuit Analysis",
        "Power Systems",
        "Electrical Machines",
        "Control Systems",
      ],
    },

    {
      icon: "⚙️",
      title: "Mechanical",
      topics: [
        "Thermodynamics",
        "Fluid Mechanics",
        "Machine Design",
        "Manufacturing",
      ],
    },

    {
      icon: "📡",
      title: "Electronics",
      topics: [
        "Digital Electronics",
        "Microprocessors",
        "Embedded Systems",
        "Communication",
      ],
    },
  ];

  return (
    <Section>

      <SectionTitle
        badge="ENGINEERING DOMAINS"
        title="Explore Engineering Domains"
        subtitle="Explore different engineering branches and learn complex concepts through AI-powered explanations and interactive learning."
      />

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          lg:gap-8
          mt-14
        "
      >

        {domains.map((domain, index) => (
          <DomainCard
            key={index}
            icon={domain.icon}
            title={domain.title}
            topics={domain.topics}
          />
        ))}

      </div>

    </Section>
  );
};

export default EngineeringDomains;