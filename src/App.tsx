import { useFetch } from "./hooks/useFetch";

type RepositoryProps = {
  full_name: string;
  description: string;
};

function App() {
  const { data: repositories, isFetching } = useFetch<RepositoryProps[]>(
    "users/renanromagnollo/repos"
  );
  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
