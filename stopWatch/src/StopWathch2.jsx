import { useRef, useState } from "react"

const StopWatch2 = () => {

    const [StartTime, SetStartTime] = useState(null)
    let [timing, setTiming] = useState([])
    const [now, setNow] = useState(null)
    const interval = useRef(null)
    const startHandler = () => {
        SetStartTime(Date.now())
        setNow(Date.now)
        clearInterval(interval.current)
        interval.current = setInterval(() => {
            setNow(Date.now())
        }, 1)
    }
    const StopHandler = () => {
        clearInterval(interval.current)
    }
    const lapHandler = () => {
        if (now !== null) {
            setTiming((prev) => [...prev, (now - StartTime) / 1000]);
        }
    }



    let seconds = 0
    if (StartTime !== null && now !== null) {
        seconds = (now - StartTime) / 1000
    }
    const resetHandler = () => {
        clearInterval(interval.current);
        SetStartTime(null);
        setNow(null);
        setTiming([]);
    };



    return (
        <>
            <div className="text-center d-flex justify-content-center">
                <div className="card m-4 py-3 shadow " style={{ width: "18rem" }}>
                    <div className="card-header">StopWatch</div>
                    <div className="card-body py-4">
                        <p>Time :{seconds.toFixed(3)} </p>
                        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">

                            <button className="btn btn-success " onClick={startHandler}>Start</button>
                            <button className="btn btn-danger  " onClick={StopHandler}>Stop</button>
                            <button className="btn btn-warning  " onClick={lapHandler}>Lap</button>
                            <button className="btn btn-primary   " onClick={resetHandler}>Reset</button>
                        </div>

                        <ol>
                            {timing?.map((time, index) =>
                                (<li key={index}>{time}</li>)
                            )}
                        </ol>
                    </div>
                </div>
            </div>




        </>
    )
}
export default StopWatch2