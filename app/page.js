import {Home, Course, Workshop, About, Footer} from "../components";

export default function Page() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Home />
      <Course />
      <Workshop />
      <About />
      <Footer />
    </main>
  );
}
