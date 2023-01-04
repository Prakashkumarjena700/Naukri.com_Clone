import React from 'react'

export default function Pagination({ current, total, onchange }) {
    const prev = <button disabled={current == 1} onClick={() => onchange(current - 1)} >{'<'} Previous</button>
    const next = <button disabled={current == total} onClick={() => onchange(current + 1)} >Next {'>'}</button>
    const buttns = new Array(total).fill(0).map((ele, i) => <button className={current==i+1 ? 'active' : 'notactiv'} disabled={current == i + 1} onClick={() => onchange(current = i + 1)} >{i + 1}</button>)
    return (
        <div className='paginationContainer' >
            {prev}
            {buttns}
            {next}
        </div>
    )
}
