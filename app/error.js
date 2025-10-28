"use client";

export default function Error({ error, reset }) {
    return (
        <html>
        <body>
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Something went wrong!</h2>
            <p>{error?.message}</p>
            <button
                onClick={() => reset()}
                style={{
                    marginTop: "1rem",
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                }}
            >
                Please try again
            </button>
        </div>
        </body>
        </html>
    );
}
