import NoCacheComponent from "./components/NoCacheComponent";
import WithCacheComponent from "./components/WithCacheComponent";
import Counter from "@/app/components/Counter";

export default function Home() {
    return (
        <div>
            <h1>Next.js 15 - use cache Example</h1>
            <NoCacheComponent/>
            <WithCacheComponent/><br/>

            <h1>Next.js 15 - use client Example</h1>
            <Counter/><br/>
        </div>
    );
}
