import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AppLayout from "../../components/layout/AppLayout";
import CodeEditor from "../../components/editor/CodeEditor";
import TestCasePanel from "../../components/problem/TestCasePanel";
import api from "../../services/api";

const ProblemDetails = () => {
  const { slug } = useParams();

  const [problem, setProblem] = useState(null);

  useEffect(() => {
    fetchProblem();
  }, []);

  const fetchProblem = async () => {
    try {
      const response = await api.get(`/problems/${slug}`);
      setProblem(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!problem) {
    return (
      <AppLayout>
        <h1 className="text-3xl font-bold">Loading...</h1>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="flex gap-8 items-start">

        {/* Left Panel */}

        <div className="w-[58%]">

          <h1 className="text-5xl font-bold mb-6">
            {problem.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
              {problem.difficulty}
            </span>

            {problem.tags.map((tag) => (
              <span
                key={tag}
                className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}

          </div>

          <section className="mb-10">

            <h2 className="text-3xl font-bold mb-5">
              Description
            </h2>

            <p className="text-gray-300 leading-9 whitespace-pre-wrap">
              {problem.description}
            </p>

          </section>

          <section className="mb-10">

            <h2 className="text-3xl font-bold mb-5">
              Constraints
            </h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-300">

              {problem.constraints.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}

            </ul>

          </section>

          <TestCasePanel examples={problem.examples} />

        </div>

        {/* Right Panel */}

        <div className="w-[42%] sticky top-6">

          <CodeEditor
            starterCode={problem.starterCode.javascript}
            problemId={problem._id}
          />

        </div>

      </div>
    </AppLayout>
  );
};

export default ProblemDetails;