import people from './data'
import { useState } from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const nextPerson = (index) => {
    const newIndex = (index + 1) % people.length
    setIndex(newIndex)
  }

  const prevPerson = (index) => {
    const newIndex = (index - 1 + people.length) % people.length
    setIndex(newIndex)
  }

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length)
    if (randomIndex === index) {
      randomIndex = (randomIndex + 1) % people.length
    }
    setIndex(randomIndex)
  }
  return (
    <main>
      <section className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <RiDoubleQuotesR className="quote-icon" />
        </div>
        <h4 className="author" style={{ fontWeight: '500' }}>
          {name}
        </h4>
        <h4 className="job">{job}</h4>
        <p className="info">{text}</p>
        <div>
          <button
            type="button"
            className="prev-btn"
            onClick={() => {
              prevPerson(index)
            }}
          >
            <GrFormPrevious />
          </button>
          <button type="button" className="next-btn">
            <GrFormNext
              onClick={() => {
                nextPerson(index)
              }}
            />
          </button>
        </div>
        <button type="btn" className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </section>
    </main>
  )
}
export default App
