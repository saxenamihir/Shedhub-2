import React from 'react'

import ShedCard from './ShedCard.jsx';
import { shedsData } from '../data/shedsData.js';
function Right() {
  return (
    <div className="sheds-container">
                {shedsData.map((shed) => (
                <ShedCard key={shed.id} shed={shed} />
               ))}
    </div>
  )
}

export default Right