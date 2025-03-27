# Grandpa EMU

## Stated goal of the project

### What we want

An emulator frontend for RetroArch that's so easy to use that even a technologically challenged grandfather can handle it with little to no tech support.

### Constraints

- **Dead simple UI.**
  - Do not include flashy animations. Too aggressive animations can cause a sense of confusion in the grandpa.
  - Keep styling of the application very simple. Too many colors, too many impressions, increases chance of confusion and/or headaches.
- As few steps to start a game as possible.
  - Pick console, pick game, start game.
- Hide UI elements that's not necessary for starting a game to avoid confusion due to missclicks by the grandpa.

## Milestones

- 1.0

  - We can display all available consoles in RetroArch.
  - We can display all the available game titles for every listed console.
  - We can start the chosen game title, for the chosen console, through a command to RetroArch.

- 1.1

  - We have a setting for increasing the font size.

- 1.2

  - We have a settings menu.
  - We have a setting for transcribing Roman numerals to modern numbers.

- 1.3

  - We have a search bar setting that, when enabled, will display a search bar for finding a game.

## Tasks

- Create a settings.json file.

  - Have a setting that points to the library of games.

- List all available RetroArch consoles in the application.

  - The consoles should be listed with their full name.

- List all available game title for the selected console.

  - The games should be listed with their full name. All discs should be included with their own rows.

- Enable start button to play a selected game.

  - This button is enabled only when a console and game title has been selected.
  - When pressed, the game will start using a CLI command to RetroArch.

- Creating a settings menu with a setting to adjust the application's font size.

  - Navigation.

    - A button that will open the settings page.
    - The settings page needs a back button that returns the user to the game selection page.

  - Build a `<Setting>` component.

    - Prop `label:string`.
    - Prop `description:string`.
    - `children` will be the controls that enables, disables, or adjust the setting.

  - Font size setting.

    - A setting with a title and brief description of what the setting does.
    - An input field that will let the user insert the size of the font in %, e.g. 120%.
    - The input field value starts at 100%.
    - The Setting is applied when you leave the field, or presses an apply button, whichever feels better.

- Creating a setting transcribe Roman numerals to modern numbers.

  - A setting with a title and brief description of what the setting does.
  - A switch that either enables or disabled the setting.
  - When enabled, all game titles that have a roman numeral in the title will be listed with a modern number instead, e.g. Final Fantasy VII (Disc 1) becomes Final Fantasy 7 (Disc 1).
  - When disabled, game titles remain untouched and are listed as-is.

- Get .exe path:
  Get-Command -Name retroarch -CommandType Application -Syntax
