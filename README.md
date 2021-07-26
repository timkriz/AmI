# AmI: To TUI or not to TUI

AmI: To TUI or not to TUI je študetnski projekt pri predmetu Ambientna Inteligenca, Fakulteta za elektrotehniko UL, 2021. Namen projekta je bila primerjava grafičnih in oprijemljivih vmesnikov na konkretnem primeru uporabe v ambientni inteligenci. Izhodiščna podlaga je bil članek »To TUI or not to TUI: Evaluating performance and preference in tangible vs. graphical user interfaces« (Zuckerman, 2013). V njem po neuspehu raziskovanja teoretičnih podlag, avtor izvede še uporabniško testiranje z meritvami izvedbe in preference na konkretnem primeru. Na podobnem pristopu temelji ta projekt – podane bodo teoretične osnove iz literature, kratka analiza področja, opis dela ter predstavljeni in evalvirani rezultati uporabniškega testiranja.  

## Installation (TUI) 

1. SOCKET STREŽNIK:

V mapi Simulation/node_server zaženi ukaz:

```
npm install
node app.js
```
(zažene websocket strežnik za komuniciranje z unityem)

2. NODE-RED:

Zaženi node-red, importaj flow iz mape Flows, deploy.

![Tui](https://github.com/timkriz/AmI/blob/main/Images/tui.png)
TUI Node-red flow

3. APLIKACIJA SENSOR NODE FREE:

Najprej v STREAM / STREAM LIVE DATA (MQTT) nastavitvah nastavite:

Izberete željene spremenljivke (accelerometer, gyrosccope...) 
• podatke vašega MQTT brokerja, npr. : tcp://broker.hivemq.com:1883
• vaš Base Topic Name (unikaten !) : AMI_TO_TUI
in vključite Mqtt streaming.

4. UNITY:

Odpreš Unity, open, in izbereš mapo Simulation/AmI Simulation v kateri se nahaja cel
Unity projekt.
Zaženi simulacijo. Nagibaj telefon. V desno/levo povečuje/zmanjšuje intenziteto,
navzgor zamenja barvo, navzdol ugasne luč. Ko obrnjen na hrbtno stran preide v način upravljanja posameznih naprav, ki se jih izbira z vrtenjem v levo/desno.

5. TUI + AUDIO VERSION

Prenesi aplikacijo RedMobileLite za Android telefon. Zaženi strežnik in odpri node-red v brskalniku. Uvozi flow TUI+AUDIO.json in odpri node-red Dashboard. Telefon sedaj uporablja TTS text-to-speech in bere izvedene ukaze (ob obračanju telefona).

## Simulation

Simulation Unity project (2017,2018,2020 versions, 200MB) : https://drive.google.com/drive/folders/1WFl5rDGeqKjDngxLF9Ril2OmdCuGUhRi?usp=sharing

Priporočeno, da uporabite kar zgrajeno aplikacijo v mapi build: Na voljo na istem naslovu. 

![Simulation](https://github.com/timkriz/AmI/blob/main/Images/simulation2.png)


## Installation (GUI) 

Ob vstopu v aplikacijo dodamo novega odjemalca s klikom na gumb »+«, v zgornjem desnem kotu. Vnesemo podatke MQTT strežnika (ime, naslov, port in unikaten »topic«).
Po ustvarjenem odjemalcu, na prazno polje dodamo gumbe z ikonami.:
1.	ON/OFF… tipa switch/button, subtopic: AMI_TO_TUI/onoff,  payload: On: 1 in Off: 0
2.	CHANGE COLOR… tipa switch/button, subtopic: AMI_TO_TUI/color,  payload: On: 1 in Off: 0
3.	INC/DEC… tipa Multi choice, subtopic: AMI_TO_TUI/incdec (dodajanje opcij z »ADD OPTION«)  
  a.	OPTION1:  payload: 1, label: increase  
  b.	OPTION2:  payload: -1, label: decrease  
  c.	OPTION3:  payload: 0, label: stop  
4.	Device… tipa Multi choice, subtopic: AMI_TO_TUI/device  
  a.	OPTION1:  payload: LEFT_LIGHT, label: Left light  
  b.	OPTION2:  payload: RIGHT_LIGHT, label: Right light  
  c.	OPTION3:  payload: BLINDS, label: Blinds  
  d.	OPTION4:  payload: ALL_LIGHTS, label: All lights  


![Gui part](https://github.com/timkriz/AmI/blob/main/Images/GUI_image.png)


