import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

type RepositoryProps = {
  full_name: string;
  description: string;
};

export function Repos() {
  const { data, isFetching } = useQuery<RepositoryProps[]>(
    "repos",
    async () => {
      const response = await axios.get(
        "https://api.github.com/users/renanromagnollo/repos"
      );

      return response.data;
    },
    {
      staleTime: 1000 * 60,
    }
  );
  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <Link to={`repos/${repo.full_name}`}>{repo.full_name}</Link>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
