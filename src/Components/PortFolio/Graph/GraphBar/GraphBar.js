import React from 'react'

export const GraphBar = (props) => {

    const [isVisible, setVisible] = React.useState(false)
    const domRef = React.useRef()

    React.useEffect(() => {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting)    
            })
        })
        observer.observe(domRef.current)
    }, [])
    
    return (
        <div ref={domRef} 
        className={`graph-bar ${isVisible ? 'graph-vis' : ''}`} 
        style={
            {
                height: props.data.percent, 
                width: '100%', 
                flexGrow: 1,
                animationDelay: (props.delay * .1).toString() + 's'
            }
            }>
            
            <h3>{props.data.name}</h3>
        </div>
    )
}
