import React from 'react'
import Banner from '../Banner/Banner'
const About = () => {
  return(
    <React.Fragment>
       <div className='bg-green-500' style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>

      {/* About Section */}
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: '#ff4500', marginBottom: '20px' }}>About Us</h1>
        <p>
          Welcome to <strong>Football Live Scoreboard</strong>, your go-to platform for real-time football scores, match
          updates, and player statistics. Whether you're a passionate fan, a casual viewer, or just love keeping up with
          the game, we have you covered!
        </p>

        <h2 style={{ color: '#ff4500', marginTop: '30px' }}>Our Mission</h2>
        <p>
          Our mission is to bring you the most accurate and up-to-date football scores from leagues and tournaments
          worldwide. We aim to keep you connected to the action, no matter where you are.
        </p>
   <Banner />
        
        <h2 style={{ color: '#ff4500', marginTop: '30px' }}>What We Offer</h2>
        <ul style={{ textAlign: 'left', margin: '20px auto', padding: '0 20px' }}>
          <li>Live match scores and updates</li>
          <li>Detailed player and team statistics</li>
          <li>Fixtures and schedules</li>
          <li>In-depth match reports and analysis</li>
          <li>Interactive features for fans</li>
        </ul>

        <h2 style={{ color: '#ff4500', marginTop: '30px' }}>Stay Connected</h2>
        <p>
          Follow us on social media and subscribe to our newsletter for the latest updates, exclusive content, and
          special features. Join our growing community of football enthusiasts and never miss a moment of the action.
        </p>
      </div>
    </div>
    </React.Fragment>
  )
}

export default About