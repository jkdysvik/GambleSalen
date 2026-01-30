import './player-card.css'

export default function PlayerCard({ position, name, kjøptinn, vunnet }) {
    const totalt_vunnet = vunnet - kjøptinn;
    const winningsClass = totalt_vunnet >= 0 ? 'positive' : 'negative';
    console.log(vunnet)
    console.log(kjøptinn)

    return (
        <>
        <div className="player-card">
            <div className="position-badge">{position}</div>
            <img src={`/assets/${name}.jpg`} alt={name}></img>
            <div className="player-info">
                <p className="player-name">{name}</p>
                <p className={`player-winnings ${winningsClass}`}>Netto gain: {totalt_vunnet}</p>
            </div>
        </div>
        </>
  )
}

