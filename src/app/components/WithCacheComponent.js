export default async function WithCacheComponent() {
    "use cache"; // Enable caching for this function

    const res = await fetch("http://localhost:3000/api/dummy");
    const data = await res.json();

    return (
        <div>
            <h2>With Cache:</h2>
            <p>Message: {data.message}</p>
            <p>Timestamp: {data.timestamp}</p>
        </div>
    );
}
