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

## 4. Tworzmy projekt

### Wybor technologi

Z racji tego, iz nasz projekt moze sie w przyszlosci rozrosnac oraz zalezy nam na szybkim developmencie musimy wybrac jakas bibliteke badz framework do pracy. Idealnym wyborem bedzie `React.js` oraz `MaterialUI`. `React` pozwoli nam na tworzenie reuzywalnych komponentow w aplikacji oraz latwe zarzadzanie jej stanem, logika. `MaterialUI` zawiera gotowe komponenty do urzycia jak formularze, okna, komunikaty, przyciski i wiele innych co rowniez znacznie przyspieszy nasza prace. Dodatkowo wspomniana biblioteka realizuje `Design system - Material Design`, ktory jest wykorzystywany w aplikacjach `Googla` i ma swietne wsparcie. 

### Polecenie npx create-react-app

Projekt React'a mozemy stworzyc samodzielnie, plik po pliku. Tak tez sie robi w wiekszych projektach. Jednak istniele skrypt stworzony przez spolecznosc, ktory pozwoli znacznie przyspieszyc proces tworzenia solucji. Wystarczy wpisac jedno polecnie.
`npx create-react-app nazwa_aplikacji`. Zatem wpisz w terminal znajdujac sie w katalogu `frontend` polecenie, a nastepnie chwile poczekaj.

`npx create-react-app todo`

Polecenie stworzy cala strukture aplikacji za nas oraz doda odpowiednie konfiguracje do formatowania, przestrzegania zasad w kodzie itp.

### Omowienie struktury projektu

Po wykonaniu polecenia powinien pojawic sie w katalogu `frontend` kolejny katalog `todo`. Bedzie to nasza aplikacja i jej kod.

Znajduja sie tam nastepujace pliki:

- `package.json` - plik sledzacy nasze zaleznosci projektowe, biblioteki z ktorych korzystamy podczas pracy nad projektem oraz w kodzie zrodlowym,
- `package_lock.json` - plik sledzacy zaleznosci bibliotek, generowany automatycznie po poleceniu `npm install`, ktore sciaga kod bibliotek wylistowanych w pliku `package.json` pod kluczami `dependencies` oraz `devDependencies`,
- `.gitignore` - zawiera reguly oraz nazwy plikow, ktore powinny byc pominiete podczas wypychania naszych zmian na gita,
- `katalog src` - tam znajduje sie nasz kod aplikacji - tam bedzie pracowac,
- `katalog node_modules` - kod zrodlowy bibliotek - nie interesuje Cie, jest generowany automatycznie,
- `katalog public` - miejsce, w ktorym bedziesz umieszczal pliki jak zdjecia, favicon, konfiguracje i wiele innych. Narazie jest nie istotny.

Efekt koncowy powinien wygladac tak jak w `zrzut1`.

Aby uruchomic przygotowana aplikacje startowa nalezy uruchomic polecenia:

`cd todo` - przejscie do katalogu `todo`,
`npm start` - uruchamia skrypty stworzone przez spolecznosc, ktora uruchamia serwer developerski oraz publikuje tam nasz kod. Podczas zmian w kodzie, przegladarka bedzie sie odswiezac i pokazywac aktualny rezultat naszej pracy.

Odpalona aplikacja powinna wygladac jak w `zrzut2`.

### Omowienie plikow w katalogu src

Katalog `src` zawiera kod zrodlowy naszej aplikacji.

- `Plik index.js` - punkt startowy, `ReactDOM.render()` pozwala na umieszczenie naszych komponentow w konkretnym elemencie pliku `html` znajdujacego sie w katalogu `public`. 

```js
import React from 'react'; // w taki sposob importujemy fragment biblioteki
import ReactDOM from 'react-dom';
import './index.css'; // w taki sposob importujemy style
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```

- plik `index.css` - zawiera globalne style aplikacji,
- plik `App.css` - zawiera style dla komponentu `App.js`,
- plik `App.js` - zawiera kod `React` komponentu `App`.

```js
import logo from './logo.svg';
import './App.css';

function App() { // Deklaracja komponentu
  return ( // Zawartosc komponentu w postaci znacznikow jsx
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

React wykorzystuje `jsx` czyli polaczenia `html` oraz `javascript`, ktory znacznie upraszcza proces tworzenia interfejsu uzytkownika oraz logiki polaczonej z nim.
