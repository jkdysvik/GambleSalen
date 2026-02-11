import './player-card.css'

export default function PlayerCard({ position, name, netto }) {
    const totalt_vunnet = netto;
    const winningsClass = totalt_vunnet >= 0 ? 'positive' : 'negative';
    console.log(netto)
    return (
        <>
        <div className="player-card">
            <div className="position-badge">{position}</div>
                        <img
                            src={`/assets/${name}.jpg`}
                            alt={name}
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = '/assets/alt.jpg';
                            }}
                        />
            <div className="player-info">
                <p className="player-name">{name}</p>
                <p className={`player-winnings ${winningsClass}`}>Netto gain: {totalt_vunnet}</p>
            </div>
        </div>
        </>
  )
}

