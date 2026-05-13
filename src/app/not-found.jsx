"use client";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [joke, setJoke] = useState({
    setup: "Loading a fresh joke...",
    punchline: "",
  });
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=twopart",
      );
      const data = await res.json();
      setJoke({ setup: data.setup, punchline: data.delivery });
    } catch {
      setJoke({
        setup: "Why did the API call fail?",
        punchline: "Because even jokes have a 404 sometimes.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div
      style={{
        background: "#1c1c1a",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 2rem",
        textAlign: "center",
        fontFamily: "Georgia, serif",
      }}
    >
      <p
        style={{
          fontSize: ".7rem",
          letterSpacing: ".25em",
          textTransform: "uppercase",
          color: "#c89a45",
          marginBottom: "1rem",
        }}
      >
        404 · page not found
      </p>
      <div
        style={{
          fontSize: "8rem",
          fontWeight: 300,
          color: "#2f2f28",
          lineHeight: 1,
        }}
      >
        404
      </div>
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 300,
          color: "#f5f2ea",
          fontStyle: "italic",
          margin: "1rem 0 .8rem",
        }}
      >
        Oops. Even my model couldn't predict this.
      </h1>
      <p
        style={{
          fontSize: ".9rem",
          fontWeight: 300,
          color: "rgba(245,242,234,.45)",
          maxWidth: "420px",
          lineHeight: 1.8,
          margin: "0 0 .5rem",
          opacity: loading ? 0.4 : 1,
          transition: "opacity .3s",
        }}
      >
        {joke.setup}
      </p>
      <p
        style={{
          fontSize: ".95rem",
          color: "#8a9e7a",
          fontStyle: "italic",
          margin: ".5rem 0 2rem",
          maxWidth: "420px",
          opacity: loading ? 0.4 : 1,
          transition: "opacity .3s",
        }}
      >
        {joke.punchline}
      </p>
      <button
        onClick={fetchJoke}
        style={{
          fontSize: ".68rem",
          letterSpacing: ".12em",
          textTransform: "uppercase",
          padding: ".5rem 1.2rem",
          border: "1px solid rgba(200,154,69,.3)",
          background: "transparent",
          color: "#c89a45",
          cursor: "pointer",
          marginBottom: "2rem",
          fontFamily: "Georgia, serif",
        }}
      >
        another joke →
      </button>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="/monika-web.html"
          style={{
            fontSize: ".72rem",
            letterSpacing: ".12em",
            textTransform: "uppercase",
            padding: ".75rem 1.8rem",
            background: "#5a6e4a",
            color: "#f5f2ea",
            textDecoration: "none",
          }}
        >
          Take me home
        </a>
        <a
          href="/monika-data.html"
          style={{
            fontSize: ".72rem",
            letterSpacing: ".12em",
            textTransform: "uppercase",
            padding: ".75rem 1.8rem",
            border: "1px solid rgba(255,255,255,.15)",
            color: "rgba(245,242,234,.6)",
            textDecoration: "none",
          }}
        >
          Data science side →
        </a>
      </div>
      <p
        style={{
          fontSize: ".7rem",
          fontFamily: "monospace",
          color: "rgba(245,242,234,.2)",
          marginTop: "2rem",
        }}
      >
        monikashakya.com.np/????
      </p>
    </div>
  );
}
