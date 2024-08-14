import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsTable from "@/components/ProjectsTable";
import Screen from "@/components/Screen";

export default function Projects() {
  return (
    <Screen>
      <div className="flex relative flex-col w-full py-4 lg:py-24 px-4 lg:px-0">
        <ProjectsHeader />
        <ProjectsTable />
      </div>
    </Screen>
  );
}
