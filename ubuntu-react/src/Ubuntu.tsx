import Body from './Body';
import TopBar from './Components/Topbar/Topbar';

function Ubuntu() {
    return (
        <div
            id="ubuntu-container"
            className="flex h-screen w-screen grid-cols-12 grid-rows-24 flex-col select-none"
        >
            <TopBar />
            <Body />
        </div>
    );
}

export default Ubuntu;
