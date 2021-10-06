import { useState } from "react";
import "./App.css";

function App() {
  const q31 = JSON.parse(localStorage.getItem("totalChamps")) ?? 0;
  const q413 = JSON.parse(localStorage.getItem("guiTotalChamps")) ?? 0;
  const q414 = JSON.parse(localStorage.getItem("momTotalChamps")) ?? 0;
  const q41 = JSON.parse(localStorage.getItem("TotalGames")) ?? 0;
  const q411 = JSON.parse(localStorage.getItem("guiTotalGames")) ?? 0;
  const q412 = JSON.parse(localStorage.getItem("momTotalGames")) ?? 0;
  const q4122 = JSON.parse(localStorage.getItem("guiVictories")) ?? 0;
  const q4123 = JSON.parse(localStorage.getItem("guiPoints")) ?? 0;
  const q4124 = JSON.parse(localStorage.getItem("momPoints")) ?? 0;
  const q4125 = JSON.parse(localStorage.getItem("momVictories")) ?? 0;
  const q41251 = JSON.parse(localStorage.getItem("momMaxPoints")) ?? 0;
  const q41252 = JSON.parse(localStorage.getItem("guiMaxPoints")) ?? 0;
  const [guiInput, setGuiInput] = useState(0);
  const [momInput, setMomInput] = useState(0);
  const [guiPoints, setGuiPoints] = useState(q4123);
  const [momPoints, setMomPoints] = useState(q4124);
  const [guiVictories, setGuiVictories] = useState(q4122);
  const [momVictories, setMomVictories] = useState(q4125);
  const [totalChamps, setTotalChamps] = useState(q31);
  const [totalGames, setTotalGames] = useState(q41);
  const [guiTotalChamps, setGuiTotalChamps] = useState(q413);
  const [guiTotalGames, setGuiTotalGames] = useState(q411);
  const [momTotalChamps, setMomTotalChamps] = useState(q414);
  const [momTotalGames, setMomTotalGames] = useState(q412);
  const [guiMaxPoints, setGuiMaxPoints] = useState(q41252);
  const [momMaxPoints, setMomMaxPoints] = useState(q41251);
  const [checkButton, setCheckButton] = useState(true);
  localStorage.setItem("guiTotalChamps", JSON.stringify(Number(guiTotalChamps)));
  localStorage.setItem("momTotalChamps", JSON.stringify(Number(momTotalChamps)));
  localStorage.setItem("totalChamps", JSON.stringify(Number(guiTotalChamps) + Number(momTotalChamps)));
  localStorage.setItem("guiTotalGames", JSON.stringify(Number(guiTotalGames)));
  localStorage.setItem("momTotalGames", JSON.stringify(Number(momTotalGames)));
  localStorage.setItem("totalGames", JSON.stringify(Number(guiTotalGames) + Number(momTotalGames)));
  localStorage.setItem("momVictories", JSON.stringify(Number(momVictories)));
  localStorage.setItem("momPoints", JSON.stringify(Number(momPoints)));
  localStorage.setItem("guiPoints", JSON.stringify(Number(guiPoints)));
  localStorage.setItem("guiVictories", JSON.stringify(Number(guiVictories)));
  localStorage.setItem("guiMaxPoints", JSON.stringify(Number(guiMaxPoints)));
  localStorage.setItem("momMaxPoints", JSON.stringify(Number(momMaxPoints)));
  return (
    <div className="container">
      <h1>Canastra Gui e Mãe!</h1>
      <div>
        <div className="input-center">
          <label htmlFor="1">
            {"Gui: "}
            <input
              id="1"
              type="number"
              onChange={(e) => {
                if (e.target.value[0] === '0' &&  e.target.value.length > 1) {
                  e.target.value = e.target.value.slice(1);
                }
                console.log(e.target.value[0]);
                setGuiInput(e.target.value);
                if (e.target.value && momInput) {
                  setCheckButton(false);
                }
              }}
            />
          </label>
          <label htmlFor="2">
            {"Mãe: "}
            <input
              id="2"
              type="number"
              onChange={(e) => {
                if (e.target.value[0] === '0' &&  e.target.value.length > 1) {
                  e.target.value = e.target.value.slice(1);
                }
                setMomInput(e.target.value);
                if (guiInput && e.target.value) {
                  setCheckButton(false);
                }
              }}
            />
          </label>
        </div>
        <div className="button-center">
          <button
            type="button"
            disabled={checkButton}
            onClick={() => {
              const q = JSON.parse(localStorage.getItem("gui")) ?? "";
              const q2 = JSON.parse(localStorage.getItem("mom")) ?? "";
              const q4 = JSON.parse(localStorage.getItem("TotalGames")) ?? "";
              localStorage.setItem("gui", JSON.stringify([...q, guiInput]));
              localStorage.setItem("mom", JSON.stringify([...q2, momInput]));
              localStorage.setItem(
                "TotalGames",
                JSON.stringify(Number(q4) + 1)
              );
              document.getElementById("1").value = 0;
              document.getElementById("2").value = 0;
              const guiTotalPoints = [...q, guiInput].reduce((a, e) => {
                return Number(a) + Number(e);
              });
              const momTotalPoints = [...q2, momInput].reduce((a, e) => {
                return Number(a) + Number(e);
              });
              if (guiTotalPoints >= 3000 && guiTotalPoints > momTotalPoints) {
                setGuiVictories(guiVictories + 1);
                localStorage.removeItem("gui");
                localStorage.removeItem("mom");
                localStorage.setItem("guiVictories", JSON.stringify(guiVictories));
                localStorage.setItem("momPoints", JSON.stringify(0));
                localStorage.setItem("guiPoints", JSON.stringify(0));
              }
              if (momTotalPoints >= 3000 && guiTotalPoints < momTotalPoints) {
                setMomVictories(momVictories + 1);
                localStorage.removeItem("gui");
                localStorage.removeItem("mom");
                localStorage.setItem("momVictories", JSON.stringify(momVictories));
                localStorage.setItem("momPoints", JSON.stringify(0));
                localStorage.setItem("guiPoints", JSON.stringify(0));
              }
              if (guiVictories === 5 || momVictories === 5) {
                setGuiTotalGames(guiTotalGames + guiVictories);
                setMomTotalGames(momTotalGames + momVictories);
                setTotalGames(
                  totalGames + Number(guiVictories) + Number(momVictories)
                );
                guiVictories === 5 &&
                  setGuiTotalChamps(Number(guiTotalChamps) + 1);
                momVictories === 5 &&
                  setMomTotalChamps(Number(momTotalChamps) + 1);
                setGuiVictories(0);
                setMomVictories(0);
                setTotalChamps(totalChamps + 1);
              }

              setGuiInput(0);
              setMomInput(0);
              setGuiPoints(guiTotalPoints);
              setMomPoints(momTotalPoints);
              setCheckButton(true);
              if (guiMaxPoints < guiInput) {
                setGuiMaxPoints(guiInput)
                localStorage.setItem("guiMaxPoints", JSON.stringify(Number(guiInput)));
              }
              if (momMaxPoints < momInput) {
                setMomMaxPoints(momInput)
                localStorage.setItem("momMaxPoints", JSON.stringify(Number(momInput)));
              }

            }}
          >
            Adicionar Pontuação
          </button>
        </div>
        <div>
          <table>
            <caption>{"Placar"}</caption>
            <tbody className="tbody">
              <tr>
                <th>{"Lista:"}</th>
                <th>{"Pontos"}</th>
                <th>{"Vitórias"}</th>
                <th>{"Campeonatos"}</th>
                <th>{"Jogos"}</th>
                <th>{"Maior Pontuação"}</th>
              </tr>
              <tr>
                <th>{"Gui"}</th>
                <td>{guiPoints}</td>
                <td>{guiVictories}</td>
                <td>{guiTotalChamps}</td>
                <td>{guiTotalGames}</td>
                <td>{guiMaxPoints}</td>
              </tr>
              <tr>
                <th>{"Mãe"}</th>
                <td>{momPoints}</td>
                <td>{momVictories}</td>
                <td>{momTotalChamps}</td>
                <td>{momTotalGames}</td>
                <td>{momMaxPoints}</td>
              </tr>
              <tr>
                <th>{"Total"}</th>
                <td className="void"></td>
                <td className="void"></td>
                <td>{totalChamps}</td>
                <td>{totalGames}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
