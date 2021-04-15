# Testy automatyczne

## Testy automatyczne z wykorzystaniem języka JavaScript i narzędzia Cypress.

## Opis
Testy zostały wykonane dla witryn https://www.24mx.ie/ | https://www.24mx.pl/ w celu wykonania zadania. 

## **Ważne!!**
Domyślnie ustawiona jest witryna https://www.24mx.ie/ aby ją zmienić należy (już na swoim urządzeniu) edytować plik `cypress.json` znajdujący się w katalogu `cypress` utworzonym wcześniej przez Ciebie.


## Uruchomienie testów

Aby uruchomić testy należy przygotować na swoim urządzeniu środowisko testowe a następnie pobrać folder o nazwie **cypress** z mojego repozytorium (spakowane .zip).


**1**. Ściągnij i zainstaluj **NodeJS** (jeśli posiadasz na swoim komputerze możesz ten krok pominąć).

**2**. Utwórz folder na pulpicie o nazwie **cypress**.

**3**. Następnie przejdź do instalacji narzędzia Cypress otwierając wiersz poleceń "cmd", musisz się przedostać do katalogu, który utworzyłeś wcześniej.

**4**. Gdy już zainstalowałeś **NodeJS**, masz otwartą konsolę (oraz znajdujesz się w katalogu utworzonym wcześniej), uruchom instalację Cypress za pomocą polecenia `npm install cypress --save-dev`.

![install cypress](https://user-images.githubusercontent.com/76735369/112727550-463d9380-8f23-11eb-870c-00ca5d2090dc.png)


**5**. Gdy proces instalacji dobiegnie końca, pozostań cały czas w wierszu poleceń i uruchom narzędzie za pomocą komendy: `.\node_modules\.bin\cypress open`. Gdy już narzędzie się uruchomi zamknij je, przejdz do katalogu w którym został zainstalowany (czyt. **cypress**) następnie `cypress -> integration:` i wszystko usuń z tego folderu abyś miał tylko te testy, które pobierzesz z mojego repozytorium.

**6**. Teraz pobierz, wypakuj i skopiuj dane z mojego repozytorium (całą zawartość folderu pdc-test-main: **folder cypress, cypress.json i README.md**), następnie przejdź do katalogu gdzie jest zainstalowany cypress i wklej całą zawartość o której wspomniałem wyżej. (**program poprosi Cię abyś nadpisał zmiany - nadpisz**)

![pdccc](https://user-images.githubusercontent.com/76735369/114912516-5eb51580-9e20-11eb-92a4-e81f8c96f33d.png)

**7**. Aby uruchomić narzędzie pozostań wciąż w danej lokalizacji (w wierszu poleceń) i wpisz ponownie komendę: `.\node_modules\.bin\cypress open`

![exec](https://user-images.githubusercontent.com/76735369/112727557-505f9200-8f23-11eb-827c-bab9d2534875.png)


**8**. Uruchamianie chwilę potrwa, gdy otworzy się okno zostanie wyświetlona liczba testów, które posiadamy. Możesz uruchomić wszystkie jednocześnie za pomocą `Run 5 integration specs` bądź pojedyńczo klikając na wybrany test.

![cypresssss](https://user-images.githubusercontent.com/76735369/114912795-b8b5db00-9e20-11eb-95bc-9f79b7557f8d.png)


**9**. Po uruchomieniu testów otworzy się okno przeglądarki, gdzie zostanie wyświetlony rezultat testów.
