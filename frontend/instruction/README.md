# Frontend developer tutorial

Dokument ma na celu przeprowadzenie uczestników warsztatu przez proces tworzenia aplikacji po stronie klienta (frontend). W razie jakichkolwiek wątpliwości proszę o kontakt, zadawanie pytań.

## 1. Przygotowanie się do pracy

1. Pobierz NodeJS - wersje LTS https://nodejs.org/en/ oraz zainstuj,
2. Pobierz edytor tekstu Visual Studio Code https://code.visualstudio.com/download
 oraz zainstaluj go,
3. Z menu po lewej stronie pobierz następujące wtyczki `Ctrl+Shit+X` lub ikona klocków:
- dbaeumer.vscode-eslint - podświetla podstawowe błędy w terminalu dotyczące formatowania, dobrych zasad pisania kodu,
- jamesmaj.easy-icons - podmienia ikony plików na bardziej opisujące,
- knisterpeter.vscode-github - pozwala na integracje z githubem w łatwy sposób,
- esbenp.prettier-vscode - pozwaja na formatowanie kodu za pomocą skrótu klawiszowego w oparciu o zdefiniowane przez nas reguły,
- rvest.vs-code-prettier-eslint - integruje eslinta z prettierem - również do formatowania kodu lecz dodatkowo w oparciu o reguły eslinta. 

## 2. Pobranie repozytorium z serwisu Github

Repozytorium to nic innego jak folder, w który znajdować się będzie kod, assety, zdjęcia oraz wszystko co potrzebne do działania naszej aplikacji.

Repozytorium pobieramy w następujący sposób:

- za pomocą skrótów `ctrl + tylda` - klawisz pod `esc` lub za pomocą zakładki `terminal => new terminal`, otwieramy terminal,
- wpisujemy tam polecenie `git clone link_do_repozytorium` czyli `git clone https://github.com/polubis/Warsztaty-Web---2021` oraz czekamy chwilke,
- następnie należy przejść do folderu z pobranym repozytorium - robimy to poleceniem `cd .\Warsztaty-Web---2021\`,
- następnie należy otworzyć strukturę plików oraz folderów w programie Visual Studio Code - możemy zrobić to polceniem `code .`,
- poprzednie okno edytora możemy zamknąć,
- po lewej stronie powinna być widoczna struktura plików oraz folderów po której możemy nawigować i przeglądać jej hierarchie oraz kontent zawarty wewnątrz poszczególnych plików,
- mając uruchomiony terminal musimy jeszcze przejść do katalogu z naszą częścią aplikacji - odpowiada ścieżce "kariery", która wybraliśmy wcześniej. Czyli będzie to polecenie `cd frontend`,
- przed rozpoczęciem pracy należy stworzyć jeszcze **branch**. Czyli coś w rodzaju naszego miejsca pracy, które nie będzie ingerowało w pracę innych i pozwoli nam na śledzenie naszego postępu. Robimy to za pomocą polecenia: `git checkout -b IMIE_NAZWISKO_DATA_NAUKA` - czyli w moim przypadku będzie to `git checkout -b NAUKA_FRONTEND_ADRIAN_POLUBINSKI_21_04_2021`,
- nasz **branch** został stworzony lokalnie - w lewym dolnym rogu powinna pojawić się nazwa baszego brancha a obok ikona sugerująca opublikowanie go na chmurze - możemy to zrobić klikając w nią lub za pomocą polecnia `git push -u origin IMIE_NAZWISKO_DATA_NAUKA` czyli w moim przypadku `git push -u origin NAUKA_FRONTEND_ADRIAN_POLUBINSKI_21_04_2021`,
- nasz "folder" został stworzony oraz opublikowany teraz czas na dodanie tam pierwszej treści. Podczas pracy progres jest zapisywany lokalnie. Chcielibyśmy zapisywać co jakiś czas kolejny etap pracy, krok. Do tego służy **commit** czyli nic innego jak etap, fragment naszej pracy. Spróbujmy stworzyć jakiś plik tekstowy w katalogu frontend - prawy przycisk myszy, `new file` no i jakaś nazwa. W moim przypadku niech będzie to `test.txt`. Dodajmy tam jeszcze jakiś kontent i zapiszmy,
- mając plik chcemy nasz postęp zapisać. Do tego używamy polecenia `git add. ` - czyli dodaj wszystkie pliki do następnego commita, 
- następnie polecenie `git commit -m "Nazwa sugerujaca co zostało zrobione` - w moim przypadku `git commit -m "Add txt file for tests"`,
- oraz `git push` w celu wypchnięcia zmian na chmure.

Jesteśmy gotowi do dalszej pracy - zaczniemy tworzyć już aplikację.

## 3. Ogólny wstęp teoretyczny

Wyjaśnimy wszystkie kluczowe pojęcia zorientowane wokół naszej przyszłej aplikacji.

### Technologie webowe

Do budowania stron internetowych, aplikacji wykorzystuje się 3 technologie. Są to:

- język HTML - wykorzystywany do umieszczania treści,
- język CSS - wykorzystywany w celu modyfikowania wyglądu naszej strony, aplikacji,
- język JavaScript - wykorzystywany do modifikowania w sposób dynamiczny treści, wygladu oraz wielu innych np. wykonywania zapytań do API czy komunikacji z różnymi API przeglądarki.

Wraz z upływem czasu zaczeły pojawiać się biblioteki oraz frameworki. 

#### Biblioteka

Fragment kodu napisany przez programiste, który może zostać wykorzystany w różnych aplikacjach, stronach internetowych. Pisze się w celu rozwiązywania różnych problemów, a następnie wykorzystana rozwiązania w szybki sposób.

Przykładem będzie np. `axios` bądź `jQuery`.

Dodatkowo wartą uwagi jest biblioteka `ReactJs`, która pozwola na tworzenie komponentów interfejsu oraz logiki aplikacji w prosty i przejrzysty sposób.

#### Framework

Zestaw zasad, wzorców, bibliotek, który ułatwia proces pisania aplikacji. Wykorzystywane zazwyczaj w większych aplikacjach lecz nie tylko.

Przykładem będzie np. `Angular` bądź `KnockoutJS`.

## 4. Kurs HTML

Każda strona internetowa czy aplikacja webowa zaczyna się od dokumentu `html` - czyli plik z rozszerzeniem `.html`. W tym pliku tworzymy treść za pomocą znaczników, ale i również dajemy wskazówki przeglądarce co ma robić.

O to przykład takiego pliku:



## 5. Zaczynamy czyli dobór technologii do naszej aplikacji

Ze względu na to, że w przyszlości będzie istniała możliwość jej rozwoju to musimy dobrać odrazu odpowiednie technologie.

Moglibyśmy napisać ją poprostu wykorzystując `HTML`, `CSS`, oraz `JavaScript` lecz w momencie zwiększenia liczby funkcjonalności, utrzymanie aplikacji mogłoby stać się cieżkie.

Dodatkowo patrząc na wstępne wymagania aplikacji w głównym pliku `README`, możemy dojsc do wniosku, że aplikacja renderowana po stronie klienta będzie idealna.

Ze względu powyższe, wykorzystamy bibliotekę `ReactJS` oraz kilka innych technologii. 




