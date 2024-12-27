import { getTopics } from "../services/api";

export default async function TopicsPage() {
  const data = await getTopics();
  const topics = data.topics;

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {topics.map((topic: { _id: string; name: string }) => (
          <li key={topic._id}>
            {topic.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
