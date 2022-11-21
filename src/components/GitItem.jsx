import PropsType from 'prop-types'

export const GitItem = ({ title, url, id }) => {
    return (
        <div className="card">
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )
}

GitItem.PropsType = {
    title: PropsType.string.isRequired,
    url: PropsType.string.isRequired
}
