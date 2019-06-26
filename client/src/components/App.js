import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {toyinLaoye, kunleBabatunde, harrisonEhiamadon,femiAdetola,OlabisiOlogunleko,
ErastoNeptune,SpenceRachael,EmmanuelAkpata, BenOmijie, BayoLawal, EnitanJulius,
AwojobiOlufemi,RogerFraser,FelixLagos,OpemipoBadmus,MichaelEmueze,ChrisDuyile,
BabsFasessin,AbiodunAlabi} from '../Departments/ALCC/call_logs/call_list';
import Home from '../Departments/ALCC/MBC_leaders';
import {MBC_Event} from '../components/ALCC/Events/mbc_event';
import {MBC_Tasks} from '../components/ALCC/Tasks/mbc_task';
import {MBC_Notes} from '../components/ALCC/Notes/mbc_notes';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/toyinlaoye" component={toyinLaoye} />
        <Route path="/kunlebabatunde" component={kunleBabatunde} />
        <Route path="/harrisonEhiamadon" component={harrisonEhiamadon} />
        <Route path="/femiAdetola" component={femiAdetola} />
        <Route path="/OlabisiOlogunleko" component={OlabisiOlogunleko} />
        <Route path="/ErastoNeptune" component={ErastoNeptune} />
        <Route path="/SpenceRachael" component={SpenceRachael} />
        <Route path="/EmmanuelAkpata" component={EmmanuelAkpata} />
        <Route path="/BenOmijie" component={BenOmijie} />
        <Route path="/BayoLawal" component={BayoLawal} />
        <Route path="/EnitanJulius" component={EnitanJulius} />
        <Route path="/AwojobiOlufemi" component={AwojobiOlufemi} />
        <Route path="/RogerFraser" component={RogerFraser} />
        <Route path="/FelixLagos" component={FelixLagos} />
        <Route path="/OpemipoBadmus" component={OpemipoBadmus} />
        <Route path="/MichaelEmueze" component={MichaelEmueze} />
        <Route path="/ChrisDuyile" component={ChrisDuyile} />
        <Route path="/BabsFasessin" component={BabsFasessin} />
        <Route path="/AbiodunAlabi" component={AbiodunAlabi} />
        <Route path="/alcc/events/mbc" component={MBC_Event} />
        <Route path="/alcc/tasks/mbc" component={MBC_Tasks} />
        <Route path="/alcc/notes/mbc" component={MBC_Notes} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
