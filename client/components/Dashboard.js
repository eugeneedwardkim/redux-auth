import React from 'react';
import zelda from '../images/zelda.png'
import { mainBg } from '../styles.scss'

const Dashboard = () => (
  <div className={mainBg} >
    <h3>Only Logged In Users Can See This</h3>
    <img src={zelda} />
  </div>
)

export default Dashboard;