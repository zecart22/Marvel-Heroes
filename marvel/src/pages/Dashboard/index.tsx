import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ComicsCard } from "../../components/ComicsCard";
import head_comics from "../../assets/images/dashboard/dash22.jpg";
import head_heroes from "../../assets/images/dashboard/dash88.png";
import head_games from "../../assets/images/jogos/game.png";
import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  Box,
  VStack,
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useMediaQuery,
  border,
} from "@chakra-ui/react";

import { useState } from "react";
import { apiComics, apiHeroes } from "../../services";

interface heroes {
  id: number;
  title: string;
  name: string;
  thumbnail: { extension: string; path: string };
  urls: { type: string; url: string };
  description: string;
  creators: { items: { name: string } };
  pageCount: number;
}

export const Dashboard = () => {
  const history = useHistory();

  const [isLargerThan769] = useMediaQuery("(min-width: 821px)");

  const [iscomics, setIsComics] = useState(true);

  const [isheroes, setIsHeroes] = useState(false);

  const [isgames, setIsGames] = useState(false);

  const [isResearch, setIsResearch] = useState(false);

  const [comics, setComics] = useState([]);

  const [heroes, setHeroes] = useState([]);

  const [principalheader, setPrincipalHeader] = useState(head_comics);

  useEffect(() => {
    fetch(apiComics)
      .then((response) => response.json())
      .then((response) => setComics(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(apiHeroes)
      .then((response) => response.json())
      .then((response) => setHeroes(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  console.log(comics);
  console.log(heroes);

  function changeComics() {
    setPrincipalHeader(head_comics);
    setIsHeroes(false);
    setIsGames(false);
    setIsComics(true);
  }

  function changeHeroes() {
    setPrincipalHeader(head_heroes);
    setIsHeroes(true);
    setIsComics(false);
    setIsGames(false);
  }

  function changeGames() {
    setPrincipalHeader(head_games);
    setIsHeroes(false);
    setIsComics(false);
    setIsGames(true);
  }

  return (
    <>
      {isLargerThan769 ? (
        <Box width="100vw">
          <Header />
          <Flex flexDirection="column" position="relative" top="70px">
            <VStack align-content="center" mt="4" spacing={["4", "4", "10"]}>
              <Center
                flexDirection="column"
                mt="-20px"
                width="100vw"
                backgroundImage={principalheader}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                align-items="center"
              >
                <Image src={principalheader} mr="20px" />
              </Center>
              <Center flexDirection="row">
                <HStack spacing="5">
                  <Button
                    _hover={{ transform: "translateY(-4px)" }}
                    onClick={() => changeComics()}
                    children={"COMICS"}
                    bg="secondary.main1"
                    boxShadow="lg"
                  ></Button>
                  <Button
                    _hover={{ transform: "translateY(-4px)" }}
                    onClick={() => changeHeroes()}
                    children={"HEROES"}
                    boxShadow="lg"
                  ></Button>
                  <Button
                    _hover={{ transform: "translateY(-4px)" }}
                    onClick={() => changeGames()}
                    children={"GAMES"}
                    boxShadow="lg"
                  ></Button>
                </HStack>
              </Center>
            </VStack>
            <Flex
              flexDirection="column"
              position="relative"
              top="70px"
              justify-content="center"
            >
              {iscomics ? (
                <>
                  {comics &&
                    comics.map((comic: heroes) => (
                      <>
                        <ComicsCard
                          name={comic.title}
                          image={
                            comic.thumbnail.path +
                            "." +
                            comic.thumbnail.extension
                          }
                          year={comic.pageCount}
                          description={""}
                          price={20}
                        ></ComicsCard>
                      </>
                    ))}
                </>
              ) : (
                <></>
              )}
              {isheroes ? (
                <>
                  {heroes &&
                    heroes.map((hero: heroes) => (
                      <>
                        <ComicsCard
                          name={hero.name}
                          image={
                            hero.thumbnail.path + "." + hero.thumbnail.extension
                          }
                          year={91}
                          description={hero.description}
                          price={20}
                        ></ComicsCard>
                      </>
                    ))}
                </>
              ) : (
                <></>
              )}

              {/* </HStack> */}
            </Flex>
          </Flex>
        </Box>
      ) : (
        /*  parte mobile */
        <Box width="100vw">
          <Header />
          <Flex flexDirection="column" position="relative" top="70px">
            <VStack align-content="center" mt="4" spacing={["4", "4", "10"]}>
              <Stack flexDirection="column" alignItems="center">
                <Button
                  mt="20px"
                  onClick={() => changeComics()}
                  children={"COMICS"}
                  bg="secondary.main1"
                  _hover={{ transform: "translateX(-4px)" }}
                  boxShadow="lg"
                ></Button>
                <Button
                  mt="20px"
                  onClick={() => changeHeroes()}
                  children={"HEROES"}
                  _hover={{ transform: "translateX(-4px)" }}
                  boxShadow="lg"
                ></Button>
                <Button
                  mt="20px"
                  onClick={() => changeGames()}
                  children={"GAMES"}
                  _hover={{ transform: "translateX(-4px)" }}
                  boxShadow="lg"
                ></Button>
              </Stack>

              <Flex
                flex-wrap="wrap"
                flexDirection="column"
                position="relative"
                top="70px"
                justify-content="center"
              >
                {iscomics ? (
                  <>
                    {comics &&
                      comics.map((comic: heroes) => (
                        <>
                          <ComicsCard
                            name={comic.title}
                            image={
                              comic.thumbnail.path +
                              "." +
                              comic.thumbnail.extension
                            }
                            year={comic.pageCount}
                            description={""}
                            price={20}
                          ></ComicsCard>
                        </>
                      ))}
                  </>
                ) : (
                  <></>
                )}
                {isheroes ? (
                  <>
                    {heroes &&
                      heroes.map((hero: heroes) => (
                        <>
                          <ComicsCard
                            name={hero.name}
                            image={
                              hero.thumbnail.path +
                              "." +
                              hero.thumbnail.extension
                            }
                            year={91}
                            description={hero.description}
                            price={20}
                          ></ComicsCard>
                        </>
                      ))}
                  </>
                ) : (
                  <></>
                )}
              </Flex>
            </VStack>
          </Flex>
        </Box>
      )}
    </>
  );
};
