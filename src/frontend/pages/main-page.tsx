import { memo, useCallback, useMemo, useState } from "react";
import {
  Button,
  Input,
  Label,
  ListBoxProps,
  Selection,
  TextField,
} from "react-aria-components";
import { MyButton } from "../components/my-button";
import { MyList, MyListItem } from "../components/my-list";

export const MainPage = () => {
  return (
    <div className="flex flex-col gap-12 p-5">
      <TopBar />
      <StartButtonSection />
      <GameSelectionSection />
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="flex gap-4">
      <MyButton>Settings</MyButton>
      <MyButton>Lock UI</MyButton>
    </div>
  );
};

const StartButtonSection = () => {
  return (
    <div className="flex flex-col">
      <MyButton isDisabled>Start the game!</MyButton>
    </div>
  );
};

const GameSelectionSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <GameSearch />
      <GameSelect />
    </div>
  );
};

const GameSearch = () => {
  return (
    <div>
      <TextField>
        <Input
          placeholder="Search for games..."
          aria-label="Game search input"
          className="w-full rounded bg-neutral-700 px-3 py-2 ring-cyan-300 placeholder:italic focus:outline-none focus:ring"
        />
      </TextField>
    </div>
  );
};

const GameSelect = () => {
  const consoles = useMemo<ConsoleListItem[]>(() => {
    return [
      { name: "Playstation 1" },
      { name: "Playstation 2" },
      { name: "Super Nintendo" },
      { name: "Sega Megadrive" },
    ];
  }, []);

  const ps1Titles = useMemo<ConsoleListItem[]>(() => {
    return [
      { name: "Alundra" },
      { name: "Alundra 2" },
      { name: "Resident Evil" },
      { name: "Final Fantasy VII (Disc 1)" },
      { name: "Final Fantasy VII (Disc 2)" },
      { name: "Final Fantasy VII (Disc 3)" },
      { name: "Final Fantasy VIII (Disc 1)" },
      { name: "Final Fantasy VIII (Disc 2)" },
      { name: "Final Fantasy VIII (Disc 3)" },
      { name: "Final Fantasy VIII (Disc 4)" },
      { name: "Koudelka" },
      { name: "Mega Man 8" },
      { name: "Castlevania: Symphony of the Night" },
      { name: "Point Blank" },
      { name: "Point Blank 2" },
      { name: "Silent Hill" },
    ];
  }, []);

  const ps2Titles = useMemo<ConsoleListItem[]>(() => {
    return [
      { name: "Silent Hill 2" },
      { name: "Silent Hill 3" },
      { name: "Silent Hill 4" },
      { name: "Final Fantasy X" },
      { name: "Grand Theft Auto 3" },
      { name: "Resident Evil 4" },
      { name: "Metal Gear Solid 2: Sons of Liberty" },
      { name: "Gran Turismo 3: A-Spec" },
      { name: "Devil May Cry" },
      { name: "Final Fantasy XII" },
      { name: "Ratchet & Clank: Up Your Arsenal" },
      { name: "God of War" },
      { name: "God of War 2" },
      { name: "Okami" },
      { name: "SSX" },
      { name: "ICO" },
      { name: "Shadow of the Colossus" },
    ];
  }, []);

  const games = useMemo(() => {
    return {
      "Playstation 1": ps1Titles,
      "Playstation 2": ps2Titles,
    };
  }, [ps1Titles, ps2Titles]);

  const [selConsole, setSelConsole] = useState<Selection>(undefined);

  const selConsoleTitles = useMemo(() => {
    const console: keyof typeof games =
      selConsole instanceof Set ? selConsole.values().next().value : undefined;

    return console ? games[console] : [];
  }, [selConsole]);

  return (
    <div className="flex max-h-[500px] gap-2">
      <ConsoleList
        items={consoles}
        selectedKeys={selConsole}
        onSelectionChange={setSelConsole}
      />
      <ConsoleTitles items={selConsoleTitles} />
    </div>
  );
};

interface ConsoleListProps extends ListBoxProps<ConsoleListItem> {
  items: ConsoleListItem[];
}

type ConsoleListItem = {
  name: string;
};

const ConsoleList = ({ items, onSelectionChange }: ConsoleListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium">Consoles</h1>
      <div className="border border-neutral-700"></div>
      <MyList
        selectionMode="single"
        selectionBehavior="toggle"
        items={items}
        onSelectionChange={onSelectionChange}
      >
        {(item) => {
          return <MyListItem id={item.name}>{item.name}</MyListItem>;
        }}
      </MyList>
    </div>
  );
};

interface ConsoleTitlesProps extends ListBoxProps<ConsoleTitleItem> {
  items: ConsoleListItem[];
}

type ConsoleTitleItem = {
  name: string;
};

const ConsoleTitles = ({ items, onSelectionChange }: ConsoleTitlesProps) => {
  return (
    <div className="flex flex-grow flex-col gap-4">
      <h1 className="text-xl font-medium">Games</h1>
      <div className="border border-neutral-700"></div>
      <div className="overflow-auto">
        <MyList
          selectionMode="single"
          selectionBehavior="toggle"
          items={items}
          onSelectionChange={onSelectionChange}
        >
          {(item) => {
            return <MyListItem id={item.name}>{item.name}</MyListItem>;
          }}
        </MyList>
      </div>
    </div>
  );
};
