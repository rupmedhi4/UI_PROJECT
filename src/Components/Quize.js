import { React, useEffect, useState } from 'react'
import axios from 'axios'
import ProgressBar from './ProgressBar'


export default function Quize() {
    const [data, setData] = useState(null)
    const [index, setIndex] = useState(0)
    const [selectedAns, setSelectedAns] = useState('')
    const [correctedAns, setCorrectedAns] = useState(0)
    const [wrongAns, setWrongAns] = useState(0)
    const [totalAns, setTotalAns] = useState(0)
    const [submit, setSubmit] = useState(null)




    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
            .then((res) => {
                setData(res.data.results)

            })
    }, [])
    console.log(data)

    const nextPageHandler = () => {
        if (selectedAns === data[index].correct_answer) {
            setCorrectedAns(correctedAns + 1)

        } else {
            setWrongAns(wrongAns + 1)
        }
        setTotalAns(totalAns+1)
        setIndex(index + 1)
    }

    const selectedAnsHandler = (ans) => {
        setSelectedAns(ans)
    }
    console.log(correctedAns);
    return (
        <>
            <ProgressBar data={data} totalAns={totalAns}/>
            <div>
                {
                    data ? <>
                    <span>{index < data.length ? data[index].question : null}</span>
                        {index < data.length ?
                            <div key={index}>
                            <input type="radio" value={data[index].correct_answer} name="Options" id={`${index}`}
                                onChange={(e) => selectedAnsHandler(e.target.value)}
                            />
                            <label htmlFor={`${index}`}>{data[index].correct_answer}</label>

                            {data[index].incorrect_answers.map((option, index) => (
                                <div key="index">
                                    <input type="radio" value={option} name="Options" id={`${option}${index}`}
                                        onChange={(e) => selectedAnsHandler(e.target.value)}
                                    />
                                    <label htmlFor={`${option}${index}`}>{option}</label>
                                </div>
                            ))}
                        </div> : null
                        }
                    </> : "Loading...."
                }
            </div>
            <button onClick={nextPageHandler} disabled={submit === true || index === 10}>Next</button> <br />
            <button onClick={() => setSubmit(true)}>Submit</button>

            {
                <>
                    {
                        submit ? <>
                            <h1>Total Questions attempts : {correctedAns + wrongAns}</h1>
                            <h2>Total Corrected Ans :{correctedAns} </h2>
                            <h3>Total Wrong Ans :{wrongAns} </h3>
                        </> : null

                    }

                </>
            }
        </>

    )
}