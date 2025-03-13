import NoCacheComponent from "./components/NoCacheComponent";
import WithCacheComponent from "./components/WithCacheComponent";
import Counter from "@/app/components/Counter";
import ClientComponent from "@/app/components/ClientComponent";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
    return (
        <div>
            <h1>Next.js 15 - use cache Example</h1>
            <NoCacheComponent/>
            <WithCacheComponent/><br/>

            <h1>Next.js 15 - use client Example</h1>
            <Counter/><br/>

            <h1>Next.js 15 - use server Example</h1>
            <ClientComponent/><br/>

            <h1>Next.js 15 - Optimized Image</h1>
            <Image
                src="/images/nature.webp"
                width={300}
                height={150}
                alt="Nature Logo"
                priority // Loads image faster
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            /><br/>

            <h1>Next.js 15 - Fast Navigation</h1>
            <Link href="/about">
                <button>Go to About Page</button>
            </Link><br/>

            <h1>Next.js 15 - Third-Party Script</h1>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
                strategy="afterInteractive" // Loads script after page loads
            />
        </div>
    );
}
