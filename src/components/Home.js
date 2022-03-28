import Form from './Form.js';

function Home() {
  return (
    <main>
      <section className='homePage'>
        <div className="wrapper">
          <Form />
          <div className="definition">
            <p>A haiku is a tradition Japanese three-line poem with seventeen syllables, written in a <span>5/7/5</span> syllable count. Often focusing on images from nature, haiku emphasizes simplicity, intensity, and directness of expression.</p>
          </div>
        </div>
      </section>
    </main>
    
  )
  
}

export default Home;