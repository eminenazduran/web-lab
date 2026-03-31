export default function Skills() {
  const skills = [
    "React", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Git & GitHub", "Vite"
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Yeteneklerim
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-white dark:bg-gray-800 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800 px-4 py-2 rounded-full font-medium shadow-sm transition-transform hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
