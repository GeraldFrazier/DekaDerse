import { notFound } from "next/navigation";

type Props = {
    params: {
        term: string;
    }
}

function SearchPage({params: {term}}: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term); 

  // Api call to return movies
  // API call to get popular movies
    return (
    <div>Welcome to the search page: {term}</div>
  )
}

export default SearchPage