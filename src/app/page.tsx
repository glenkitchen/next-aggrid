import SimpleAgGrid from "@/components/aggrid/simple-aggrid";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh] w-screen max-w-7xl">
      <SimpleAgGrid />
    </div>
  );
}
