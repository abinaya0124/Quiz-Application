import { useState } from "react";
import data from "./data.json";

const Quiz = () => {
  const [active, setActive] = useState(0);
  const [items, setItems] = useState(data);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore]=useState(0)

  const handleNext = (isCorrect) => {
  
    if(isCorrect===true){
        setScore(score+1)
    }
    const nextQue = active + 1;
    if (nextQue < items.length) {
      setActive(nextQue);
    } else {
      setShowScore(true);
    }
    // if(active+1<items.length){
    //     setActive(active+1)
    // }
    // else{
    //     setShowScore(true)
    // }
  };

  return (
    <div className="d-flex justify-content-center m-auto align-items-center mt-5 text-#262626">
      <div
        className="bg-info-subtle rounded-3 p-5 pt-3"
        style={{ width: "80%" }}
      >
        <h3 className="border-bottom border-secondary pb-2 align-items-center flex justify-content-center">
          Quiz App
        </h3>
        {showScore ? (
          <div>
            <h3>
              You have scored {score} out of {items.length}
            </h3>
          </div>
        ) : (
          <>
            {items.map((item, i) => (
              <div key={i} className={active === i ? "d-block" : "d-none"}>
                <h5>
                  {active + 1}.{item.question}
                </h5>
                {item.options.map((it, id) => (
                  <button
                    key={id}
                    className="bg-tertiary rounded-2 p-2 d-flex flex-col w-full"
                    style={{
                      width: "80%",
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                    onClick={()=>handleNext(it.isCorrect)}
                  >
                    {it.ansOption}
                  </button>
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
