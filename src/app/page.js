import ResumeSection from "./components/ResumeSection";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300 overflow-x-hidden">
      <div className="fixed inset-0 bg-white dark:bg-[#121212] -z-10"></div>
      <ThemeToggle />
      <ResumeSection />
    </main>
  );
}
