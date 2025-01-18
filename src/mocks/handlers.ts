import { http, HttpResponse } from "msw";
import { spectChampObj } from "./specChampObj";

export const handlers = [
  http.get(
    "https://ddragon.leagueoflegends.com/cdn/14.21.1/data/pt_BR/champion/Aatrox.json",
    async () => {
      return HttpResponse.json({
        spectChampObj,
      });
    }
  ),
  http.get(
    "https://ddragon.leagueoflegends.com/cdn/14.21.1/data/pt_BR/champion.json",
    async () => {
      return HttpResponse.json({
        data: {
          Aatrox: spectChampObj,
          Anivia: {
            version: "14.21.1",
            id: "Anivia",
            key: "1",
            name: "Anivia",
            title: "the Crystal Aviary",
            blurb:
              "Anivia is a mystical crystal avatar brought to life by the essence of the stars. She supports her allies with her celestial powers and shields them from harm, while also calling down the fury of the elements upon her foes.",
            info: {
              attack: 0,
              defense: 0,
              magic: 0,
              difficulty: 0,
            },
            image: {
              full: "Anivia.png",
              sprite: "champion0.png",
              group: "champion",
              x: 0,
              y: 0,
              w: 48,
              h: 48,
            },
            tags: ["Mage", "Support"],
            partype: "Mana",
            stats: {},
          },
        },
      });
    }
  ),
];
