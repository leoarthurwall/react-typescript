export interface Props {
    title: string
    color?: string
}

const Header = (props: Props) => {
    return (
        <h1 className="header" style={{color: props.color ? props.color : 'blue'}}>{props.title}</h1>
    )
}

export default Header