import NoCacheComponent from "./components/NoCacheComponent";
import WithCacheComponent from "./components/WithCacheComponent";

export default function Home() {
  return (
      <div>
        <h1>Next.js 15 - use cache Example</h1>
        <NoCacheComponent />
        <WithCacheComponent />
      </div>
  );
}
