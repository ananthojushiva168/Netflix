import React, {  useState } from 'react'

export default function SingleAcc({data}) {
    const [selected, setSelected] = useState(null);
    const change = (i) => {
        if (selected === i) {
          return setSelected(null);
        }
        setSelected(i);
      };
      return (
        <div className="accordion">
          {data.map((item, i) => (
            <div className="sixth-child-box" key={i}>
              <div className="sixth-child-box2"  onClick={() => change(i)}>
                <h1>{item.title}</h1>
                <span className="arrow">{selected === i ? "x" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                <p>{item.info}</p>
                <br />
                <p>{item.info2 ? item.info2 : ""}</p>
              </div>
            </div>
          ))}
        </div>
  )
}
