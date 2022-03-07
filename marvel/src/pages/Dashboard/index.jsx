import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ComicsCard } from "../../components/ComicsCard";
import head_comics from "../../assets/images/dashboard/dash22.jpg";
import head_heroes from "../../assets/images/dashboard/dash88.png";
import head_games from "../../assets/images/jogos/game.png";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { apiComics, apiHeroes } from "../../services";

import {
  Box,
  VStack,
  Center,
  Flex,
  HStack,
  Image,
  Stack,
  useMediaQuery,
  Input,
} from "@chakra-ui/react";

/* interface heroes {
  id: number;
  title: string;
  name: string;
  thumbnail: { extension: string; path: string };
  urls: { type: string; url: string };
  description: string;
  creators: { items: { name: string } };
  pageCount: number;
} */

export const Dashboard = ({ autenticador, setAtenticator }) => {
  const history = useHistory();

  const [isLargerThan769] = useMediaQuery("(min-width: 821px)");

  const [iscomics, setIsComics] = useState(true);

  const [isheroes, setIsHeroes] = useState(false);

  const [isSearch, setIsSearch] = useState(false);

  const [comics, setComics] = useState([]);

  const [heroes, setHeroes] = useState([]);

  const [principalheader, setPrincipalHeader] = useState(head_comics);

  const [searchName, setSearchName] = useState("");

  const [searchItem, setSearchItem] = useState([]);

  const filtrado = heroes.filter(function (hero) {
    if (hero.name === searchItem) {
      return hero;
    }
  });

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
    setIsSearch(false);
    setIsComics(true);
  }

  function changeHeroes() {
    setPrincipalHeader(head_heroes);
    setIsHeroes(true);
    setIsComics(false);
    setIsSearch(false);
  }

  function changeSearch() {
    setPrincipalHeader(head_games);
    setSearchItem(searchName);
    setIsHeroes(false);
    setIsComics(false);
    setIsSearch(true);
  }

  if (!autenticador) {
    return <Redirect to="/login" />;
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
                    bg="secondary.main"
                    boxShadow="lg"
                  ></Button>
                  <Button
                    _hover={{ transform: "translateY(-4px)" }}
                    onClick={() => changeHeroes()}
                    children={"PERSONAGENS"}
                    boxShadow="lg"
                  ></Button>
                  <Box justifyContent="column" w="500px">
                    <Input
                      placeholder="procure seu personagem pelo nome"
                      size="lg"
                      type="text"
                      value={searchName}
                      onChange={(event) => setSearchName(event.target.value)}
                    />
                    <HStack spacing="20">
                      <Button
                        focusBorderColor="secondary.main"
                        position="absolute"
                        ml="450px"
                        mb="48px"
                        w="50px"
                        _hover={{ transform: "translateY(-2px)" }}
                        onClick={() => changeSearch()}
                        children={"go!"}
                        boxShadow="lg"
                      ></Button>
                    </HStack>
                  </Box>
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
                    comics.map((comic) => (
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
                    heroes.map((hero) => (
                      <>
                        <ComicsCard
                          name={hero.name}
                          image={
                            hero.thumbnail.path + "." + hero.thumbnail.extension
                          }
                          year={0}
                          description={hero.description}
                          price={20}
                        ></ComicsCard>
                      </>
                    ))}
                </>
              ) : (
                <>
                  {filtrado &&
                    filtrado.map((hero) => (
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
                  onClick={() => changeSearch()}
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
                      comics.map((comic) => (
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
                      heroes.map((hero) => (
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
