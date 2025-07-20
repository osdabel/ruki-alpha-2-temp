import Navbottom from "../Navbottom"

const Icon = ({size, fill, weight, icon, name}) => {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <span className="material-symbols-outlined" style={{
            fontSize: `${size}px`,
            fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 48`
            }}>{icon}</span>
            <h6 className='text-sm post'>{name}</h6>
        </div>
    )
}

export default Icon;