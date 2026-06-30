import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { toast } from "react-hot-toast";

import EditorToolbar from "./EditorToolbar";
import Console from "./Console";

import VerdictModal from "../submissions/VerdictModal";
import AIResponseCard from "../ai/AIResponseCard";

import { runCode } from "../../services/codeService";
import { submitSolution } from "../../services/submissionService";
import {
  getAIHint,
  explainCode,
  findBugs,
} from "../../services/aiService";

const CodeEditor = ({ starterCode, problemId }) => {
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  const [verdict, setVerdict] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [aiResponse, setAiResponse] = useState("");
  const [showAI, setShowAI] = useState(false);
  const [aiTitle, setAiTitle] = useState("💡 AI Hint");

  useEffect(() => {
    setCode(starterCode);
  }, [starterCode]);

  const handleReset = () => {
    setCode(starterCode);
    setOutput("");
  };

  const handleRun = async () => {
    try {
      setLoading(true);

      const result = await runCode(code);

      if (result.stdout) {
        setOutput(result.stdout);
      } else if (result.stderr) {
        setOutput(result.stderr);
      } else if (result.compile_output) {
        setOutput(result.compile_output);
      } else {
        setOutput(result.status.description);
      }
    } catch (error) {
      setOutput("Execution Failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);

      const response = await submitSolution({
        problemId,
        code,
      });

      setVerdict(response.data);

      setOpenModal(true);

      toast.success("Solution Submitted!");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Submission Failed"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleHint = async () => {
    try {
      setAiLoading(true);

      const response = await getAIHint(problemId);

      setAiResponse(response.data);

      setAiTitle("💡 AI Hint");

      setShowAI(true);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to generate AI Hint."
      );
    } finally {
      setAiLoading(false);
    }
  };

  const handleExplain = async () => {
  try {
    setAiLoading(true);

    const response = await explainCode(problemId, code);

    setAiResponse(response.data);
    setAiTitle("📖 Code Explanation");

    setShowAI(true);
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
        "Failed to explain code."
    );
  } finally {
    setAiLoading(false);
  }
};

const handleFindBugs = async () => {
  try {
    setAiLoading(true);

    const response = await findBugs(problemId, code);

    setAiTitle("🐞 Bug Analysis");

    setAiResponse(response.data);

    setAiTitle("🐞 Bug Analysis");

    setShowAI(true);
  } catch (error) {
    toast.error(
      error.response?.data?.message ||
        "Failed to analyze code."
    );
  } finally {
    setAiLoading(false);
  }
};
  return (
    <>
      <div className="rounded-xl overflow-hidden border border-white/10">
<EditorToolbar
  language={language}
  setLanguage={setLanguage}
  onRun={handleRun}
  onSubmit={handleSubmit}
  onHint={handleHint}
  onExplain={handleExplain}
  onFindBugs={handleFindBugs}
  onReset={handleReset}
  loading={loading}
  submitting={submitting}
  aiLoading={aiLoading}
/>

        <Editor
          height="600px"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            minimap: {
              enabled: false,
            },
            automaticLayout: true,
            fontSize: 16,
          }}
        />

        <Console output={output} />

      </div>

      <VerdictModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        verdict={verdict}
      />

      <AIResponseCard
  title={aiTitle}
  content={aiResponse}
  onClose={() => setShowAI(false)}
  open={showAI}
/>
    </>
  );
};

export default CodeEditor;