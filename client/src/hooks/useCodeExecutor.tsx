import { useState } from "react";
import axios from "axios";

export function useCodeRunner() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function run(code: string) {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:8000/api/execute", {
        code,
      });
      setOutput(res.data.stdout || res.data.stderr || "");
    } catch (err) {
      setError("Error connecting to server.");
      setOutput("");
    } finally {
      setLoading(false);
    }
  }

  return { output, loading, error, run };
}
