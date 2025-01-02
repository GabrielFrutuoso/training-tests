import { useEffect, useState } from "react";
import apiClients from "../../services/apiClients";
import SpellsIcon from "../../components/SpellsIcon/SpellsIcon";

export const ChampionScreen: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const championId = searchParams.get("id");
  const championSkin = searchParams.get("skin");

  const [skinumber, setSkinNumber] = useState(0);
  const [champion, setChampion] = useState([]);

  useEffect(() => {
    setSkinNumber(championSkin ? parseInt(championSkin) : 0);
  }, [championSkin]);

  useEffect(() => {
    apiClients.specificChamp.get(`/${championId}.json`).then((response) => {
      setChampion(response.data.data);
    });
  }, [championId]);

  console.log(champion[championId]);

  return (
    <div
      data-testid="champion"
      className="h-screen flex justify-center items-center relative"
    >
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skinumber}.jpg`}
        alt={`splash art of ${championId}`}
        className="h-full w-full object-cover absolute top-0 left-0"
      />

      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <h1 className="text-6xl text-white font-semibold">
          {champion[championId]?.name}
        </h1>
        <p className="text-4xl text-white font-semibold">
          {champion[championId]?.title}
        </p>

        <div className="flex flex-row gap-4">
          <SpellsIcon
            image={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/passive/${champion[championId]?.passive?.image?.full}`}
            alt={`passevie of ${champion[championId]?.name}`}
            description={`${champion[championId]?.passive?.description}`}
          />
          {champion[championId]?.spells?.map((spell) => (
            <SpellsIcon
              image={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/${spell?.image?.full}`}
              alt={`skill of ${champion[championId]?.name}`}
              description={`${spell?.description}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
