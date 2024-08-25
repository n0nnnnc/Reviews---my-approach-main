import people from './data'
import { useState } from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const prevPerson = (index) => {
    if (index === 0) {
      setIndex(people.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const nextPerson = (index) => {
    if (index === people.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const randomPerson = () => {
    const randomNum = Math.random() * people.length
    const randomIndex = Math.floor(randomNum)
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
          <button type="button" className="prev-btn">
            <GrFormNext
              onClick={() => {
                nextPerson(index)
              }}
            />
          </button>
        </div>
        <button type="btn" className="btn" onClick={randomPerson}>
          surprise me
        </button>
      </section>
    </main>
  )
}
export default App
