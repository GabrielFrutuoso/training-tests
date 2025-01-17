import { useEffect, useState } from "react";
import apiClients from "../../services/apiClients";
import SpellsIcon from "../../components/SpellsIcon/SpellsIcon";
import { useSearchParams } from "react-router-dom";

interface Champion {
  name: string;
  title: string;
  passive: {
    image: {
      full: string;
    };
    description: string;
  };
  spells: {
    image: {
      full: string;
    };
    description: string;
  }[];
}

export const ChampionScreen: React.FC = () => {
  const [searchParams] = useSearchParams();
  const championId = searchParams.get("id");
  const championSkin = searchParams.get("skin");

  const [skinNumber, setSkinNumber] = useState(0);
  const [champion, setChampion] = useState<Champion | null>(null);

  useEffect(() => {
    setSkinNumber(championSkin ? parseInt(championSkin) : 0);
  }, [championSkin]);

  useEffect(() => {
    if (championId) {
      apiClients.specificChamp.get(`/${championId}.json`).then((response) => {
        setChampion(response.data.data[championId]);
      });
    }
  }, [championId]);

  return (
    <div
      data-testid="champion"
      className="h-screen flex justify-center items-center relative"
    >
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skinNumber}.jpg`}
        alt={`splash art of ${championId}`}
        className="h-full w-full object-cover absolute top-0 left-0"
      />

      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <h1 role="contentinfo" className="text-6xl text-white font-semibold">
          {champion?.name}
        </h1>
        <p className="text-4xl text-white font-semibold">
          {champion?.title}
        </p>

        <div className="flex flex-row gap-4">
          {champion?.passive && (
            <SpellsIcon
              image={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/passive/${champion.passive.image.full}`}
              alt={`passive of ${champion.name}`}
              description={champion.passive.description}
            />
          )}
          {champion?.spells?.map((spell, index) => (
            <SpellsIcon
              key={index}
              image={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/spell/${spell?.image?.full}`}
              alt={`skill of ${champion?.name}`}
              description={spell?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
