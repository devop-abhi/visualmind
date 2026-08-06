import Section from "./common/Section";
import DomainCard from "./DomainCard";
import SectionTitle from "./common/SectionTitle";

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

const EngineeringDomains = () => {
  return (
    <Section>

      <div className="text-center">

        <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold">
          ENGINEERING FOR EVERYONE
        </span>

       <SectionTitle
  badge="ENGINEERING DOMAINS"
  title="Explore Engineering Domains"
  subtitle="Choose your engineering branch and start learning through interactive AI-generated explanations."
/>

      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-16">
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