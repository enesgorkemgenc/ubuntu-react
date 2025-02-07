import Body from './Body'
import TopBar from './TopBar'

function Ubuntu() {
    return (
        <div
            id="ubuntu-container"
            className="flex h-screen w-screen grid-cols-12 grid-rows-24 flex-col"
        >
            <TopBar />
            <Body />
        </div>
    )
}

export default Ubuntu
