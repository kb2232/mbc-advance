import React from 'react';
import {Link} from 'react-router-dom';
import IndiQuerySearch from '../../components/ALCC/IndiQuerySearch';

class LeaderCallLogs extends React.Component{

  render(){
    return(
      <div className="appCol">
        <div className="AppHeader">
          <IndiQuerySearch />
        </div>
        <div>Select your name from below</div><br/>
        <div><Link to="/toyinlaoye">Toyin Laoye</Link></div>
        <div><Link to="/kunlebabatunde">Kunle Babatunde</Link></div>
        <div><Link to="/harrisonEhiamadon">Harrison Ehiamadon</Link></div>
        <div><Link to="/femiAdetola">Femi Adetola</Link></div>
        <div><Link to="/OlabisiOlogunleko">Olabisi Ologunleko</Link></div>
        <div><Link to="/ErastoNeptune">Erasto Neptune</Link></div>
        <div><Link to="/SpenceRachael">Spence Rachael</Link></div>
        <div><Link to="/EmmanuelAkpata">Emmanuel Akpata</Link></div>
        <div><Link to="/BenOmijie">Ben Omijie</Link></div>
        <div><Link to="/BayoLawal">Bayo Lawal</Link></div>
        <div><Link to="/EnitanJulius">Enitan Julius</Link></div>
        <div><Link to="/AwojobiOlufemi">Awojobi Olufemi</Link></div>
        <div><Link to="/RogerFraser">Roger Fraser</Link></div>
        <div><Link to="/FelixLagos">Felix Lagos</Link></div>
        <div><Link to="/OpemipoBadmus">Opemipo Badmus</Link></div>
        <div><Link to="/MichaelEmueze">Michael Emueze</Link></div>
        <div><Link to="/ChrisDuyile">Chris Duyile</Link></div>
        <div><Link to="/BabsFasessin">Babs Fasessin</Link></div>
        <div><Link to="/AbiodunAlabi">Abiodun Alabi</Link></div>
        <br />
        <div>
          <ul className="footerStyle">
            <li><Link to="/alcc/events/mbc">Events</Link></li>
            <li><Link to="/alcc/tasks/mbc">Tasks</Link></li>
            <li><Link to="/alcc/notes/mbc">Notes</Link></li>
          </ul>
        </div>
      </div>
    )
  }

}

export default LeaderCallLogs;