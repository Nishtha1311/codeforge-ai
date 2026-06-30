import ReactMarkdown from "react-markdown";
import { X } from "lucide-react";

const AIResponseCard = ({
  open,
  title,
  content,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-6">

      <div
        className="
          bg-[#18181B]
          border
          border-white/10
          rounded-2xl
          shadow-2xl
          w-[900px]
          max-w-[95vw]
          max-h-[85vh]
          overflow-hidden
        "
      >

        {/* Header */}

        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">

          <h2 className="text-3xl font-bold text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={28} />
          </button>

        </div>

        {/* Body */}

        <div className="max-h-[70vh] overflow-y-auto px-8 py-6">

          <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300 prose-code:text-yellow-300 prose-pre:bg-[#111827] prose-pre:border prose-pre:border-white/10">

            <ReactMarkdown>
              {content || "No response received."}
            </ReactMarkdown>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AIResponseCard;