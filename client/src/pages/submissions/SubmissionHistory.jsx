import { useEffect, useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import SubmissionTable from "../../components/submissions/SubmissionTable";
import { getMySubmissions } from "../../services/submissionService";

const SubmissionHistory = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await getMySubmissions();
      setSubmissions(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <h1 className="text-4xl font-bold mb-8">
        Submission History
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <SubmissionTable submissions={submissions} />
      )}
    </AppLayout>
  );
};

export default SubmissionHistory;