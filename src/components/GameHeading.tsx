import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();

  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platform } = usePlatforms();

  const platformName = platform?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platformName?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
