import Screen from "@/components/Screen";

export default function NotFound() {
  return (
    <Screen>
      <div className="flex w-full h-[90vh] flex-1 items-center justify-center text-slate-400">
        <h1 className="text-xl">404</h1>
        <div className="h-10 w-[1px] bg-slate-400 mx-4"></div>
        <h2 className="text-sm text-gray-500">This page could not be found</h2>
      </div>
    </Screen>
  );
}
